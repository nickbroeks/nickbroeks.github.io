let names = [];

function press() {
    let pers = names[Math.floor(Math.random() * names.length)];
    let number;
    if (pers == "Inge") {
        document.getElementById("1").innerText = pers
        number = 3 + Math.floor(Math.random() * 3);
    } else {
        document.getElementById("1").innerText = pers
        number = 1 + Math.floor(Math.random() * 4);
    }
    document.getElementById("2").innerText = number
    setTimeout(press, 120000);
    document.body.classList.add("Red");
    setTimeout(()=> {document.body.classList.remove("Red")}, 3000)
    setTimeout(()=> {document.body.classList.add("Red")}, 4000)
    setTimeout(()=> {document.body.classList.remove("Red")}, 5000)
    setTimeout(()=> {document.body.classList.add("Red")}, 6000)
    setTimeout(()=> {document.body.classList.remove("Red")}, 7000)
    setTimeout(()=> {document.body.classList.add("Red")}, 8000)
    setTimeout(()=> {document.body.classList.remove("Red")}, 9000)

    let utter = new SpeechSynthesisUtterance()
    utter.lang = 'nl';
    utter.text = `Hallo.${pers} drinkt ${number} keer, ${number} keer`;
    window.speechSynthesis.speak(utter);
    
}

function submitName() {
    if (document.querySelector("#config-tab-input-name").value != "") {
        let newName = document.querySelector("#config-tab-input-name").value;
        names.push(newName);
        let obj = document.createElement("span");
        obj.innerText = newName;
        document.querySelector("#config-tab-names").appendChild(obj);
        document.querySelector("#config-tab-names").appendChild(document.createElement("br"));
        document.querySelector("#config-tab-input-name").value = "";
    }
}

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (e.code == "Enter") {
      submitName();
  }
}

function startGame() {
    document.querySelector('#config-tab').style.visibility = "hidden";
    document.querySelector('#game-tab').style.visibility = "visible";
    press();
}