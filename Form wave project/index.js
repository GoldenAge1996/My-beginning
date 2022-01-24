var labels = document.querySelectorAll("label");

labels.forEach(label => {
label.innerHTML = label.innerText
.split('')
.map((letter, idx) =>
    '<span> Email </span>'
);


});