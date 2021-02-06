let names = [];

function press() {
    let pers = names[Math.floor(Math.random() * names.length)];
    if (pers == "Inge") {
        document.getElementById("1").innerText = pers
        document.getElementById("2").innerText = 3 + Math.floor(Math.random() * 3);
    } else {
        document.getElementById("1").innerText = pers
        document.getElementById("2").innerText = 1 + Math.floor(Math.random() * 4);
    }
    setTimeout(press, 10000);
}

function submitName() {
    let newName = document.querySelector("#config-tab-input-name").value;
    names.push(newName);
    let obj = document.createElement("span");
    obj.innerText = newName;
    document.querySelector("#config-tab-names").appendChild(obj);
    document.querySelector("#config-tab-names").appendChild(document.createElement("br"));
}

function startGame() {
    document.querySelector('#config-tab').style.visibility = "hidden";
    document.querySelector('#game-tab').style.visibility = "visible";
    press();
}