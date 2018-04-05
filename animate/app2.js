// 1
function writeMessage(context, message){
    context.font = "18pt Calibri";
    context.fillStyle = "black";
    context.fillText(message, 10, 25);
}

function basicSample(){
	var events = new Events("myCanvas");
    var canvas = events.getCanvas();
    var context = events.getContext();

    canvas.addEventListener("mouseout", function(){
        events.clear();
        writeMessage(context, "Mouseover me!");
    }, false);

    canvas.addEventListener("mousemove", function(){
        var mousePos = events.getMousePos();
        events.clear();
  
        if (mousePos !== null) {
            message = "Mouse position: " + mousePos.x + "," + mousePos.y;
            writeMessage(context, message);
        }
    }, false);

    // if we don't set the stage function,
    // we'll have to manually start listening for events
    events.listen();

    writeMessage(context, "Mouseover me!");
}

// 2 region
function writeMessage2(context, message){
    context.font = "18pt Calibri";
    context.fillStyle = "black";
    context.fillText(message, 10, 25);
}

function regionSample() {
	var events = new Events("myCanvas2");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var message = "";

    events.setStage(function(){
  		this.clear();
  		// draw blue triangle
        this.beginRegion();
        context.beginPath();
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.fillStyle = "#00D2FF";
        context.moveTo(50, 50);
        context.lineTo(180, 80);
        context.lineTo(80, 170);
        context.closePath();
        context.fill();
        context.stroke();

        this.addRegionEventListener("mousemove", function(){
            var mousePos = events.getMousePos();
            var mouseX = mousePos.x - 50;
            var mouseY = mousePos.y - 50;
            message = "Triangle mouse Position: " + mouseX + "," + mouseY;
        });
  
        this.addRegionEventListener("mouseout", function(){
            message = "Mouseout blue triangle!";
        });
        
        this.closeRegion();

        // draw yellow rectangle
        // this is an example of a shape
        // with no event listeners
        context.beginPath();
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.fillStyle = "yellow";
        context.rect(200, 65, 150, 75);
        context.fill();
        context.stroke();

        // draw red circle
        this.beginRegion();
        context.beginPath();
        context.arc(450, canvas.height / 2, 70, 0, Math.PI * 2, true);
        context.fillStyle = "red";
        context.fill();
        context.stroke();

        this.addRegionEventListener("mousedown", function(){
            message = "Mousedown red circle!";
        });
        this.addRegionEventListener("mouseup", function(){
            message = "Mouseup red circle!";
        });
        this.addRegionEventListener("mouseover", function(){
            message = "Mouseover red circle!";
        });
        this.addRegionEventListener("mouseout", function(){
            message = "Mouseout red circle!";
        });
        
        this.closeRegion();

		writeMessage2(context, message);
    });
    
    // since we set the draw stage function, the listen()
    // method is automatically called for us
}

// 3 touch
function writeMessage3(context, message){
    context.font = "18pt Calibri";
    context.fillStyle = "black";
    context.fillText(message, 10, 25);
}

function touchSample(){
	var events = new Events("myCanvas3");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var message = "";

    events.setStage(function(){
    	this.clear();
    	// draw blue triangle
        this.beginRegion();
        context.beginPath();
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.fillStyle = "#00D2FF";
        context.moveTo(50, 50);
        context.lineTo(180, 80);
        context.lineTo(80, 170);
        context.closePath();
        context.fill();
        context.stroke();

        this.addRegionEventListener("touchmove", function(){
            var touchPos = events.getTouchPos();
            
            if (touchPos !== null) {
                var touchX = touchPos.x - 20;
                var touchY = touchPos.y - 50;
                
                message = "Triangle touch position: " + touchX + "," + touchY;
            }
        });
        
        this.closeRegion();

        // draw yellow rectangle
        // this is an example of a shape
        // with no event listeners
        context.beginPath();
        context.lineWidth = 4;
        context.strokeStyle = "black";
        context.fillStyle = "yellow";
        context.rect(200, 65, 150, 75);
        context.fill();
        context.stroke();

        // draw red circle
        this.beginRegion();
        context.beginPath();
        context.arc(450, canvas.height / 2, 70, 0, Math.PI * 2, true);
        context.fillStyle = "red";
        context.fill();
        context.stroke();

        this.addRegionEventListener("touchstart", function(){
            message = "Touchstart red circle!";
        });
        
        this.addRegionEventListener("touchend", function(){
            message = "Touchend red circle!";
        });
        
        this.closeRegion();

        writeMessage3(context, message);
    });
    
    // since we set the draw stage function, the listen()
    // method is automatically called for us
}


window.onload = function(){
    // 1
    basicSample();

    // event region
    regionSample();

    // 3
    touchSample();
};