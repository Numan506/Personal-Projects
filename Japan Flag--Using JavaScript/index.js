var myVar = document.querySelector("#japan");
var ctx = myVar.getContext("2d");



ctx.lineWidth="3"

ctx.strokeStyle="gray";
ctx.strokeRect(10,10,378,278);

ctx.fillStyle="white";
ctx.fillRect(20,20,340,266);

var centerX = myVar.width/2;
var centerY = myVar.height/2;

ctx.beginPath();
ctx.arc(centerX,centerY,60,0,2*Math.PI,false);
ctx.fillStyle="red";
ctx.fill();
