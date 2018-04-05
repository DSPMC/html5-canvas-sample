// 1 basic
function basicSample(context, canvas) {
    var rectWidth = 150;
    var rectHeight = 75;

    // translate context to center of canvas
    context.translate(canvas.width / 2, canvas.height / 2);

    context.fillStyle = "blue";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
}

// 2 rotate
function rotateSample(context, canvas) {
    var rectWidth = 150;
    var rectHeight = 75;

    // translate context to center of canvas
    context.translate(canvas.width / 2, canvas.height / 2);
  
    // rotate context 45 degrees clockwise
    context.rotate(Math.PI / 4);

    context.fillStyle = "blue";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
}

// 3 scale
function scaleSample(context, canvas) {
    var rectWidth = 150;
    var rectHeight = 75;

    // translate context to center of canvas
    context.translate(canvas.width / 2, canvas.height / 2);
    
    // scale down canvas height by half
    context.scale(1, 0.5);

    context.fillStyle = "blue";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
}

// 4 mirror
function mirrorSample(context, canvas) {
    // translate context to center of canvas
    context.translate(canvas.width / 2, canvas.height / 2);
    
    // flip context horizontally
    context.scale(-1, 1);

    context.font = "30pt Calibri";
    context.textAlign = "center";
    context.fillStyle = "blue";
    context.fillText("Hello World!", 0, 0);
}

// 5 custom
function customSample(context, canvas){
    var rectWidth = 150;
    var rectHeight = 75;

    // translation matrix:
    //  1  0  tx              
    //  0  1  ty
    //  0  0  1  
    var tx = canvas.width / 2;
    var ty = canvas.height / 2;
    
    // apply custom transform
    context.transform(1, 0, 0, 1, tx, ty);

    context.fillStyle = "blue";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
}

// 6 shearing
function shearingSample(context, canvas){
    var rectWidth = 150;
    var rectHeight = 75;

    // shear matrix:
    //  1  sx  0              
    //  sy  1  0
    //  0  0  1  
    
    var sx = 0.75; // 0.75 horizontal shear
    var sy = 0; // no vertical shear
    // translate context to center of canvas
    context.translate(canvas.width / 2, canvas.height / 2);
    
    // apply custom transform
    context.transform(1, sy, sx, 1, 0, 0); 

    context.fillStyle = "blue";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
}

// 7 multiple
function multipleSample(context, canvas){
    var rectWidth = 150;
    var rectHeight = 75;

    context.save(); // save state 1
    context.translate(canvas.width / 2, canvas.height / 2);

    context.save(); // save state 2
    context.rotate(Math.PI / 4);

    context.save(); // save state 3
    context.scale(2, 2);

    // draw the rectangle
    context.fillStyle = "blue";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

    context.restore(); // restore state 3
    context.fillStyle = "red";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

    context.restore(); // restore state 2
    context.fillStyle = "yellow";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

    context.restore(); // restore state 1
    context.fillStyle = "green";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
}

// 8 oval
function ovalSample(context, canvas){
    context.save(); // save state
    var centerX = 0;
    var centerY = 0;
    var radius = 50;

    context.translate(canvas.width / 2, canvas.height / 2);
    context.scale(2, 1);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

    context.restore(); // restore original state

    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
}

// 9 image rotate
function imageRotateSample(context, canvas){
    var imageObj = new Image();
    imageObj.onload = function(){
        // translate context to center of canvas
        context.translate(canvas.width / 2, canvas.height / 2);
        
        // rotate context by 45 degrees counter clockwise
        context.rotate(-1 * Math.PI / 4);
        context.drawImage(this, -1 * imageObj.width / 2, -1 * imageObj.height / 2);
    };
    imageObj.src = "img/sanji.jpg";
}

// 10 random
function drawLogo(context){
    // draw Hello Logo! text
    context.beginPath();
    context.font = "10pt Calibri";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "blue";
    context.fillText("Hello Logo!", 0, 0);
    context.closePath();
    
  // define style for both waves
    context.lineWidth = 2;
    context.strokeStyle = "blue";
    
    // draw top wave
    context.beginPath();
    context.moveTo(-30, 10);
    context.bezierCurveTo(-5, 5, 5, 15, 30, 10);
    context.stroke();
    
    // draw bottom wave
    context.beginPath();
    context.moveTo(-30, 15);
    context.bezierCurveTo(-5, 10, 5, 20, 30, 15);
    context.stroke();
}

function getRandomX(canvas){
    return Math.round(Math.random() * canvas.width);
}

function getRandomY(canvas){
    return Math.round(Math.random() * canvas.height);
}

function getRandomSize(){
    return Math.round(Math.random() * 5);
}

function getRandomAngle(){
    return Math.random() * Math.PI * 2;
}

function randomSample(context, canvas){
    // draw 5 randomly transformed logos
    for (var n = 0; n < 5; n++) {
        context.save();
        // translate to random position
        context.translate(getRandomX(canvas), getRandomY(canvas));
        
        // rotate by random angle
        context.rotate(getRandomAngle());
        
        // scale by random size
        var randSize = getRandomSize();
        context.scale(randSize, randSize);
        
        // draw logo
        drawLogo(context);
        context.restore();
    }
}


window.onload = function(){
    // basic
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    basicSample(context, canvas);

    // rotate
    var canvas2 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
    rotateSample(context2, canvas2);

    // scale
    var canvas3 = document.getElementById("myCanvas3");
    var context3 = canvas3.getContext("2d");
    scaleSample(context3, canvas3);

    // mirror
    var canvas4 = document.getElementById("myCanvas4");
    var context4 = canvas4.getContext("2d");
    mirrorSample(context4, canvas4);

    // custom
    var canvas5 = document.getElementById("myCanvas5");
    var context5 = canvas5.getContext("2d");
    customSample(context5, canvas5);

    // shearing
    var canvas6 = document.getElementById("myCanvas6");
    var context6 = canvas6.getContext("2d");
    shearingSample(context6, canvas6);

    // multiple
    var canvas7 = document.getElementById("myCanvas7");
    var context7 = canvas7.getContext("2d");
    multipleSample(context7, canvas7);

    // oval
    var canvas8 = document.getElementById("myCanvas8");
    var context8 = canvas8.getContext("2d");
    ovalSample(context8, canvas8);

    // image rotate
    var canvas9 = document.getElementById("myCanvas9");
    var context9 = canvas9.getContext("2d");
    imageRotateSample(context9, canvas9);

    // random
    var canvas10 = document.getElementById("myCanvas9");
    var context10 = canvas10.getContext("2d");
    randomSample(context10, canvas10);
}
