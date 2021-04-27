
function onLoad() {
    document.querySelector("#HeaderMenu").addEventListener("click", openMenu)
}

setTimeout(onLoad, 10)

function openMenu() {
    document.querySelector("#HeaderMenu").removeEventListener("click", openMenu)
    document.querySelector("#HeaderMenu").addEventListener("click", closeMenu)

    document.querySelector("#menu").style.display = "block"
    setTimeout(()=>{
        document.querySelector("body").style.right = "200px"
    },0)
}

function closeMenu() {
    document.querySelector("#HeaderMenu").removeEventListener("click", closeMenu)
    document.querySelector("#HeaderMenu").addEventListener("click", openMenu)

    setTimeout(()=>{document.querySelector("#menu").style.display = "none"},1000);
    

    document.querySelector("body").style.right = "0"
}