// 1 move
function moveSample(){
    var anim = new Animation("myCanvas");
    var canvas = anim.getCanvas();
    var context = anim.getContext();

    var linearSpeed = 100; // pixels / second
    var box = {
        x: 0,
        y: canvas.height / 2 - 25,
        width: 100,
        height: 50
    };

    anim.setStage(function(){
        // update
        var linearDistEachFrame = linearSpeed * this.getTimeInterval() / 1000;
        
        if (box.x < canvas.width - box.width) {
            box.x += linearDistEachFrame;
        }
        else {
            anim.stop();
        }
        
        // clear
        this.clear();
        
        // draw
        context.beginPath();
        context.fillStyle = "blue";
        context.fillRect(box.x, box.y, box.width, box.height);
    });

    anim.start();
}

// 2 accelleration
function accSample(){
    var anim = new Animation("myCanvas2");
    var canvas = anim.getCanvas();
    var context = anim.getContext();

    var gravity = 2; // pixels / second^2
    var box = {
        x: canvas.width / 2 - 50,
        y: 0,
        vx: 0,
        vy: 0,
        width: 100,
        height: 50
    };

    anim.setStage(function(){
        // update
        if (this.getTime() > 1000) {
            var speedIncrementEachFrame = gravity * anim.getTimeInterval() / 1000; // pixels / second
            box.vy += speedIncrementEachFrame;
            box.y += box.vy * this.getTimeInterval();
            
            if (box.y > canvas.height - box.height) {
                box.y = canvas.height - box.height;
                this.stop();
            }
        }
                
        // clear
        this.clear();
        
        // draw
        context.beginPath();
        context.fillStyle = "blue";
        context.fillRect(box.x, box.y, box.width, box.height);
    });

    anim.start(); 
}

// 3 oscillation
function osciSample(){
    var anim = new Animation("myCanvas3");
    var canvas = anim.getCanvas();
    var context = anim.getContext();

    var box = {
        x: 250,
        y: canvas.height / 2 - 25,
        width: 100,
        height: 50
    };

    var centerX = canvas.width / 2 - box.width / 2;
    var amplitude = 150; // pixels
    var period = 2000; // ms

    anim.setStage(function(){
        // update
        // x(t) = A * sin (t * 2π / T + Φ) + x0
        box.x = amplitude * Math.sin(anim.getTime() * 2 * Math.PI / period) + centerX;
        
        // clear
        this.clear();
        
        // draw
        context.beginPath();
        context.rect(box.x, box.y, box.width, box.height);
        context.fillStyle = "blue";
        context.fill();
    });

    anim.start();
}

// 4 bubble
function bubbleSample(){
    // instantiate new animation object
    var anim = new Animation("myCanvas4");
    var context = anim.getContext();
    var canvas = anim.getCanvas();

    anim.setStage(function(){
        // update
        var widthScale = Math.sin(this.getTime() / 200) * 0.1 + 0.9;
        var heightScale = -1 * Math.sin(this.getTime() / 200) * 0.1 + 0.9;
        
        // clear
        this.clear();
        
        //draw
        context.beginPath();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(widthScale, heightScale);
        context.arc(0, 0, 65, 0, 2 * Math.PI, false);
        context.restore();
        context.fillStyle = "#8ED6FF";
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = "#555";
        context.stroke();
        
        context.beginPath();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(widthScale, heightScale);
        context.arc(-30, -30, 15, 0, 2 * Math.PI, false);
        context.restore();
        context.fillStyle = "white";
        context.fill();
    });

    anim.start();
}

