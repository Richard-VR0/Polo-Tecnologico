var altezza = window.screen.height;

var larghezza = window.screen.width;

var img = document.getElementById("img");

if (larghezza < 200) {
    img.style.display = "none";
}

if (larghezza > 200 && larghezza < 500) {
    img.style.height = "10%";
}

if (larghezza > 500) {
    img.style.display = "15%";
}