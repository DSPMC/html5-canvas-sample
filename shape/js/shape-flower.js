// define Flower constructor
function Flower(context, centerX, centerY, radius, numPetals, color){
    this.context = context;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.numPetals = numPetals;
    this.color = color;
}

// Define Flower draw method
Flower.prototype.draw = function(){
    var context = this.context;
    context.beginPath();
    
    // draw petals
    for (var n = 0; n < this.numPetals; n++) {
        var theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
        var theta2 = ((Math.PI * 2) / this.numPetals) * (n);
        
        var x1 = (this.radius * Math.sin(theta1)) + this.centerX;
        var y1 = (this.radius * Math.cos(theta1)) + this.centerY;
        var x2 = (this.radius * Math.sin(theta2)) + this.centerX;
        var y2 = (this.radius * Math.cos(theta2)) + this.centerY;
        
        context.moveTo(this.centerX, this.centerY);
        context.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
    }
    
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
    
    // draw yellow center
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
    context.fillStyle = "yellow";
    context.fill(); 
};

window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // create a green gradation for background
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0, "#1EDE70"); // light green
    grd.addColorStop(1, "#00A747"); // dark green
    context.fillStyle = grd;
    context.fill();

    // define an array of colors
    var colorArray = [];
    colorArray.push("red"); // 0
    colorArray.push("orange"); // 1
    colorArray.push("blue"); // 2
    colorArray.push("purple"); // 3

        // define number of flowers
    var numFlowers = 50;
    
    // draw randomly placed flowers
    for (var n = 0; n < numFlowers; n++) {
        var centerX = Math.random() * canvas.width;
        var centerY = Math.random() * canvas.height;
        var radius = (Math.random() * 25) + 25;
        var colorIndex = Math.round(Math.random() * (colorArray.length - 1));
        
        var thisFlower = new Flower(context, centerX, centerY, radius, 5, colorArray[colorIndex]);
        thisFlower.draw();
    }
};