// 5 swing
function swingSample(){
    var anim = new Animation("myCanvas5");
    var canvas = anim.getCanvas();
    var context = anim.getContext();

    var amplitude = Math.PI / 4; // 45 degrees
    var period = 4000; // ms
    var theta = 0;
    var pendulumLength = 250;
    var pendulumWidth = 10;
    var rotationPointX = canvas.width / 2;
    var rotationPointY = 20;

    anim.setStage(function(){
        // update
        theta = (amplitude * Math.sin((2 * Math.PI * this.getTime()) / period)) + Math.PI / 2;
        
        // clear
        this.clear();
        
        // draw top circle
        context.beginPath();
        context.arc(rotationPointX, rotationPointY, 15, 0, 2 * Math.PI, false);
        context.fillStyle = "#888";
        context.fill();
        
        // draw top inner circle
        context.beginPath();
        context.arc(rotationPointX, rotationPointY, 10, 0, 2 * Math.PI, false);
        context.fillStyle = "black";
        context.fill();
        
        // draw shaft
        context.beginPath();
        var endPointX = rotationPointX + (pendulumLength * Math.cos(theta));
        var endPointY = rotationPointY + (pendulumLength * Math.sin(theta));
        context.beginPath();
        context.moveTo(rotationPointX, rotationPointY);
        context.lineTo(endPointX, endPointY);
        context.lineWidth = pendulumWidth;
        context.lineCap = "round";
        context.strokeStyle = "#555";
        context.stroke();
        
        // draw bottom circle
        context.beginPath();
        context.arc(endPointX, endPointY, 40, 0, 2 * Math.PI, false);
        var grd = context.createLinearGradient(endPointX - 50, endPointY - 50, endPointX + 50, endPointY + 50);
        grd.addColorStop(0, "#444");
        grd.addColorStop(0.5, "white");
        grd.addColorStop(1, "#444");
        context.fillStyle = grd;
        context.fill();
    });

    anim.start();
}

// 6 gear
function Gear(config){
    this.x = config.x;
    this.y = config.y;
    this.outerRadius = config.outerRadius;
    this.innerRadius = config.innerRadius;
    this.holeRadius = config.holeRadius;
    this.numTeeth = config.numTeeth;
    this.theta = config.theta;
    this.thetaSpeed = config.thetaSpeed;
    this.lightColor = config.lightColor;
    this.darkColor = config.darkColor;
    this.clockwise = config.clockwise;
    this.midRadius = config.outerRadius - 10;
}

Gear.prototype.draw = function(context){
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.theta);
    
    // draw gear teeth
    context.beginPath();
    // we can set the lineJoin property to bevel so that the tips
    // of the gear teeth are flat and don't come to a sharp point
    context.lineJoin = "bevel";
    
    // loop through the number of points to create the gear shape
    var numPoints = this.numTeeth * 2;
    for (var n = 0; n < numPoints; n++) {
        var radius = null;
        
        // draw tip of teeth on even iterations
        if (n % 2 == 0) {
            radius = this.outerRadius;
        }
        // draw teeth connection which lies somewhere between
        // the gear center and gear radius
        else {
            radius = this.innerRadius;
        }
        
        var theta = ((Math.PI * 2) / numPoints) * (n + 1);
        var x = (radius * Math.sin(theta));
        var y = (radius * Math.cos(theta));
        
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
    context.strokeStyle = this.darkColor;
    context.stroke();
    
    // draw gear body
    context.beginPath();
    context.arc(0, 0, this.midRadius, 0, 2 * Math.PI, false);
    
    // create a linear gradient
    var grd = context.createLinearGradient(-1 * this.outerRadius / 2, -1 * this.outerRadius / 2, this.outerRadius / 2, this.outerRadius / 2);
    grd.addColorStop(0, this.lightColor); 
    grd.addColorStop(1, this.darkColor); 
    context.fillStyle = grd;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = this.darkColor;
    context.stroke();
    
    // draw gear hole
    context.beginPath();
    context.arc(0, 0, this.holeRadius, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = this.darkColor;
    context.stroke();
    context.restore();
};

function gearSample() {
    var anim = new Animation("myCanvas6");
    var canvas = anim.getCanvas();
    var context = anim.getContext();

    var gears = [];
    
    // add blue gear
    gears.push(new Gear({
        x: 270,
        y: 105,
        outerRadius: 90,
        innerRadius: 50,
        holeRadius: 10,
        numTeeth: 24,
        theta: 0,
        thetaSpeed: 1 / 1000,
        lightColor: "#B1CCFF",
        darkColor: "#3959CC",
        clockwise: false
    }));
    
    // add red gear
    gears.push(new Gear({
        x: 372,
        y: 190,
        outerRadius: 50,
        innerRadius: 15,
        holeRadius: 10,
        numTeeth: 12,
        theta: 0.14,
        thetaSpeed: 2 / 1000,
        lightColor: "#FF9E9D",
        darkColor: "#AD0825",
        clockwise: true
    }));
    
    // add orange gear
    gears.push(new Gear({
        x: 422,
        y: 142,
        outerRadius: 28,
        innerRadius: 5,
        holeRadius: 7,
        numTeeth: 6,
        theta: 0.35,
        thetaSpeed: 4 / 1000,
        lightColor: "#FFDD87",
        darkColor: "#D25D00",
        clockwise: false
    }));

    anim.setStage(function(){
        // update
        for (var i = 0; i < gears.length; i++) {
            var gear = gears[i];
            var thetaIncrement = gear.thetaSpeed * this.getTimeInterval();
            gear.theta += gear.clockwise ? thetaIncrement : -1 * thetaIncrement;
        }
        
        // clear
        this.clear();
        
        // draw
        for (var i = 0; i < gears.length; i++) {
            gears[i].draw(context);
        }
    });

    anim.start();
}


// 7 clock
function clockSample(){
    var anim = new Animation("myCanvas7");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    var clockRadius = 75;

    anim.setStage(function(){

    // update
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    hours = hours > 12 ? hours - 12 : hours;
    
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;
        
    // clear
    this.clear();
            
    // draw
    var context = anim.getContext();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        
        // draw clock body
        context.beginPath();
        context.arc(0, 0, clockRadius, 0, Math.PI * 2, true);
        
        var grd = context.createLinearGradient(-clockRadius, -clockRadius, clockRadius, clockRadius);
        grd.addColorStop(0, "#F8FCFF"); // light blue
        grd.addColorStop(1, "#A1CCEE"); // dark blue
        context.fillStyle = grd;
        context.fill();
        
        // draw numbers  
        context.font = "16pt Calibri";
        context.fillStyle = "#024F8C";
        context.textAlign = "center";
        context.textBaseline = "middle";
        for (var n = 1; n <= 12; n++) {
            var theta = (n - 3) * (Math.PI * 2) / 12;
            var x = clockRadius * 0.8 * Math.cos(theta);
            var y = clockRadius * 0.8 * Math.sin(theta);
            context.fillText(n, x, y);
        }
        
        context.save();
        
        // apply drop shadow
        context.shadowColor = "#bbbbbb";
        context.shadowBlur = 5;
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
        
        // draw clock rim
        context.lineWidth = 3;
        context.strokeStyle = "#005EA8";
        context.stroke();
        
        context.restore();
        
        // draw hour hand
        context.save();
        var theta = (hour - 3) * 2 * Math.PI / 12;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -4);
        context.lineTo(-10, 4);
        context.lineTo(clockRadius * 0.6, 1);
        context.lineTo(clockRadius * 0.6, -1);
        context.fill();
        context.restore();
        
        // minute hand
        context.save();
        var theta = (minute - 15) * 2 * Math.PI / 60;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -3);
        context.lineTo(-10, 3);
        context.lineTo(clockRadius * 0.9, 1);
        context.lineTo(clockRadius * 0.9, -1);
        context.fill();
        context.restore();
        
        // second hand
        context.save();
        var theta = (seconds - 15) * 2 * Math.PI / 60;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -2);
        context.lineTo(-10, 2);
        context.lineTo(clockRadius * 0.8, 1);
        context.lineTo(clockRadius * 0.8, -1);
        context.fillStyle = "red";
        context.fill();
        context.restore();
        
        context.restore();
    });  

    anim.start();    
}

