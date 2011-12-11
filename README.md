<dl>
Options:
<dt>orientation (how to orient the carousel )</dt> 
<dd>Default: ''(means autodetect)</dd> 
<dd>Possible values</dd> 
<dd>'vertical'</dd> 
<dd>'horizontal' </dd> 
<dt>classItems (Aditional class to add to items)</dt> 
<dd>Default: ''</dd> 
<dt>classEnds (Aditional class to add to ends)</dt> 
<dd>Default: ''</dd> 
<dt>navigation (what kind of ends and scroolers shoud the plugin have)</dt> 
<dd>Default:{ends:'standart',sides:'sliderboth'}</dd> 
<dt>step (how many items to move the focus when you click on cap.or invoke _viewforward/_viewback)</dt> 
<dd>Default: 3</dd>  
<dd>Possible values</dd> 
<dd>Integer value</dd> 
<dt>animation (options for the animation)</dt> 
<dd>Default: '{easing:'swing',speed:'slow'}'</dd> 
<dd>Possible easings 'linear','swing'</dd> 
<dd>maybe something other that cvan be used with the jquery.animate method</dd>  
<dt>icons </dt> 
<dd>Default: {</dd> 
<dd>up: 'ui-icon-circle-triangle-n',  down: 'ui-icon-circle-triangle-s', left: 'ui-icon-circle-triangle-w' right: 'ui-icon-circle-triangle-e'} </dd>    
<dd>accepts string or (jquery) object // needs testing for the jquery</dd> 
<dt>activeItem ((jquery)item which is active)// todo</dt> 
<dd>getter and setter</dd> 
<dd>it shoud accept :</dd> 
<dd>int index value</dd> 
<dd>DOMelement</dd> 
<dd>jquery object</dd>  
<dt>focusItem ((jquery) item which is on focus)//todo</dt> 
<dd>getter and setter</dd> 
<dd>it shoud accept :</dd> 
<dd>int index value</dd> 
<dd>DOMelement</dd> 
<dd>jquery object</dd>  
<dt>callbacks/events</dt>  
<dt>for now all callback are null by default</dd> 
<dd>hoverItemIn (event,data)(when cursor moves into an item)</dd> 
<dd>data.target = the item which was hovered to; </dd> 
<dd>hoverItemOut (event,data) (when cursor moves out of an item)</dd> 
<dd>data.target = the item which was hovered out of;</dd> 
<dd>hoverEndIn (event,data) (when cursor moves into a cap)</dd> 
<dd>data.target = the endwhich was hovered to</dd>  
<dd>hoverEndOut (event,data) (when cursor moves out of a cap)</dd> 
<dd>data.target = the end that was hovered out of</dd> 
<dd>click  (event,data) (when you click on an item)</dd> 
<dd>data.target = the item which was clicked</dd> 
<dt>Methods</dt> 
<dd>refresh</dd> 
<dd>called once when creating</dd>  
<dd>takes any new items into the carousel </dd> 
<dt>destroy //todo</dt> 
</dl>

 Markup & Style:
  Initial markup examples
<textarea>
  <div>
     <a href='#'><img src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg" width="75" height="75" alt="none">Alpha</a> 
    <a href='#'><img src="http://static.flickr.com/75/199481072_b4a0d09597_s.jpg" width="75" height="75" alt="none">Beta</a> 
       <a href='#'><img src="http://static.flickr.com/57/199481087_33ae73a8de_s.jpg" width="75" height="75" alt="none">Gama</a> 
          <a href='#'><img src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg" width="75" height="75" alt="none">Delta</a> 
         <a href='#'><img src="http://static.flickr.com/75/199481072_b4a0d09597_s.jpg" width="75" height="75" alt="none">Epsilon</a> 
        <a href='#'><img src="http://static.flickr.com/57/199481087_33ae73a8de_s.jpg" width="75" height="75" alt="none">Omega</a> 
      </div>

</textarea>
it works with DIV UL  and probably some other elements if it dont work with something and you think it shoud...please tell me

CSS markup
look at the css file in the demo

//todo help wanted
Destroy method
side scroller and pager navigation
new pictures for the preview
testing of activeitem,focusitem,and icons
need to make a copy of this page for documentation 