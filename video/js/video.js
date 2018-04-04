window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function drawFrame(context, video){
    context.drawImage(video, 0, 0);
    requestAnimFrame(function(){
        drawFrame(context, video);
    });
}

// 2 Inversion
function drawFrameInverse(canvas, context, video){
    context.drawImage(video, 0, 0);
    
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    
    for (var i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]; // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
        // i+3 is alpha (the fourth element)
    }
    
    // overwrite original image
    context.putImageData(imageData, 0, 0);
    
    requestAnimFrame(function(){
        drawFrameInverse(canvas, context, video);
    });
}

window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var video = document.getElementById("myVideo");
    drawFrame(context, video);

    // Inverse
    var canvas2 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
    var video2 = document.getElementById("myVideo");
    drawFrameInverse(canvas2, context2, video2);
};

