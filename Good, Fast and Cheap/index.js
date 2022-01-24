const good = document.getElementById("good");
const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const toggles = document.querySelectorAll(".ball");



toggles.forEach(toggle =>
    toggle.addEventListener("change", (e)=> doTheTrick(e.target)
));

function doTheTrick(theCheckedOne){
    if(good.checked && fast.checked && cheap.checked){
        if(good === theCheckedOne){
            fast.checked = false;
        }
        if(fast === theCheckedOne){
            good.checked = false;
        }
        if(cheap === theCheckedOne){
            good.checked = false;
        }
    }

}
