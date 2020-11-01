function open_menu() {
    if (document.getElementById("menu").style.display != "block") {
        document.getElementById("content").style.width = "90vw";
        document.getElementById("menu").style.display = "block";
    } else { 
        document.getElementById("content").style.width = "100vw";
        document.getElementById("menu").style.display = "none";
    }   
}