// 8 particle
function applyPhysics(anim, particle){
    // physics globals
    var gravity = 1500; // pixels / second^2
    var collisionDamper = 0.8; // 80% velocity lost when collision occurs
    var floorFriction = 100; // pixels / second^2
    var timeInterval = anim.getTimeInterval();
    var canvas = anim.getCanvas();
    
    // gravity
    particle.vy += gravity * timeInterval / 1000;
    
    // position
    particle.y += particle.vy * timeInterval / 1000;
    particle.x += particle.vx * timeInterval / 1000;
    
    // floor condition
    if (particle.y > (canvas.height - particle.radius)) {
        particle.y = canvas.height - particle.radius;
        particle.vy *= -1;
        particle.vy *= collisionDamper;
    }
    
    // floor friction
    if (particle.y == canvas.height - particle.radius) {
        if (particle.vx > 0.1) {
            particle.vx -= floorFriction * timeInterval / 1000;
        }
        else if (particle.vx < -0.1) {
            particle.vx += floorFriction * timeInterval / 1000;
        }
        else {
            particle.vx = 0;
        }
    }
    
    // ceiling  condition
    if (particle.y < (particle.radius)) {
        particle.y = particle.radius;
        particle.vy *= -1;
        particle.vy *= collisionDamper;
    }
    
    // right wall condition
    if (particle.x > (canvas.width - particle.radius)) {
        particle.x = canvas.width - particle.radius;
        particle.vx *= -1;
        particle.vx *= collisionDamper;
    }
    
    // left wall condition
    if (particle.x < (particle.radius)) {
        particle.x = particle.radius;
        particle.vx *= -1;
        particle.vx *= collisionDamper;
    }
}

