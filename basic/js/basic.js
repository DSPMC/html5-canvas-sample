window.onload = function(){
    // get the canvas DOM element by its ID
     var canvas = document.getElementById("myCanvas");
    // declare a 2-d context using the getContext() method of the 
    // canvas object
     var context = canvas.getContext("2d");

    // set the line width to 10 pixels
     context.lineWidth = 10;
    // set the line color to blue
     context.strokeStyle = "blue";
     // line caps: butt, round, square
     context.lineCap = "round";


  // position the drawing cursor
     context.moveTo(50, canvas.height - 50);
  // draw the line
     context.lineTo(canvas.width - 50, 50);
  // make the line visible with the stroke color
     context.stroke();
};