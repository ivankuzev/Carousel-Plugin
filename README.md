3 - Functional Specifications/Requirements:
Options:
orientation (how to orient the carousel )
Default: ''(means autodetect)
Possible values
'vertical'
'horizontal' 
classItems (Aditional class to add to items)
Default: ''
classEnds (Aditional class to add to ends)
Default: ''
navigation (what kind of ends and scroolers shoud the plugin have)
Default:{ends:'standart',sides:'sliderboth'}
step (how many items to move the focus when you click on cap.or invoke _viewforward/_viewback)
Default: 3 
Possible values
Integer value
animation (options for the animation)
Default: '{easing:'swing',speed:'slow'}'
Possible easings
'linear'
'swing'
maybe something other that cvan be used with the jquery.animate method 
icons 
Default: {
up: 'ui-icon-circle-triangle-n',  down: 'ui-icon-circle-triangle-s', left: 'ui-icon-circle-triangle-w' right: 'ui-icon-circle-triangle-e'}    
accepts string or (jquery) object // needs testing for the jquery
activeItem ((jquery)item which is active)// todo
getter and setter
it shoud accept :
int index value
DOMelement
jquery object 
focusItem ((jquery) item which is on focus)//todo
getter and setter
it shoud accept :
int index value
DOMelement
jquery object 
callbacks/events 
for now all callback are null by default
hoverItemIn (event,data)(when cursor moves into an item)
data.target = the item which was hovered to; 
hoverItemOut (event,data) (when cursor moves out of an item)
data.target = the item which was hovered out of;
hoverEndIn (event,data) (when cursor moves into a cap)
data.target = the endwhich was hovered to 
hoverEndOut (event,data) (when cursor moves out of a cap)
data.target = the end that was hovered out of
click  (event,data) (when you click on an item)
data.target = the item which was clicked
Methods 
refresh
called once when creating 
takes any new items into the carousel 
destroy //todo 
 
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



//todo help wanted
Destroy method
side scroller and pager navigation
new pictures for the preview
testing of activeitem,focusitem,and icons
need to make a copy of this page for documentation 