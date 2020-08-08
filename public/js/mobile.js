function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}

window.addEventListener("resize", windowSize);

function windowSize() {
    if (window.matchMedia("(max-width: 800px)").matches) {
        document.getElementById("logo").src = "../img/logo-text.svg"; 
      } else {
        document.getElementById("logo").src = "../img/logo.svg";
      }
}
