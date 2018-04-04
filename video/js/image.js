// 2 cropping sample
function croppingSample(context, canvas) {
    var imageObj = new Image();
    imageObj.onload = function(){
    // source rectangular area
        var sourceX = 550;
        var sourceY = 300;
        var sourceWidth = 300;
        var sourceHeight = 214;
        
    // destination image size and position
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = canvas.width / 2 - destWidth / 2;
        var destY = canvas.height / 2 - destHeight / 2;
        
        context.drawImage(this, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    };
    imageObj.src = "img/sanji.jpg";
}

// 3 copy paste sample
function drawSpade(context, x, y, width, height){
    context.save();
    var bottomWidth = width * 0.7;
    var topHeight = height * 0.7;
    var bottomHeight = height * 0.3;
    
    context.beginPath();
    context.moveTo(x, y);
    
    // top left of spade          
    context.bezierCurveTo(
        x, y + topHeight / 2, // control point 1
        x - width / 2, y + topHeight / 2, // control point 2
        x - width / 2, y + topHeight // end point
    );
    
    // bottom left of spade
    context.bezierCurveTo(
        x - width / 2, y + topHeight * 1.3, // control point 1
        x, y + topHeight * 1.3, // control point 2
        x, y + topHeight // end point
    );
    
    // bottom right of spade
    context.bezierCurveTo(
        x, y + topHeight * 1.3, // control point 1
        x + width / 2, y + topHeight * 1.3, // control point 2
        x + width / 2, y + topHeight // end point
    );
    
    // top right of spade
    context.bezierCurveTo(
        x + width / 2, y + topHeight / 2, // control point 1
        x, y + topHeight / 2, // control point 2
        x, y // end point
    );
    
    context.closePath();
    context.fill();
    
    // bottom of spade
    context.beginPath();
    context.moveTo(x, y + topHeight);
    context.quadraticCurveTo(
        x, y + topHeight + bottomHeight, // control point
        x - bottomWidth / 2, y + topHeight + bottomHeight // end point
    );
    context.lineTo(x + bottomWidth / 2, y + topHeight + bottomHeight);
    context.quadraticCurveTo(
        x, y + topHeight + bottomHeight, // control point
        x, y + topHeight // end point
    );
    context.closePath();
    context.fillStyle = "black";
    context.fill();
    context.restore();
}

function duplicateSample(context, canvas) {
    // draw spade
    var spadeX = canvas.width / 2;
    var spadeY = 20;
    var spadeWidth = 140;
    var spadeHeight = 200;
    
    // draw spade in center of canvas
    drawSpade(context, spadeX, spadeY, spadeWidth, spadeHeight);

    context.drawImage(
        canvas,         
        spadeX,         // source x
        spadeY,         // source y
        spadeWidth / 2,     // source width
        spadeHeight,       // source height
        spadeX - spadeWidth,  // dest x
        spadeY,         // dest y
        spadeWidth / 2,     // dest width
        spadeHeight        // dest height
      );
    context.drawImage(
        canvas, 
        spadeX - spadeWidth / 2,  // source x   
        spadeY,           // source y
        spadeWidth / 2,       // source width
        spadeHeight,         // source height
        spadeX + spadeWidth / 2,   // dest x
        spadeY,           // dest y
        spadeWidth / 2,       // dest width
        spadeHeight          // dest height
      );
}

// 4 image data
function imageDataSample(context, canvas) {
    var imageObj = new Image();
    imageObj.onload = function(){
        var sourceWidth = this.width;
        var sourceHeight = this.height;
        var destX = canvas.width / 2 - sourceWidth / 2;
        var destY = canvas.height / 2 - sourceHeight / 2;
        var sourceX = destX;
        var sourceY = destY;
        
        // draw image on canvas
        context.drawImage(this, destX, destY);
        // get image data from the rectangular area 
        // of the canvas containing the image
        var imageData = context.getImageData(sourceX, sourceY, sourceWidth, sourceHeight);
        var data = imageData.data;
    
        // write out the image data properties
        var str = "width=" + imageData.width + ", height=" + imageData.height + ", data length=" + data.length;
        context.font = "12pt Calibri";
        context.fillText(str, 4, 14);
    };
    imageObj.src = "img/sanji.jpg";
}

// 5 Manipulation
function manipulationSample(context, canvas){
    var imageObj = new Image();
    imageObj.onload = function(){
        var sourceWidth = this.width;
        var sourceHeight = this.height;
        var sourceX = canvas.width / 2 - sourceWidth / 2;
        var sourceY = canvas.height / 2 - sourceHeight / 2;
        var destX = sourceX;
        var destY = sourceY;
        context.drawImage(this, destX, destY);
        
        var imageData = context.getImageData(sourceX, sourceY, sourceWidth, sourceHeight);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            data[i] = 255 - data[i]; // red
            data[i + 1] = 255 - data[i + 1]; // green
            data[i + 2] = 255 - data[i + 2]; // blue
            // i+3 is alpha (the fourth element)
        }

        // overwrite original image with
        // new image data
        context.putImageData(imageData, destX, destY);
    };
    imageObj.src = "img/sanji.jpg";
}


window.onload = function(){

    // Basic
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var imageObj = new Image();
    imageObj.onload = function(){
        var destX = canvas.width / 2 - this.width / 2;
        var destY = canvas.height / 2 - this.height / 2;
        
        // context.drawImage(imageObj,destX,destY,destWidth,destHeight);
        context.drawImage(this, destX, destY);
    };
    imageObj.src = "img/sanji.jpg";


    // Cropping
    var canvas2 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
    croppingSample(context2, canvas2);


    // Duplicating Example
    var canvas3 = document.getElementById("myCanvas3");
    var context3 = canvas3.getContext("2d");
    duplicateSample(context3, canvas3);


    // Image Data
    var canvas4 = document.getElementById("myCanvas4");
    var context4 = canvas4.getContext("2d");
    imageDataSample(context4, canvas4);


    // Manipulation
    var canvas5 = document.getElementById("myCanvas5");
    var context5 = canvas5.getContext("2d");
    manipulationSample(context5, canvas5);
};

