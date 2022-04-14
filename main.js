var mevents = "EMPTY";
var lastpX;
var lastpY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "black";
widthl = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    widthl = document.getElementById("width").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    curr_pm_x = e.clientX - canvas.offsetLeft;
    curr_pm_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthl;
        
        console.log("Last position X: " + lastpX + " Last position Y: " + lastpY);
        ctx.moveTo(lastpX, lastpY);

        console.log("Current position X: " + curr_pm_x + " Current position Y: " + curr_pm_y);
        ctx.lineTo(curr_pm_x, curr_pm_y);
        ctx.stroke();
    }

    lastpX = curr_pm_x;
    lastpY = curr_pm_y;
}

function clearcanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}