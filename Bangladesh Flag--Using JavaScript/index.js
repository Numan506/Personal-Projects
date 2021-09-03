
var myVar = document.querySelector("#Canvas");
var c = myVar.getContext("2d");

c.lineWidth="2"

c.strokeStyle="red"
c.strokeRect(10,10,380,280)

c.fillStyle="green"
c.fillRect(11,11,378,278);

var cenX= myVar.width/2;
var cenY= myVar.height/2;



c.beginPath();
c.arc(cenX,cenY,75,0,2*Math.PI,false);
c.fillStyle="red"
c.fill();
c.strokeStyle="pink"
c.stroke();