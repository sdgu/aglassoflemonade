var canvas2 = document.getElementById("mmLabel1");
var context2 = canvas2.getContext("2d");
var imageObj3 = new Image();

var el = document.getElementById("reveal");
el.onclick = drawAll;



function drawAll()
{
    // context2.beginPath();
    // context2.arc(18, 188, 15, 0, 2 * Math.PI);

    // context2.lineWidth = 3;
    // context2.strokeStyle = "green";
    // context2.stroke();

    // drawStroked("Radiant Fountain", 34, 191);

    // context2.beginPath();
    // context2.arc(33, 175, 5, 0, 2 * Math.PI);

    // context2.lineWidth = 3;
    // context2.strokeStyle = "#00e600";
    // context2.stroke();

    // drawStroked("Radiant Ancient", 38, 179);

    // context2.beginPath();
    // context2.arc(192, 21, 15, 0, 2 * Math.PI);

    // context2.lineWidth = 3;
    // context2.strokeStyle = "red";
    // context2.stroke();

    // drawStroked("Dire Fountain", 214, 24);

    // context2.beginPath();
    // context2.arc(177, 40, 5, 0, 2 * Math.PI);

    // context2.lineWidth = 3;
    // context2.strokeStyle = "#ff3333";
    // context2.stroke();

    // drawStroked("Dire Ancient", 186, 46);

    drawCircle(context2, 18, 188, 15, 3, "green", scaleBack);
    drawStroked2(context2, "Radiant Fountain", 12, 3, "black", "white", 35, 192, scaleBack);

    drawCircle(context2, 33, 175, 5, 3, "#00e600", scaleBack);
    drawStroked2(context2, "Radiant Ancient", 12, 3, "black", "white", 38, 179, scaleBack);
        
    drawCircle(context2, 192, 21, 15, 3, "red", scaleBack);
    drawStroked2(context2, "Dire Fountain", 12, 3, "black", "white", 214, 24, scaleBack);

    drawCircle(context2, 177, 40, 5, 3, "#ff3333", scaleBack);
    drawStroked2(context2, "Dire Ancient", 12, 3, "black", "white", 186, 46, scaleBack);
        
}


    scaleBack = 1.5;

imageObj3.onload = function()
{

    context2.drawImage(imageObj3, 0, 0, 209 * scaleBack, 205 * scaleBack);

    canvas2.onclick = function(e)
    {
        var rect = canvas2.getBoundingClientRect();


        //var data = context2.getImageData(x, y, 1, 1).data;
        var xC = e.clientX - rect.left;
        var yC = Math.floor(e.clientY - rect.top);


        if (isInsideRect(xC, yC, 9, 25, 179, 195, scaleBack))
            //((xC > 9) && (xC < 25) && (yC > 179) && (yC < 195))
        {


            drawCircle(context2, 18, 188, 15, 3, "green", scaleBack);
            drawStroked2(context2, "Radiant Fountain", 12, 3, "black", "white", 35, 192, scaleBack);


        }

        else if (isInsideRect(xC, yC, 26, 38, 169, 179, scaleBack)) 
        //((xC > 26) && (xC < 38) && (yC > 169) && (yC < 179))
        {

            drawCircle(context2, 33, 175, 5, 3, "#00e600", scaleBack);
            drawStroked2(context2, "Radiant Ancient", 12, 3, "black", "white", 38, 179, scaleBack);
        }

        else if (isInsideRect(xC, yC, 185, 199, 12, 29, scaleBack))
        //((xC > 185) && (xC < 199) && (yC > 13) && (yC < 29))
        {
            drawCircle(context2, 192, 21, 15, 3, "red", scaleBack);
        	drawStroked2(context2, "Dire Fountain", 12, 3, "black", "white", 214, 24, scaleBack);
        }

        else if (isInsideRect(xC, yC, 172, 182, 36, 44, scaleBack))
        //((xC > 172) && (xC < 182) && (yC > 36) && (yC < 44))
        {
            drawCircle(context2, 177, 40, 5, 3, "#ff3333", scaleBack);
            drawStroked2(context2, "Dire Ancient", 12, 3, "black", "white", 186, 46, scaleBack);
        }



//alert(xC + " " + yC);

}

//radiant fountain
//top left 9,179
//bottom left 9, 195
//top right 25, 179
//bottom right 25, 195

//radiant ancient
//tl 28, 176
//bl 28, 178
//tr 36, 172
//br 36, 178

//dire fountain
//tl 185, 13
//bl 185, 29
//tr 199, 13
//br 199, 29

//dire ancient
//tl 173, 37
//bl 173, 43
//tr 181, 37
//br 181, 43


};
imageObj3.src = "/images/dota/beginner/minimap_orig.png";