const form = document.querySelector("form");
const btn = document.querySelector(".btn");

btn.onclick = function () {
    if (form.style.display === "none") {
        form.style.display = "block";
     } else { 
        form.style.disply = "none";
}
};