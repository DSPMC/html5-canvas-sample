function drawTriangle(context, x, y, triangleWidth, triangleHeight, fillStyle){
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + triangleWidth / 2, y + triangleHeight);
    context.lineTo(x - triangleWidth / 2, y + triangleHeight);
    context.closePath();
    context.fillStyle = fillStyle;
    context.fill();
}

// 1
function rectangleSample(canvas, context) {
    // context.rect(x,y,width,height);
    context.rect(canvas.width / 2 - 100, canvas.height / 2 - 50, 200, 100);
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();

    // context.fillRect(x,y,width,height);
    // context.strokeRect(x,y,width,height);
}

// 2
function circleSample(canvas, context) {
    context.arc(canvas.width / 2, canvas.height / 2, 70, 0, 2 * Math.PI, false);
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
}

// 3
function triangleSample(canvas, context) {
    var grd;
    var triangleWidth = 150;
    var triangleHeight = 150;
    var triangleY = canvas.height / 2 - triangleWidth / 2;

     // color fill (left)
    drawTriangle(context, canvas.width * 1 / 5, triangleY, triangleWidth, triangleHeight, "blue");

    // linear gradient fill (second from left)
    grd = context.createLinearGradient(canvas.width * 2 / 5, triangleY, canvas.width * 2 / 5, triangleY + triangleHeight);
    grd.addColorStop(0, "#8ED6FF"); // light blue
    grd.addColorStop(1, "#004CB3"); // dark blue
    drawTriangle(context, canvas.width * 2 / 5, triangleY, triangleWidth, triangleHeight, grd);

    // radial gradient fill (second from right)
    var centerX = (canvas.width * 3 / 5 +
    (canvas.width * 3 / 5 - triangleWidth / 2) +
    (canvas.width * 3 / 5 + triangleWidth / 2)) / 3;
    
    var centerY = (triangleY +
    (triangleY + triangleHeight) +
    (triangleY + triangleHeight)) / 3;
    
    grd = context.createRadialGradient(centerX, centerY, 10, centerX, centerY, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(0.17, "orange");
    grd.addColorStop(0.33, "yellow");
    grd.addColorStop(0.5, "green");
    grd.addColorStop(0.666, "blue");
    grd.addColorStop(1, "violet");
    drawTriangle(context, canvas.width * 3 / 5, triangleY, triangleWidth, triangleHeight, grd);

    // pattern fill (right)
    var imageObj = new Image();
    imageObj.onload = function(){
        var pattern = context.createPattern(imageObj, "repeat");
        drawTriangle(context, canvas.width * 4 / 5, triangleY, triangleWidth, triangleHeight, pattern);
    };
    imageObj.src = "img/eye.png";
}

// 4
function cloudSample(canvas, context) {
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

    //add a radial gradient
    var grdCenterX = 260;
    var grdCenterY = 80;
    var grd = context.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 200);
    grd.addColorStop(0, "#8ED6FF"); // light blue
    grd.addColorStop(1, "#004CB3"); // dark blue
    context.fillStyle = grd;
    context.fill();

    // set the line width and stroke color
    context.lineWidth = 5;
    context.strokeStyle = "#0000ff";
    context.stroke();
}

// 5
function transparencySample(canvas, context) {
    // draw rectangle
    context.beginPath();
    context.rect(240, 30, 130, 130);
    context.fillStyle = "blue";
    context.fill();

    // draw circle
    context.globalAlpha = 0.5; // set global alpha
    context.beginPath();
    context.arc(359, 150, 70, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
}

// 6
function contextStateSample(canvas, context) {
    // draw rectangle
    context.beginPath();
    context.rect(150, 30, 130, 130);
    context.fillStyle = "blue";
    context.fill();

    // wrap circle drawing code with save-restore combination
    context.save();
    context.globalAlpha = 0.5; // set global alpha
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 70, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
    context.restore();

    // draw another rectangle
    context.beginPath();
    context.rect(canvas.width - (150 + 130), canvas.height - (30 + 130), 130, 130);
    context.fillStyle = "green";
    context.fill();
}

window.onload = function(){

    // Rectangle
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    rectangleSample(canvas, context);


    // Circle
    var canvas2 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
    circleSample(canvas2, context2);


    // Triangle
    var canvas3 = document.getElementById("myCanvas3");
    var context3 = canvas3.getContext("2d");
    triangleSample(canvas3, context3);


    // Cloud
    var canvas4 = document.getElementById("myCanvas4");
    var context4 = canvas4.getContext("2d");
    cloudSample(canvas4, context4);


    // Transparent Shape
    var canvas5 = document.getElementById("myCanvas5");
    var context5 = canvas5.getContext("2d");
    transparencySample(canvas5, context5);


    // Context State
    var canvas6 = document.getElementById("myCanvas6");
    var context6 = canvas6.getContext("2d");
    contextStateSample(canvas6, context6);


};