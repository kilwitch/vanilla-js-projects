
let btn=document.getElementById("generate")
let b=btn.addEventListener("click",generateColor)

function generateColor(){
    let boxs=["one","two","three","four","five"];
    for(let i=0;i<=5;i++){
    let divObject=document.getElementById(boxs[i]);
    divObject.style.backgroundColor= getRandomColor();
    let c=getRandomColor();
    // let ps=document.querySelector('p');
    // ps.textContent=c ;
    divObject.textContent=c;
    }
    
}
function getRandomColor(){
    var letters= '0123456789ABCDEF';
    var color= '#'
    for(var i=0;i<6;i++){
        color +=letters[Math.floor(Math.random()* 16)]
    }
    return color;
}