function particleSample(){
    var anim = new Animation("myCanvas8");
    var canvas = anim.getCanvas();
    var context = anim.getContext();

    var particle = {
        x: 10,
        y: canvas.height - 10,
        vx: 600, // px / second
        vy: -900, // px / second
        radius: 10
    };

    anim.setStage(function(){
        // update
        applyPhysics(this, particle);
        
        // clear
        this.clear();
        
        // draw 
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, false);
        context.fillStyle = "blue";
        context.fill();
    });

    anim.start();
}

// 9 microscopic
function getRandColor(){
    var colors = ["red", "orange", "yellow", "green", "blue", "violet"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandTheta(){
    return Math.random() * 2 * Math.PI;
}

function updateMicrobes(anim, microbes){
    var canvas = anim.getCanvas();
    var angleVariance = 0.2;
    
    for (var i = 0; i < microbes.length; i++) {
        var microbe = microbes[i];
        var angles = microbe.angles;
        
/*
 * good numNewSegmentsPerFrame values:
 * 60fps -> 1
 * 10fps -> 10 
 * 
 * for a linear relationship, we can use the equation:
 * n = mf + b, where n = numNewSegmentsPerFrame and f = FPS
 * solving for m and b, we have:
 * n = (-0.18)f + 11.8
 */
        var numNewSegmentsPerFrame = Math.round(-0.18 * anim.getFps() + 11.8);
        
        for (var n = 0; n < numNewSegmentsPerFrame; n++) {
            // create first angle if no angles
            if (angles.length == 0) {
                microbe.headX = canvas.width / 2;
                microbe.headY = canvas.height / 2;
                angles.push(getRandTheta());
            }
            
            var headX = microbe.headX;
            var headY = microbe.headY;
            var headAngle = angles[angles.length - 1];
            
            // create new head angle
            var dist = anim.getTimeInterval() / (10 * numNewSegmentsPerFrame);
            // increase new head angle by an amount equal to
            // -0.1 to 0.1
            var newHeadAngle = headAngle + ((angleVariance / 2) - Math.random() * angleVariance);
            var newHeadX = headX + dist * Math.cos(newHeadAngle);
            var newHeadY = headY + dist * Math.sin(newHeadAngle);
            
            // change direction if collision occurs
            if (newHeadX >= canvas.width || newHeadX <= 0 || newHeadY >= canvas.height || newHeadY <= 0) {
                newHeadAngle += Math.PI / 2;
                newHeadX = headX + dist * Math.cos(newHeadAngle);
                newHeadY = headY + dist * Math.sin(newHeadAngle);
            }
            
            microbe.headX = newHeadX;
            microbe.headY = newHeadY;
            angles.push(newHeadAngle);
            
            // remove tail angle
            if (angles.length > 20) {
                angles.shift();
            }
        }
    }
}

function drawMicrobes(anim, microbes){
    var segmentLength = 2; // px
    var context = anim.getContext();
        
    for (var i = 0; i < microbes.length; i++) {
        var microbe = microbes[i];
        
        var angles = microbe.angles;
        context.beginPath();
        context.moveTo(microbe.headX, microbe.headY);
        
        var x = microbe.headX;
        var y = microbe.headY;
        
        // start with the head and end with the tail
        for (var n = angles.length - 1; n >= 0; n--) {
            var angle = angles[n];
            
            x -= segmentLength * Math.cos(angle);
            y -= segmentLength * Math.sin(angle);
            context.lineTo(x, y);
        }
        
        context.lineWidth = 10;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = microbe.color;
        context.stroke();
    }
}

function microSample(){
    var anim = new Animation("myCanvas9");
    var canvas = anim.getCanvas();
    var context = anim.getContext();

    // init microbes
    var microbes = [];
    for (var n = 0; n < 100; n++) {
        // each microbe will be an array of angles
        microbes[n] = {
            headX: 0,
            headY: 0,
            angles: [],
            color: getRandColor()
        };
    }

    anim.setStage(function(){
        // update
        updateMicrobes(this, microbes);
        
        // clear
        this.clear();
        
        // draw
        drawMicrobes(this, microbes);
    });

    anim.start();
}


window.onload = function(){
    // 1 move
    moveSample();
    
    // 2 accel
    accSample();

    // 3 osci
    osciSample();

    // 4
    bubbleSample();

    // 5
    swingSample();

    // 6
    gearSample();

    // 7
    clockSample();

    // 8
    particleSample();

    // 9
    microSample();
};