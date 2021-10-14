var numSquares=6;
var colors=generateRandomColors(numSquares);
squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
colorDisplay.textContent=pickedColor;
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
    numSquares=3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});
hard.addEventListener("click",function(){
    numSquares=6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(i=0;i<squares.length;i++){
        
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
        
      
    }

});

resetButton.addEventListener("click",function(){
    message.textContent="";
    this.textContent="New Colors";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }

});

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function()
    {
        var clickedColor=String(this.style.backgroundColor);
        
        
        if(clickedColor===pickedColor)
        {
            message.textContent="Correct!"
            changeColor(pickedColor);
            h1.style.backgroundColor=pickedColor;
            resetButton.textContent="Play Again?";

        }
        else
        {
            this.style.backgroundColor="#232323";
            message.textContent="Try Again"
        }
    });

    function changeColor(color)
    {
        for (i=0;i<colors.length;i++){
            squares[i].style.backgroundColor=color;
        }
    }
    
}
function pickColor()
{
        var random = Math.floor(Math.random()*colors.length);
        return colors[random];
}
function generateRandomColors(num)
{
    var arr=[];
    for(i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor()
{
    var red=Math.floor(Math.random()*256);
    var green =Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
}    