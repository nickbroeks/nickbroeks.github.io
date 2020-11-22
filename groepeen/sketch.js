var openID = -1;
var section = 0;
var timer;



function openContent() {
    document.getElementById("content").style.width="150px";

}

function closeContent() {
    document.getElementById("content").style.width="0";
    
}

function sectionTimer() {
    timer = setTimeout(() => {
        nextSection();
    }, 10000);
}

function nextSection() {
    clearTimeout(timer);
    section = (section + 1) % 3;
    document.getElementById("whyContent").style.left = "-" + section + "00%";
    sectionTimer();
}

function openInfo(node) {

    for(let i = 0; i <document.getElementsByClassName("candidatePic").length; i++) {
        document.getElementsByClassName("candidatePic")[i].setAttribute("onClick", "");
    }
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

function closeInfo(e) {
    if (openID != -1) {
        for(let i = 0; i <document.getElementsByClassName("candidatePic").length; i++) {
            document.getElementsByClassName("candidatePic")[i].setAttribute("onClick", "openInfo(this)");
        }
        document.getElementById("closeClick").style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("candInfo" + openID).style.opacity = 0;
        document.getElementById("closeClick").setAttribute("onClick", "");
        setTimeout( () => {
            document.getElementById("candInfo" + openID).hidden = true;
            document.getElementById("closeClick").hidden = true;
            
        }, 1000)
    }
}