
document.getElementById("open").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-nav");
    view();
});

function view(){
    document.querySelector("nav").classList.add("now");
}