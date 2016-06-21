function isInsideRect(xq, yq, x1, x2, y1, y2, scale)
{
	if ((xq > x1 * scale) && (xq < x2 * scale) && (yq > y1 * scale) && (yq < y2 * scale))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function drawCircle(cont, centX, centY, rad, width, color, scale)
{
	cont.beginPath();
	cont.arc(centX * scale, centY * scale, rad * scale, 0, 2 * Math.PI);

	cont.lineWidth = width * scale;
	cont.strokeStyle = color;
	cont.stroke();
}
//http://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
function drawStroked(text, x, y)
{

	context2.font = "12px Arial";
	context2.strokeStyle = "black";
    //context2.lineWidth = 4;
    context2.strokeText(text, x, y);
    context2.fillStyle = "white";
    context2.fillText(text, x, y);
    context2.miterLimit = 2;


}

function drawStroked2(cont, text, fSize, outWidth, outColor, inColor, x, y, scale)
{

	cont.font = fSize + "px Arial";
	cont.lineWidth = outWidth;
	cont.strokeStyle = outColor;
    //context2.lineWidth = 4;
    cont.strokeText(text, x * scale, y * scale);
    cont.fillStyle = inColor;
    cont.fillText(text, x * scale, y * scale);
    cont.miterLimit = 3;


}