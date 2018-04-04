window.onload = function(){

    // Zigzag
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
  
    var startX = 85;
    var startY = 70;
    var zigzagSpacing = 60;

    context.lineWidth = 10;
    context.strokeStyle = "#0096FF"; // blue-ish color
    context.beginPath();
    context.moveTo(startX, startY);

    // lineJoin: round | bavel
    context.lineJoin = "round";

    // draw seven lines
    for (var n = 0; n < 7; n++) {
        var x = startX + ((n + 1) * zigzagSpacing);
        var y;
        
        if (n % 2 == 0) { // if n is even...
            y = startY + 100;
        }
        else { // if n is odd...
            y = startY;
        }
        context.lineTo(x, y);
    }

    context.stroke();


    // Spiral
    var canvas2 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
    
    var radius = 0;
    var angle = 0;

    context2.strokeStyle = "#0096FF"; // blue-ish color
    context2.lineWidth = 10;
    context2.beginPath();
    context2.moveTo(canvas2.width / 2, canvas2.height / 2);

    for (var n = 0; n < 150; n++) {
        radius += 0.75;
        // make a complete circle every 50 iterations
        angle += (Math.PI * 2) / 50;
        var x = canvas2.width / 2 + radius * Math.cos(angle);
        var y = canvas2.height / 2 + radius * Math.sin(angle);
        context2.lineTo(x, y);
    }
    
    context2.stroke();
};