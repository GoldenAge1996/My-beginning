const images = document.querySelector(".images");
const left = document.getElementById("left");
const right = document.getElementById("right");

const img = document.querySelectorAll(".images img");


let idx = 0;


let interval = setInterval(run, 2000);

function run (){
    idx++
    changeImage()
}

function changeImage(){
if(idx > img.length -1 ){
    idx = 0
    
}else if(idx <0){
    idx = img.length -1
}

images.style.transform = `translateX(${-idx * 500}px)`
}


function clear (){
    clearInterval()
    setInterval(run, 2000);
}

right.addEventListener("click", ()=>{
    clear()
    idx++
    changeImage()
})

left.addEventListener("click", ()=>{
    clear()
    idx--
    changeImage()
})