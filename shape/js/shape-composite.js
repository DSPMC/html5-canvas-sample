window.onload = function(){
    var squareWidth = 55;
    var circleRadius = 35;
    var rectCircleDistX = 50;
    var rectCircleDistY = 50;

    // define an array of composite operations
    var operationArray = [];
    operationArray.push("source-atop"); // 0
    operationArray.push("source-in"); // 1
    operationArray.push("source-out"); // 2
    operationArray.push("source-over"); // 3
    operationArray.push("destination-atop"); // 4
    operationArray.push("destination-in"); // 5
    operationArray.push("destination-out"); // 6
    operationArray.push("destination-over"); // 7
    operationArray.push("lighter"); // 8
    operationArray.push("xor"); // 9
    operationArray.push("copy"); // 10

    // draw each of the eleven operations
    for (var n = 0; n < operationArray.length; n++) {
        var thisOperation = operationArray[n];
        var canvas = document.getElementById(thisOperation);
        var context = canvas.getContext("2d");
        
        // draw rectangle
        context.beginPath();
        context.rect(40, 0, squareWidth, squareWidth);
        context.fillStyle = "blue";
        context.fill();
        
        // set the global composite operation
        context.globalCompositeOperation = thisOperation;
        
        // draw circle
        context.beginPath();
        context.arc(40 + rectCircleDistX, rectCircleDistY, circleRadius, 0, 2 * Math.PI, false);
        context.fillStyle = "red";
        context.fill();
    }
};