function draw3dText(context, text, x, y, textDepth){
    var n;
    
    // draw bottom layers
    for (n = 0; n < textDepth; n++) {
        context.fillText(text, x - n, y - n);
    }
    
    // draw top layer with shadow casting over
    // bottom layers
    context.fillStyle = "#5E97FF";
    context.shadowColor = "black";
    context.shadowBlur = 10;
    context.shadowOffsetX = textDepth + 2;
    context.shadowOffsetY = textDepth + 2;
    context.fillText(text, x - n, y - n);
}

window.onload = function(){

    // Basic
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    
    context.font = "40pt Calibri";
    context.fillStyle = "black";

    // align text horizontally center
    context.textAlign = "center";
    // align text vertically center
    context.textBaseline = "middle";
    context.fillText("Hello World!", canvas.width / 2, 120);
    //context.strokeText("Hello World!", canvas.width / 2, 120);


    // Shadowed
    canvas2 = document.getElementById("myCanvas2");
    context2 = canvas2.getContext("2d");
    
    context2.font = "40pt Calibri";
    context2.fillStyle = "black";

    // align text horizontally center
    context2.textAlign = "center";
    // align text vertically center
    context2.textBaseline = "middle";
    draw3dText(context2, "Hello 3D World!", canvas.width / 2, 120, 5);
};

    