var toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", function(){
        toggle.parentNode.classList.toggle("active");
    });
});

toggles.forEach(toggle => {
    toggle.addEventListener("click", function(){
        toggle.classList.toggle("active");
    });
});