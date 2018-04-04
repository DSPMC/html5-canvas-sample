window.onload = function(){

    // Quadratic
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    
    context.lineWidth = 10;
    context.strokeStyle = "black"; // line color
    context.moveTo(100, canvas.height - 50);

    // context.quadraticCurveTo(controlX, controlY, endingPointX,       endingPointY);
    context.quadraticCurveTo(canvas.width / 2, -50, canvas.width - 100, canvas.height - 50);
    context.stroke();


    // Bazier
    var canvas2 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
  
    context2.lineWidth = 10;
    context2.strokeStyle = "black"; // line color
    context2.moveTo(180, 130);

    // context.bezierCurveTo(controlPointX1, controlPointY1, controlPointX2, controlPointY2, endingPointX, endingPointY);
    context2.bezierCurveTo(150, 10, 420, 10, 420, 180);
    context2.stroke();
};
