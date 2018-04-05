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
};