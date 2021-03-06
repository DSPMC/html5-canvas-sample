window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    
    // gear position
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
  
    // radius of the teeth tips
    var outerRadius = 95;
  
    // radius of the teeth intersections
    var innerRadius = 50;
  
    // radius of the gear without the teeth
    var midRadius = innerRadius * 1.6;
  
    // radius of the hole
    var holeRadius = 10;
  
    // num points is the number of points that are required
    // to make the gear teeth.  The number of teeth on the gear
    // are equal to half of the number of points.  In this recipe,
    // we will use 50 points which corresponds to 25 gear teeth.
    var numPoints = 50;


    // draw gear teeth
    context.beginPath();
    // we can set the lineJoinproperty to bevel so that the tips
    // of the gear teeth are flat and don't come to a sharp point
    context.lineJoin = "bevel";
  
    // loop through the number of points to create the gear shape
    for (var n = 0; n < numPoints; n++) {
        var radius = null;
        
    // draw tip of teeth on even iterations
        if (n % 2 == 0) {
            radius = outerRadius;
        }
    // draw teeth connection which lies somewhere between
    // the gear center and gear radius
        else {
            radius = innerRadius;
        }
        
        var theta = ((Math.PI * 2) / numPoints) * (n + 1);
        var x = (radius * Math.sin(theta)) + centerX;
        var y = (radius * Math.cos(theta)) + centerY;
        
    // if first iteration, use moveTo() to position
    // the drawing cursor
        if (n == 0) {
            context.moveTo(x, y);
        }
    // if any other iteration, use lineTo() to connect sub paths
        else {
            context.lineTo(x, y);
        }
    }
    
    context.closePath();
  
  // define the line width and stroke color
    context.lineWidth = 5;
    context.strokeStyle = "#004CB3";
    context.stroke();

        // draw gear body
    context.beginPath();
    context.arc(centerX, centerY, midRadius, 0, 2 * Math.PI, false);
    
    // create a linear gradient
    var grd = context.createLinearGradient(230, 0, 370, 200);
    grd.addColorStop(0, "#8ED6FF"); // light blue
    grd.addColorStop(1, "#004CB3"); // dark blue
    context.fillStyle = grd;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#004CB3";
    context.stroke();

        // draw gear hole
    context.beginPath();
    context.arc(centerX, centerY, holeRadius, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = "#004CB3";
    context.stroke();
    
};
