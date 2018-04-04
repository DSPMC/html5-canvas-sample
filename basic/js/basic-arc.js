window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.lineWidth = 15;
    context.strokeStyle = "black"; // line color

    // context.arc(centerX,centerY, radius, startingAngle, endingAngle,counterclockwise);
    context.arc(canvas.width / 2, canvas.height / 2 + 40, 80, 1.1 * Math.PI, 1.9 * Math.PI, false);
    context.stroke();

    // another method (like lineTo())
    // context.arcTo(controlPointX1, controlPointY1, endingPointX,   endingPointY, radius);
    //context.moveTo(50, canvas.height - 50);
    //context.arcTo(50, 0, 100, 50, 80);
    //context.stroke();
};