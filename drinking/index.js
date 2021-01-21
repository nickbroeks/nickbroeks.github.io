const test = ["Nick", "Anne", "Cindy", "Sophie", "Niels"];

function press() {
    let pers = test[Math.floor(Math.random() * test.length)];
    if (pers == "Inge") {
        document.getElementById("1").innerText = pers
        document.getElementById("2").innerText = 3 + Math.floor(Math.random() * 3);
    } else {
        document.getElementById("1").innerText = pers
        document.getElementById("2").innerText = 3 + Math.floor(Math.random() * 3);
    }
    setTimeout(press, 4000);
}
