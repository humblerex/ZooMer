var figure = document.getElementsByTagName("figure");

var elements = [];


window.addEventListener("mousemove",function(event){
   
});



for(var i=0;i<figure.length;i++)
{
if(figure.item(i).classList.contains("zoomer-item")){
    
    var scale = figure.item(i).dataset.scale;
    console.log(scale);
    var imageSrc = figure.item(i).dataset.src;
    figure.item(i).style.width = "200px";
    figure.item(i).style.height = "200px";
    figure.item(i).style.overflow = "hidden";   
    var newImage = document.createElement("img");    newImage.setAttribute('id',"zoomer"+i);
    newImage.setAttribute('src',imageSrc); 
    newImage.style.width="100%";
    newImage.style.height="100%";
    figure.item(i).appendChild(newImage);
   
   figure.item(i).addEventListener("mouseenter",function(){
        update(this,scale);
    });
    
    figure.item(i).addEventListener("mouseout",function(){
        dupdate(this);
    });

    figure.item(i).addEventListener("mousemove",function(event){
       dance(this,event);
    });   
   
  }
      
}
    
    function dance(ele,event){
        
        var child = ele.getElementsByTagName("img")[0];
        
        var xx = event.clientX-child.offsetLeft;
        var yy = event.clientY-child.offsetTop;
        
      //  console.log(xx+" "+yy);
        
        
        child.style.transformOrigin = xx+"px "+yy+"px";
    }
    

     function update(ele,scale){
       //  console.log(scale);
          var child = ele.getElementsByTagName("img")[0];
        
        child.style.transform = "scale("+scale+")";
         child.style.transition = "0.3s linear all";
         
     } 
     function dupdate(ele){
          var child = ele.getElementsByTagName("img")[0];
                 
        child.style.transform = "scale(1)";
     }   
