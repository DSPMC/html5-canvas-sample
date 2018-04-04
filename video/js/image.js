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

// 6 Grayscale
function grayscaleSample(context, canvas){
    var imageObj = new Image();
    imageObj.onload = function(){
        var sourceWidth = this.width;
        var sourceHeight = this.height;
        var destX = canvas.width / 2 - sourceWidth / 2;
        var destY = canvas.height / 2 - sourceHeight / 2;
        var sourceX = destX;
        var sourceY = destY;
        
        context.drawImage(this, destX, destY);
        
        var imageData = context.getImageData(sourceX, sourceY, sourceWidth, sourceHeight);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            
            data[i] = brightness; // red
            data[i + 1] = brightness; // green
            data[i + 2] = brightness; // blue
            // i+3 is alpha (the fourth element)
        }

        // overwrite original image
        context.putImageData(imageData, destX, destY);
    };
    imageObj.src = "img/sanji.jpg";
}

// 7 DataURL
function dataurlSample(context, canvas) {
    var startX = 200;
    var startY = 100;
    
    // draw cloud shape
    context.beginPath();
    context.moveTo(startX, startY);
    context.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
    context.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
    context.bezierCurveTo(startX + 250, startY + 70, startX + 250, startY + 40, startX + 220, startY + 20);
    context.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
    context.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
    context.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
    context.closePath();
  
    context.lineWidth = 5;
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.strokeStyle = "#0000ff";
    context.stroke();

    // save canvas image as data url (png format by default)
    var dataURL = canvas.toDataURL();

    // insert url into the HTML document so we can see it
    document.getElementById("dataURL").innerHTML = "<b>dataURL:</b> " + dataURL;
}

// 8 Get image from base64 encoded data
function loadCanvas(dataURL){
    var canvas = document.getElementById("myCanvas8");
    var context = canvas.getContext("2d");
    
    // load image from data url
    var imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(this, 0, 0);
    };
    
    imageObj.src = dataURL;
}

function loadImageSample() {
    // make ajax call to get image data url
    var request = new XMLHttpRequest();
    request.open("GET", "img/sample.txt", true);
    request.onreadystatechange = function(){
        if (request.readyState == 4) { 
            if (request.status == 200) { // successful response
                loadCanvas(request.responseText);
            }
        }
    };
    request.send(null);
}


// 9 Pixelated
function focusImage(canvas, context, imageObj, pixelation){
    var sourceWidth = imageObj.width;
    var sourceHeight = imageObj.height;
    var sourceX = canvas.width / 2 - sourceWidth / 2;
    var sourceY = canvas.height / 2 - sourceHeight / 2;
    var destX = sourceX;
    var destY = sourceY;
    
    var imageData = context.getImageData(sourceX, sourceY, sourceWidth, sourceHeight);
    var data = imageData.data;
    
    for (var y = 0; y < sourceHeight; y += pixelation) {
        for (var x = 0; x < sourceWidth; x += pixelation) {
            // get the color components of the sample pixel
            var red = data[((sourceWidth * y) + x) * 4];
            var green = data[((sourceWidth * y) + x) * 4 + 1];
            var blue = data[((sourceWidth * y) + x) * 4 + 2];
            
            // overwrite pixels in a square below and to
            // the right of the sample pixel, whos width and
            // height are equal to the pixelation amount
            for (var n = 0; n < pixelation; n++) {
                for (var m = 0; m < pixelation; m++) {
                    if (x + m < sourceWidth) {
                        data[((sourceWidth * (y + n)) + (x + m)) * 4] = red;
                        data[((sourceWidth * (y + n)) + (x + m)) * 4 + 1] = green;
                        data[((sourceWidth * (y + n)) + (x + m)) * 4 + 2] = blue;
                    }
                }
            }
        }
    }
    
    // overwrite original image
    context.putImageData(imageData, destX, destY);
}

function pixelatedSample(context, canvas){
    var fps = 10; // frames / second
    var timeInterval = 1000 / fps; // milliseconds
                    
    // define initial pixelation.  The higher the value,
    // the more pixelated the image is.  The image is
    // perfectly focused when pixelation = 1;
    var pixelation = 50;

    var imageObj = new Image();
    imageObj.onload = function(){
        var sourceWidth = imageObj.width;
        var sourceHeight = imageObj.height;
        var destX = canvas.width / 2 - sourceWidth / 2;
        var destY = canvas.height / 2 - sourceHeight / 2;
        
        var intervalId = setInterval(function(){
            context.drawImage(imageObj, destX, destY);
            
            if (pixelation < 1) {
                clearInterval(intervalId);
            }
            else {
                focusImage(canvas, context, imageObj, pixelation--);
            }
        }, timeInterval);
        // test
        //context.drawImage(imageObj, destX, destY);
        //focusImage(canvas, context, imageObj, pixelation--);
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


    // Grayscale
    var canvas6 = document.getElementById("myCanvas6");
    var context6 = canvas6.getContext("2d");
    grayscaleSample(context6, canvas6);


    // dataURL
    var canvas7 = document.getElementById("myCanvas7");
    var context7 = canvas7.getContext("2d");
    dataurlSample(context7, canvas7);


    // load dataURL
    loadImageSample();


    // Pixelated
    var canvas9 = document.getElementById("myCanvas9");
    var context9 = canvas9.getContext("2d");
    pixelatedSample(context9, canvas9);
};

