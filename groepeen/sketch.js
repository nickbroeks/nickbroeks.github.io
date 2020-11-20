var openID = -1;

function closeInfo(e) {
    if (openID != -1) {
        
        document.getElementById("closeClick").style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("candInfo" + openID).style.opacity = 0;
        setTimeout( () => {
            document.getElementById("candInfo" + openID).hidden = true;
            document.getElementById("closeClick").hidden = true;
            document.getElementById("closeClick").setAttribute("onClick", "");
        }, 1000)
    }
    e.stopPropagation();
    
}

function openInfo(node) {
    openID = node.getAttribute("candID");
    document.getElementById("candInfo" + openID).hidden = false;
    document.getElementById("closeClick").hidden = false;
    
    setTimeout( () => {
        document.getElementById("closeClick").style.backgroundColor = "rgba(0,0,0,0.2)";
        document.getElementById("closeClick").setAttribute("focus", true);
        document.getElementById("candInfo" + openID).style.opacity = 1;
    }, 1)
    setTimeout( ()=> {
        document.getElementById("closeClick").setAttribute("onClick", "closeInfo(event)");
    }, 1000)
}

function showSocials() {
    document.getElementById("socialTab").style.width="10%";
}

function closeSocials() {
    document.getElementById("socialTab").style.width="5%";
    
}

function calcHeight() {
    document.getElementById("social")
}