/*const litters = document.getElementById("litters");
const smallCups = document.querySelectorAll(".small");
const remained = document.getElementById("remainder");
const percentage = document.getElementById("percentage");

updateBigCups();

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", ()=> highlightCups(idx))
});

function highlightCups(idx){
if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")){
    idx--
}

    smallCups.forEach((cup, idx2) => {
        if(idx2<= idx){
            cup.classList.add("full");
        }else{
            cup.classList.remove("full");
        }
    });

    updateBigCups();
}

function updateBigCups(){
    const fullCups = document.querySelectorAll(".small.full").length;
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else{
percentage.style.visibility = "visible";
percentage.style.height = `${fullCups/totalCups * 330}px`
    }
}*/


const smallCups = document.querySelectorAll(".small");
const percentage = document.getElementById("percentage");
const remainder = document.getElementById("remainder");
const litters = document.getElementById("litters");


updateBigCups();


smallCups.forEach((small, idx) => {
    small.addEventListener("click", () => highlightCup(idx));
});

function highlightCup(idx){

    if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")){
        idx--
    }

    smallCups.forEach((small, idx2) => {
        if(idx2<= idx){
            small.classList.add("full");
        }else{
            small.classList.remove("full"); 
        }
    });

    updateBigCups();
}


function updateBigCups(){
    const fullCups = document.querySelectorAll(".small.full").length;
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else{
percentage.style.visibility = "visible";
percentage.style.height = `${fullCups/totalCups * 330}px`
percentage.innerText =`${ fullCups/ totalCups *100}%`
    }
}