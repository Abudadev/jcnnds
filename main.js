
var ctz = document.getElementById("myCanvas");

var ctx = ctz.getContext("2d");

var color = "";

var width = 0;

mouseEvent = "";
ctz.addEventListener("mousedown", getter);

function getter(e){
   color = document.getElementById("color").value;
  width = document.getElementById("width").value;

    mouseEvent = "mousedown";
}

ctz.addEventListener("mouseLeave", out);

function out(e){

      mouseEvent = "mouseLeave";
}

ctz.addEventListener("mouseup", up);

function up (e){

     mouseEvent = "mouseup";
}

ctz.addEventListener("mousemove", move);

function move(e){
   current_x = e.clientX - ctz.offsetLeft;
   current_y = e.clientY - ctz.offsetTop;

   if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    
    console.log("Last position of x and y coordinates =")
    console.log("x =" + last_x + "y = " + last_y)


    console.log("Current position of x and y coordinates =");
    console.log("x = " + current_x + "y = " + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();


   }
   last_x = current_x     
   last_y = current_y
}
