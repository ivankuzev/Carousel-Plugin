(function( $ ) {
    $.widget( "ik.carousel", {
        // default options
        options: {
            //basic display
            orientation: '',
            classItems:'',
            classEnds:'',
            navigation:{
                ends:'standart',
                sides:'sliderboth'
            },
            step:3,
            animation:{
                easing:'swing',
                speed:'slow'
            },   
            icons:{
                up: 'ui-icon-circle-triangle-n',
                down: 'ui-icon-circle-triangle-s',
                left: 'ui-icon-circle-triangle-w',
                right: 'ui-icon-circle-triangle-e' 
            },
            //active state
            activeItem:null,
            focusItem:null,
            //callbacks
            hoverItemIn:null,
            hoverItemOut:null,
            hoverCapIn:null,
            hoverCapOut:null,
            click:null,

            //for private use
            classFocus: 'ui-state-hover',
            classDefault: 'ui-state-default',
            classHover: 'ui-state-hover',
            classActive: 'ui-state-active',
            classDisabled: 'ui-state-disabled'

        },  
        _setOption: function( key, value ) {
            if ( key == "focusItem" ) {
                // if user sets new focus item roll to focus
                if(typeof(value) === "number"){
                    value = this.element.find('li.ik-carousel-item:eq('+value+')');
                }else{
                    value = $(value);  
                }

                this.options.focusItem = value;
                this._setview();
            }else{
                this._super( key, value );
            }
        },                     
        _create: function() {
            // adding base class to main container
            this.element.addClass('ik-carousel');
            // and reloading
            this.refresh();  
        },
        //setting outer width
        _setOuterSize:function(object,width,height){
            if (width === null)width = object.outerWidth();
            if (height === null)height = object.outerHeight();
            var outerHeightAddition = object.outerHeight() - object.height();   
            var outerWidthAddition = object.outerWidth() - object.width();  
            object.height(height-outerHeightAddition).width(width-outerWidthAddition);
        },
        reCenter: function(){  
            this.element.find('li.ik-carousel-item').each(function(){

                var h = $(this).height(),
                w = $(this).width(),
                ch =  $(this).children(':eq(0)').outerHeight(),         
                cw =  $(this).children(':eq(0)').outerWidth();         
                $(this).children(':eq(0)').css({'margin-left':(w-cw)/2,'margin-top':(h-ch)/2});

            });
        },
        //only a shorthand function
        _refreshNavigation:function(){
            this._refreshNavigationEnds();
            this._refreshNavigationSides();
        },
        _refreshNavigationEnds:function(){
            //todo
            if(this.options.navigation.ends == 'standart'){
                //check and making ends as needed
                // adding top/left cap
                if(this.element.children('div.ik-carousel-end-1').length== 0){
                    //apply rounded corners 
                    var icon;
                    if(this.options.orientation === 'vertical'){
                        //todo icons
                        if(typeof(this.options.icons.up) === 'string'){
                            icon = $('<span class="ui-icon '+this.options.icons.up +'">');
                        }else{
                            icon = this.options.icons.up; 
                        }
                    }else if(this.options.orientation === 'horizontal'){
                        //todo icons
                        if(typeof(this.options.icons.left) === 'string'){
                            icon = $('<span class="ui-icon '+this.options.icons.left +'">');
                        }else{
                            icon = this.options.icons.left; 
                        }
                    }
                    this.element.prepend($('<div>').addClass('ik-carousel-end-1 '+this.options.classEnds +' ' +this.options.classDefault).append(icon));   

                    // adding hover handler to cap
                    this.element.children('div.ik-carousel-end-1').hover(  $.proxy(function(eventobject){

                        this._hoverCapIn(eventobject );      
                    },this), 
                    $.proxy(function(eventobject){ 
                        this._hoverCapOut(eventobject );      
                    },this));
                }
                // adding bottom/right cap
                if(this.element.children('div.ik-carousel-end-2').length== 0){
                    //apply rounded corners 
                    var icon;
                    if(this.options.orientation === 'vertical'){
                        //todo icons
                        if(typeof(this.options.icons.down) === 'string'){
                            icon = $('<span class="ui-icon '+this.options.icons.down +'">');
                        }else{
                            icon = this.options.icons.down; 
                        }
                    }else if(this.options.orientation === 'horizontal'){
                        //todo icons
                        if(typeof(this.options.icons.right) === 'string'){
                            icon = $('<span class="ui-icon '+this.options.icons.right +'">');
                        }else{
                            icon = this.options.icons.right; 
                        }
                    } 
                    this.element.append($('<div>').addClass('ik-carousel-end-2 '+this.options.classEnds +' ' +this.options.classDefault).append(icon));   

                    // adding hover handler to cap 
                    this.element.children('div.ik-carousel-end-2').hover(  $.proxy(function(eventobject){

                        this._hoverCapIn(eventobject );      
                    },this), 
                    $.proxy(function(eventobject){ 
                        this._hoverCapOut(eventobject );          
                    },this));
                }
                if(this.element.hasClass('ui-corner-all')){
                    if(this.options.orientation === 'horizontal'){
                        this.element.children('div.ik-carousel-end-1').addClass('ui-corner-left')
                        this.element.children('div.ik-carousel-end-2').addClass('ui-corner-right')
                    }else if(this.options.orientation === 'vertical'){
                        this.element.children('div.ik-carousel-end-1').addClass('ui-corner-top')
                        this.element.children('div.ik-carousel-end-2').addClass('ui-corner-bottom')
                    }
                }
                // aranging ends and list 
                if(this.options.orientation === 'vertical'){   
                    this.element.children('div.ik-carousel-items').css({'width':this.element.width(),'height':this.element.height()-(this.element.children('div.ik-carousel-end-1').outerHeight()*2)});
                    var sumOfChildrenHeight = 0; 
                    this.element.find('li.ik-carousel-item').each(function() 
                    { 
                        sumOfChildrenHeight += $(this).outerHeight(); 
                    });
                    this.element.find('ul.ik-carousel-items').width(this.element.width()).height(sumOfChildrenHeight);
                    // getting content width from known outerWidth; 
                    this._setOuterSize(this.element.children('div.ik-carousel-end-1,div.ik-carousel-end-2'),this.element.width(),null);
                }else if(this.options.orientation === 'horizontal'){
                    this.element.children('div.ik-carousel-items').css({'width':this.element.width()-(this.element.children('div.ik-carousel-end-1').outerWidth()*2),'height':this.element.height});
                    var sumOfChildrenWidth = 0; 
                    this.element.find('li.ik-carousel-item').each(function() 
                    { 
                        sumOfChildrenWidth += $(this).outerWidth(); 
                    });
                    this.element.find('ul.ik-carousel-items').height(this.element.height()).width(sumOfChildrenWidth);
                    // getting content height from known outerHeight;

                    this._setOuterSize(this.element.children('div.ik-carousel-end-1,div.ik-carousel-end-2'),null,this.element.height());
                }
                // centering the icon on end 1
                var marginX = (this.element.children('div.ik-carousel-end-1').width()-this.element.children('div.ik-carousel-end-1').children().outerWidth())/2; 
                var marginY =(this.element.children('div.ik-carousel-end-1').height()-this.element.children('div.ik-carousel-end-1').children().outerHeight())/2; 
                this.element.children('div.ik-carousel-end-1').children().css({'margin-top':marginY,'margin-left':marginX});

                // centering the icon on end 2
                var marginX = (this.element.children('div.ik-carousel-end-2').width()-this.element.children('div.ik-carousel-end-2').children().outerWidth())/2; 
                var marginY =(this.element.children('div.ik-carousel-end-2').height()-this.element.children('div.ik-carousel-end-2').children().outerHeight())/2; 
                this.element.children('div.ik-carousel-end-2').children().css({'margin-top':marginY,'margin-left':marginX});

                //adding click handler to caps
                this.element.children('div.ik-carousel-end-1').click(  $.proxy(function(eventobject){
                    this._viewback(eventobject);      
                },this));
                this.element.children('div.ik-carousel-end-2').click(  $.proxy(function(eventobject){
                    this._viewforward(eventobject);      
                },this));
            }else if(this.options.navigation.ends === 'none'){
                this.element.children('div.ik-carousel-end-1,div.ik-carousel-end-2').remove();
                this.element.children('div.ik-carousel-items').css({'width':this.element.width(),'height':this.element.height()});
                if(this.options.orientation === 'vertical'){   
                    var sumOfChildrenHeight = 0; 
                    this.element.find('li.ik-carousel-item').each(function() 
                    { 
                        sumOfChildrenHeight += $(this).outerHeight(); 
                    });
                    this.element.find('ul.ik-carousel-items').width(this.element.width()).height(sumOfChildrenHeight);
                }else if(this.options.orientation === 'horizontal'){
                    var sumOfChildrenWidth = 0; 
                    this.element.find('li.ik-carousel-item').each(function() 
                    { 
                        sumOfChildrenWidth += $(this).outerWidth(); 
                    });
                    this.element.find('ul.ik-carousel-items').height(this.element.height()).width(sumOfChildrenWidth);
                } 
         }

        },
        _refreshNavigationSides:function(){
            //todo
        },
        _reOrientate:function(){     
            if(this.options.orientation === ''){
                if(this.element.width() >= this.element.height()){
                    this.options.orientation = 'horizontal';
                }else{
                    this.options.orientation = 'vertical';
                }
            }
            if(this.options.orientation === 'vertical'){
                this._setOuterSize(this.element.find('li.ik-carousel-item'),this.element.width(),null);
                this.element.removeClass('ik-carousel-horizontal').addClass('ik-carousel-vertical');   
            }else if(this.options.orientation === 'horizontal'){

                this._setOuterSize(this.element.find('li.ik-carousel-item'),null,this.element.height());
                this.element.removeClass('ik-carousel-vertical').addClass('ik-carousel-horizontal'); 
            } 
            this._refreshNavigation();
        },
        refresh: function(){

            // create internal li element to contain the list 

            if(this.element.children('div.ik-carousel-items').length ==0){
                this.element.append($('<div class="ik-carousel-items">').append($('<ul class="ik-carousel-items">')));
            }
            // move the elements to the internal list
            this.element.children( ":not(.ik-carousel-items,.ik-carousel-end-1,.ik-carousel-end-2)" ).each( $.proxy(function( i, el ) {

                // Add the class so this option will not be processed next time the list is refreshed
                var $el = $( el );
                //if wraping is needed
                if (!$el.is('li')){
                    $el = $('<li class="ik-carousel-disposable">').append($el); 
                }
                $el.addClass( 'ik-carousel-item '+ this.options.classDefault +' '+this.options.classItems);
                // adding mouse hover handlers
                $el.hover(  $.proxy(function(eventobject){
                    this._hoverItemIn( eventobject );      
                },this), 
                $.proxy(function(eventobject){ 
                    this._hoverItemOut( eventobject );      
                },this));
                // adding click handler
                $el.click(  $.proxy(function(eventobject){
                    this._onClick(eventobject);  
                },this));
                // move the new item to the internal list
                this.element.find('ul.ik-carousel-items').append($el);
            },this));
            //checking if there shoud be any ends
            this._reOrientate()

            this._setview();


        },
        _viewback:function(event){ 
            var newindex =  this.options.focusItem.index();
            newindex-= this.options.step;
            if(newindex < 0)newindex =0;
            this.options.focusItem = this.element.find('li.ik-carousel-item:eq('+newindex+')');
            this._setview();

        },
        _viewforward:function(event){ 
            var newindex =  this.options.focusItem.index();
            newindex+= this.options.step;
            if(newindex >  (this.element.find('ul.ik-carousel-items').children().length-1)) newindex =this.element.find('ul.ik-carousel-items').children().length-1 ;
            this.options.focusItem = this.element.find('li.ik-carousel-item:eq('+newindex+')');
            this._setview();     
        },
        //the actual hover methods
        _setview:function(){
            if(this.options.focusItem === null){
                this.options.focusItem  = this.element.find('li.ik-carousel-item:eq(0)');  
            }  
            this.element.find('ul.ik-carousel-items').children(this.options.classFocus).removeClass(this.options.classFocus).addClass(this.options.classDefault);
            this.options.focusItem.removeClass(this.options.classDefault).addClass(this.options.classFocus);
            if(this.options.orientation ==='vertical'){
                var heightContainer=  this.element.find('div.ik-carousel-items').height();
                var heightList=  this.element.find('ul.ik-carousel-items').outerHeight();

                var topFocusItem=  this.options.focusItem.position().top;
                var heightFocusItem =  this.options.focusItem.outerHeight(); 
                var animationTarget = -(topFocusItem+(heightFocusItem/2))+(heightContainer/2);
                if(animationTarget > 0)  animationTarget = 0;
                if(animationTarget < -(heightList-heightContainer))animationTarget = -(heightList-heightContainer);    

                this.element.find('ul.ik-carousel-items').animate({'top':animationTarget},this.options.animation.speed,this.options.animation.easing);
            }else if(this.options.orientation ==='horizontal'){
                var widthContainer=  this.element.find('div.ik-carousel-items').width();
                var widthList=  this.element.find('ul.ik-carousel-items').outerWidth();

                var leftFocusItem=    this.options.focusItem.position().left;
                var widthFocusItem =  this.options.focusItem.outerWidth(); 
                var animationTarget = -(leftFocusItem+(widthFocusItem/2))+(widthContainer/2);
                if(animationTarget > 0)  animationTarget = 0;
                if(animationTarget < -(widthList-widthContainer))animationTarget = -(widthList-widthContainer);    
                this.element.find('ul.ik-carousel-items').animate({'left':animationTarget},this.options.animation.speed,this.options.animation.easing);

            }
            // disabled sides
            if(this.options.navigation.ends === 'standart'){
                this.element.children('div.ik-carousel-end-1,div.ik-carousel-end-2').removeClass(this.options.classDisabled);
                if(this.options.focusItem.index() ===  (this.element.find('ul.ik-carousel-items').children().length-1)){
                    this.element.children('div.ik-carousel-end-2').addClass(this.options.classDisabled);
                }
                if(this.options.focusItem.index() === 0){
                    this.element.children('div.ik-carousel-end-1').addClass(this.options.classDisabled);

                }
            }

            this.reCenter();
        },
        _onClick:function(event){

            var target = $(event.currentTarget);
            target.siblings().removeClass(this.options.classActive).addClass(this.options.classDefault);
            target.removeClass(this.options.classDefault).addClass(this.options.classActive);
            this.options.focusItem = target;
            this._setview();     
            this._trigger( "click", null,  {'target':target} );      
        },
        _hoverItemIn:function(event){    
            var target = $(event.currentTarget);     
            $(target).removeClass(this.options.classDefault);               
            $(target).addClass(this.options.classHover);                         

            this._trigger( "hoverItemIn", null,  {'target':target} );      

        },
        _hoverItemOut:function(event){           
            var target = $(event.currentTarget);     
            $(target).removeClass(this.options.classHover);               
            $(target).addClass(this.options.classDefault);                         
            this._trigger( "hoverItemOut", null,  {'target':target} );  
        },
        _hoverCapIn:function(event){    
            var target = $(event.currentTarget);     
            $(target).removeClass(this.options.classDefault);               
            $(target).addClass(this.options.classHover);                         
            this._trigger( "hoverCapIn", null,  {'target':target} );      
        },
        _hoverCapOut:function(event){           
            var target = $(event.currentTarget);     
            $(target).removeClass(this.options.classHover);               
            $(target).addClass(this.options.classDefault);                         
            this._trigger( "hoverCapOut", null,  {'target':target} );      

        }
    });
}( jQuery ));
