var canvas = document.getElementById("radDireAnc");
var context = canvas.getContext("2d");
var x = 0;
var y = 0;
var width = 242;
var height = 235;
var imageObj = new Image();

var x2 = 252;
var width2 = 242;
var height2 = 235;
var imageObj2 = new Image();

imageObj.onload = function()
{
    context.drawImage(imageObj, x, y, width, height);
};
imageObj.src = "/images/dota/beginner/rad_ancient_orig.png";

imageObj2.onload = function()
{
    context.drawImage(imageObj2, x2, y, width2, height2);
};
imageObj2.src = "/images/dota/beginner/dire_ancient_orig.png";

//http://www.html5canvastutorials.com/tutorials/html5-canvas-image-loader/
     /*function loadImages(sources, callback) 
     {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }

          var canvas = document.getElementById("radDireAnc");
          var context = canvas.getContext("2d");




          var sources = 
          {
               radAncient: "/images/dota/beginner/rad_ancient_orig.png",
               direAncient: "/images/dota/beginner/dire_ancient_orig.png"

     

          };

          loadImages(sources, function(images)
          {
               context.drawImage(images.radAncient, 0, 0, 242, 235);
               context.drawImage(images.direAncient, 252, 0, 242, 235);


          }); */

