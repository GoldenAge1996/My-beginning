/*var panels = document.querySelectorAll(".panel");


panels.forEach(panel => {
    panel.addEventListener("click", function(){
        revomeActive();
        panel.classList.add("active");
    });
    
});

function revomeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
    
};*/

/*const panels = document.querySelectorAll(".panel");

for (var i = 0; i< panels.length; i++){
    panels[i].addEventListener("click", function(){
        document.querySelector(".panel").classList.remove("active");
    });
}*/
panels = document.querySelectorAll(".panel");
panels.forEach(panel => {
   
    panel.addEventListener("click", function(){
        revomeActive();
        panel.classList.add("active");
    });
});

function revomeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}