<ul>
<li>Functional Specifications/Requirements:
<li>Options:
<li>orientation (how to orient the carousel )
<li>Default: ''(means autodetect)
<li>Possible values
<li>'vertical'
<li>'horizontal' 
<li>classItems (Aditional class to add to items)
<li>Default: ''
<li>classEnds (Aditional class to add to ends)
<li>Default: ''
<li>navigation (what kind of ends and scroolers shoud the plugin have)
<li>Default:{ends:'standart',sides:'sliderboth'}
<li>step (how many items to move the focus when you click on cap.or invoke _viewforward/_viewback)
<li>Default: 3 
<li>Possible values
<li>Integer value
<li>animation (options for the animation)
<li>Default: '{easing:'swing',speed:'slow'}'
<li>Possible easings
<li>'linear'
<li>'swing'
<li>maybe something other that cvan be used with the jquery.animate method 
<li>icons 
<li>Default: {
<li>up: 'ui-icon-circle-triangle-n',  down: 'ui-icon-circle-triangle-s', left: 'ui-icon-circle-triangle-w' right: 'ui-icon-circle-triangle-e'}    
<li>accepts string or (jquery) object // needs testing for the jquery
<li>activeItem ((jquery)item which is active)// todo
<li>getter and setter
<li>it shoud accept :
<li>int index value
<li>DOMelement
<li>jquery object 
<li>focusItem ((jquery) item which is on focus)//todo
<li>getter and setter
<li>it shoud accept :
<li>int index value
<li>DOMelement
<li>jquery object 
<li>callbacks/events 
<li>for now all callback are null by default
<li>hoverItemIn (event,data)(when cursor moves into an item)
<li>data.target = the item which was hovered to; 
<li>hoverItemOut (event,data) (when cursor moves out of an item)
<li>data.target = the item which was hovered out of;
<li>hoverEndIn (event,data) (when cursor moves into a cap)
<li>data.target = the endwhich was hovered to 
<li>hoverEndOut (event,data) (when cursor moves out of a cap)
<li>data.target = the end that was hovered out of
<li>click  (event,data) (when you click on an item)
<li>data.target = the item which was clicked
<li>Methods 
<li>refresh
<li>called once when creating 
<li>takes any new items into the carousel 
<li>destroy //todo 
</ul>
<pre>
4 - Markup & Style:
   4.1 Initial markup examples
  <div>
     <a href='#'><img src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg" width="75" height="75" alt="none">Alpha</a> 
    <a href='#'><img src="http://static.flickr.com/75/199481072_b4a0d09597_s.jpg" width="75" height="75" alt="none">Beta</a> 
       <a href='#'><img src="http://static.flickr.com/57/199481087_33ae73a8de_s.jpg" width="75" height="75" alt="none">Gama</a> 
          <a href='#'><img src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg" width="75" height="75" alt="none">Delta</a> 
         <a href='#'><img src="http://static.flickr.com/75/199481072_b4a0d09597_s.jpg" width="75" height="75" alt="none">Epsilon</a> 
        <a href='#'><img src="http://static.flickr.com/57/199481087_33ae73a8de_s.jpg" width="75" height="75" alt="none">Omega</a> 
      </div>
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