var mouseEvent="empty";
var last_postion_x,last_postion_y,current_position_x,current_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_off_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokestyle=color;
    ctx.lineWidth=width_off_line;
    console.log("current postion of x and y");
    console.log(current_position_x,current_position_y);
    ctx.arc(current_position_x,current_position_,y,radius,0,2*Math.PI);
    ctx.stroke();
}
last_postion_x=current_position_x;
last_postion_y=current_position_y;
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
     mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}