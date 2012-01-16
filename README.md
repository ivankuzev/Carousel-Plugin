<dl>
<dt>Functional Specifications/Requirements:</dt> 
<dt>Options:</dt> 
<dt>orientation (how to orient the carousel )</dt> 
<dt>Default: ''(means autodetect)</dt> 
<dt>Possible values</dt> 
<dt>'vertical'</dt> 
<dt>'horizontal' </dt> 
<dt>classItems (Aditional class to add to items)</dt> 
<dt>Default: ''</dt> 
<dt>classEnds (Aditional class to add to ends)</dt> 
<dt>Default: ''</dt> 
<dt>navigation (what kind of ends and scroolers shoud the plugin have)</dt> 
<dt>Default:{ends:'standart',sides:'sliderboth'}</dt> 
<dt>step (how many items to move the focus when you click on cap.or invoke _viewforward/_viewback)</dt> 
<dt>Default: 3</dt>  
<dt>Possible values</dt> 
<dt>Integer value</dt> 
<dt>animation (options for the animation)</dt> 
<dt>Default: '{easing:'swing',speed:'slow'}'</dt> 
<dt>Possible easings</dt> 
<dt>'linear'</dt> 
<dt>'swing'</dt> 
<dt>maybe something other that cvan be used with the jquery.animate method</dt>  
<dt>icons </dt> 
<dt>Default: {</dt> 
<dt>up: 'ui-icon-circle-triangle-n',  down: 'ui-icon-circle-triangle-s', left: 'ui-icon-circle-triangle-w' right: 'ui-icon-circle-triangle-e'} </dt>    
<dt>accepts string or (jquery) object // needs testing for the jquery</dt> 
<dt>activeItem ((jquery)item which is active)// todo</dt> 
<dt>getter and setter</dt> 
<dt>it shoud accept :</dt> 
<dt>int index value</dt> 
<dt>DOMelement</dt> 
<dt>jquery object</dt>  
<dt>focusItem ((jquery) item which is on focus)//todo</dt> 
<dt>getter and setter</dt> 
<dt>it shoud accept :</dt> 
<dt>int index value</dt> 
<dt>DOMelement</dt> 
<dt>jquery object</dt>  
<dt>callbacks/events</dt>  
<dt>for now all callback are null by default</dt> 
<dt>hoverItemIn (event,data)(when cursor moves into an item)</dt> 
<dt>data.target = the item which was hovered to; </dt> 
<dt>hoverItemOut (event,data) (when cursor moves out of an item)</dt> 
<dt>data.target = the item which was hovered out of;</dt> 
<dt>hoverEndIn (event,data) (when cursor moves into a cap)</dt> 
<dt>data.target = the endwhich was hovered to</dt>  
<dt>hoverEndOut (event,data) (when cursor moves out of a cap)</dt> 
<dt>data.target = the end that was hovered out of</dt> 
<dt>click  (event,data) (when you click on an item)</dt> 
<dt>data.target = the item which was clicked</dt> 
<dt>Methods</dt> 
<dt>refresh</dt> 
<dt>called once when creating</dt>  
<dt>takes any new items into the carousel </dt> 
<dt>destroy //todo</dt> 
</dl>
<pre>
4 - Markup & Style:
   4.1 Initial markup examples
<code>
  <div>
     <a href='#'><img src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg" width="75" height="75" alt="none">Alpha</a> 
    <a href='#'><img src="http://static.flickr.com/75/199481072_b4a0d09597_s.jpg" width="75" height="75" alt="none">Beta</a> 
       <a href='#'><img src="http://static.flickr.com/57/199481087_33ae73a8de_s.jpg" width="75" height="75" alt="none">Gama</a> 
          <a href='#'><img src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg" width="75" height="75" alt="none">Delta</a> 
         <a href='#'><img src="http://static.flickr.com/75/199481072_b4a0d09597_s.jpg" width="75" height="75" alt="none">Epsilon</a> 
        <a href='#'><img src="http://static.flickr.com/57/199481087_33ae73a8de_s.jpg" width="75" height="75" alt="none">Omega</a> 
      </div>
</code>
it works with DIV UL  and probably some other elements if it dont work with something and you think it shoud...please tell me

CSS markup
look at the css file in the demo
</pre>


//todo help wanted
Destroy method
side scroller and pager navigation
new pictures for the preview
testing of activeitem,focusitem,and icons
need to make a copy of this page for documentation 