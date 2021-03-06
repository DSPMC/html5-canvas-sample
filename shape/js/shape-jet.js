window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var grd;
  
    context.lineJoin = "round";



    // outline right tail wing
    context.beginPath();
    context.moveTo(248, 60); //13
    context.lineTo(262, 45); // 12
    context.lineTo(285, 56); //11
    context.lineTo(284, 59); // 10
    context.lineTo(276, 91); // 9
    context.closePath();
    context.fillStyle = "#495AFE";
    context.fill();
    context.lineWidth = 4;
    context.stroke();
    
    // right tail wing detail
    context.beginPath();
    context.moveTo(281, 54); // 10
    context.lineTo(273, 84); // 9
    context.closePath();
    context.lineWidth = 2;
    context.stroke();

    

    // outline right wing
    context.beginPath();
    context.moveTo(425, 159);
    context.lineTo(449, 91); // 4
    context.lineTo(447, 83); // 5
    context.lineTo(408, 67); // 6
    context.lineTo(343, 132); // 7
    context.fillStyle = "#495AFE";
    context.fill();
    context.lineWidth = 4;
    context.stroke();
    
    // right wing detail
    context.beginPath();
    context.moveTo(420, 158);
    context.lineTo(447, 83); // 4
    context.lineWidth = 2;
    context.stroke();
    
    context.beginPath();
    context.moveTo(439, 102);
    context.lineTo(395, 81);
    context.lineWidth = 2;
    context.stroke();



        // outline body
    context.beginPath();
    context.moveTo(541, 300); // 1
    context.quadraticCurveTo(529, 252, 490, 228); // 2
    context.quadraticCurveTo(487, 160, 303, 123); // 3
    
    // outline tail
    context.lineTo(213, 20); // 14
    context.lineTo(207, 22); // 15
    context.bezierCurveTo(208, 164, 255, 207, 412, 271); // 27
    context.lineTo(427, 271); // 28
    context.quadraticCurveTo(470, 296, 541, 300); // 1
    context.closePath();
    grd = context.createLinearGradient(304, 246, 345, 155);
    grd.addColorStop(0, "#000E91"); // dark blue
    grd.addColorStop(1, "#495AFE"); // light blue
    context.fillStyle = grd;
    context.fill();
    context.lineWidth = 4;
    context.stroke();
    
    // tail detail
    context.beginPath();
    context.moveTo(297, 124);
    context.lineTo(207, 22);
    context.lineWidth = 2;
    context.stroke();



        // outline left tail wing
    context.beginPath();
    context.moveTo(303, 121); // 8
    context.lineTo(297, 125); // 8
    context.lineTo(255, 104);
    context.lineWidth = 2;
    context.stroke();
    
    context.beginPath();
    context.moveTo(212, 80);
    context.lineTo(140, 85); // 18
    context.lineTo(138, 91); // 19
    context.lineTo(156, 105); // 20
    context.lineTo(254, 104);
    context.lineTo(254, 100);
    context.lineWidth = 4;
    context.fillStyle = "#495AFE";
    context.fill();
    context.stroke();
    
    // left tail wing detail
    context.beginPath();
    context.moveTo(140, 86); // 18
    context.lineTo(156, 100); // 20
    context.lineTo(254, 100);
    context.lineTo(209, 77);
    context.lineWidth = 2;
    context.stroke();



        // outline left wing
    context.beginPath();
    context.moveTo(262, 166); // 22
    context.lineTo(98, 208); // 23
    context.lineTo(96, 215); // 24
    context.lineTo(136, 245); // 25
    context.lineTo(339, 218);
    context.lineTo(339, 215);
    context.closePath();
    context.fillStyle = "#495AFE";
    context.fill();
    context.lineWidth = 4;
    context.stroke();

    // left wing detail
    context.beginPath();
    context.moveTo(98, 210);
    context.lineTo(136, 240); // 25
    context.lineTo(339, 213);
    context.lineWidth = 2;
    context.stroke();
    
    context.beginPath();
    context.moveTo(165, 235);
    context.lineTo(123, 203);
    context.lineWidth = 2;
    context.stroke();



        // side detail
    context.beginPath();
    context.moveTo(427, 271);
    context.lineTo(423, 221);
    context.quadraticCurveTo(372, 175, 310, 155);
    context.lineWidth = 4;
    context.stroke();



        // nose detail
    context.beginPath();
    context.moveTo(475, 288);
    context.quadraticCurveTo(476, 256, 509, 243);
    context.quadraticCurveTo(533, 268, 541, 300); // 1
    context.quadraticCurveTo(501, 300, 475, 288);
    grd = context.createLinearGradient(491, 301, 530, 263);
    grd.addColorStop(0, "#9D0000"); // dark red
    grd.addColorStop(1, "#FF0000"); // light red
    context.fillStyle = grd;
    context.fill();
    context.lineWidth = 4;
    context.stroke();
    
    context.beginPath();
    context.moveTo(480, 293);
    context.quadraticCurveTo(480, 256, 513, 246);
    context.lineWidth = 2;
    context.stroke();



        // cockpit detail
    context.beginPath();
    context.moveTo(442, 169);
    context.quadraticCurveTo(419, 176, 415, 200);
    context.quadraticCurveTo(483, 250, 490, 228);
    context.quadraticCurveTo(480, 186, 439, 170);
    context.lineWidth = 4;
    context.stroke();
    grd = context.createRadialGradient(473, 200, 20, 473, 200, 70);
    grd.addColorStop(0, "#E1E7FF"); // dark gray
    grd.addColorStop(1, "#737784"); // light gray
    context.fillStyle = grd;
    context.fill();
    
    context.beginPath();
    context.moveTo(448, 173);
    context.quadraticCurveTo(425, 176, 420, 204);
    context.lineWidth = 2;
    context.stroke();
    
    context.beginPath();
    context.moveTo(470, 186);
    context.quadraticCurveTo(445, 190, 440, 220);
    context.lineWidth = 2;
    context.stroke();



        // intake outline
    context.beginPath();
    context.moveTo(420, 265);
    context.lineTo(416, 223);
    context.bezierCurveTo(384, 224, 399, 270, 420, 265);
    context.closePath();
    context.fillStyle = "#001975";
    context.fill();
    context.lineWidth = 4;
    context.stroke();
    
    context.beginPath();
    context.moveTo(420, 265);
    context.lineTo(402, 253);
    context.lineWidth = 2;
    context.stroke();
    
    context.beginPath();
    context.moveTo(404, 203);
    context.bezierCurveTo(364, 204, 379, 265, 394, 263);
    context.lineWidth = 2;
    context.stroke();
};
    










