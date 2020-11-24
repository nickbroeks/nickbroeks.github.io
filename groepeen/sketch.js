var openID = -1;
var whySection = 0;
var achiSection = 0;
var goalSection = 0;
var whyTimer;
var achiTimer;
var goalTimer;



function openContent() {
    document.getElementById("content").style.width="240px";
    document.getElementById("contentTab").style.left="240px";
    document.getElementById("contentList").style.left="0px";
    document.getElementById("contentTab").setAttribute("onmouseover","");

}

function closeContent() {
    document.getElementById("content").style.width="0px";
    document.getElementById("contentTab").style.left="0px";
    document.getElementById("contentList").style.left="-240px";
    setTimeout(() => {
        document.getElementById("contentTab").setAttribute("onmouseover","openContent()");
    },300)
}

function sectionWhyTimer() {
    whyTimer = setTimeout(() => {
        nextWhySection();
    }, 10000);
}

function nextWhySection() {
    clearTimeout(whyTimer);
    whySection = (whySection + 1) % 3;
    document.getElementById("whyContent").style.left = -whySection + "00%";
    sectionWhyTimer();
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

function sectionAchiTimer() {
    achiTimer = setTimeout(() => {
        nextAchiSection();
    }, 10000);
}

function nextAchiSection() {
    clearTimeout(achiTimer);
    achiSection = (achiSection + 1) % 6;
    document.getElementById("achievementsContent").style.left = -achiSection + "00%";
    sectionAchiTimer();
}

function sectionGoalTimer() {
    goalTimer = setTimeout(() => {
        nextGoalSection();
    }, 10000);
}

function nextGoalSection() {
    clearTimeout(goalTimer);
    goalSection = (goalSection + 1) % 7;
    document.getElementById("goalsContent").style.left = -goalSection + "00%";
    sectionGoalTimer();
}

function scrolll(node) {
    var el = document.getElementById(node.getAttribute("lID"));
    el.scrollIntoView({behavior: "smooth"});
}