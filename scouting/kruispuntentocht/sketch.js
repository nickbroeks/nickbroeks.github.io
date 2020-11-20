var crossings = [[
    {x1: 50, x2: 50, y1: 95, y2:50, width:20}
]];
var columnsconst = {};
var height;
var selected = 0;
var isHoverEditor = false;
var HoverLine = -1;

function on_load() {
    for(let i = 1; i < 140; i++) {
        let sum = 1;
        if (i >= 1) {sum++;}
        if (i >= 4) {sum++;}
        if (i >= 12) {sum++;}
        if (i >= 20) {sum++;}
        if (i >= 35) {sum++;}
        if (i >= 48) {sum++;}
        if (i >= 63) {sum++;}
        if (i >= 88) {sum++;}
        if (i >= 108) {sum++;}
        columnsconst[i] = sum;
    }

    height = document.getElementById("content").offsetHeight;
    height -= height % 100;
    document.getElementById("canvas").setAttribute("height", height);
    document.getElementById("canvas").setAttribute("width", height / Math.sqrt(2));
    draw();
}

function open_menu() {
    if (document.getElementById("menu").style.display != "block") {
        document.getElementById("content").style.width = "90vw";
        document.getElementById("menu").style.display = "block";
    } else { 
        document.getElementById("content").style.width = "100vw";
        document.getElementById("menu").style.display = "none";
    }   
}

function save() {
    let svg = document.getElementById("canvas");
    saveSvgAsPng(svg, "diagram.png");
    
}

function highlight(node) {
    node.style.backgroundColor="rgba(255,0,0,0.3)";
}

function stopHighlight(node) {
    node.style.backgroundColor="rgba(0,0,0,0)";
}

function select(node) {
    selected = parseInt(node.getAttribute("index"));
    draw();
}

function hoverEditor() {
    isHoverEditor = true;
    drawEditor();
}

function stopHoverEditor() {
    isHoverEditor = false;
    drawEditor();
}

function startMovePoint(el) {
    console.log(el);
}

function drawEditor() {//https://www.w3schools.com/jsref/event_onmousemove.asp

    while (document.getElementsByClassName("EditorLine").length>0) {
        let child = document.getElementsByClassName("EditorLine")[0];
        document.getElementById("crossingEditor").removeChild(child);
        
    }

    if (selected === crossings.length) {
        crossings[selected] = [
            new svgLine("crossingEditor", ),
            {x1:50, x2:50, y1:50, y2:90, width:20},
            {x1:10, x2:50, y1:50, y2:50, width:20},
            {x1:50, x2:90, y1:50, y2:50, width:20}];
    }
    crossings[selected].forEach(line => {
        var node = line.draw();
        if (isHoverEditor) {
            node.setAttribute("style", "stroke:rgb(200,200,200);");
        } else {
            node.setAttribute("style", "stroke:black;");
        }
        
        document.getElementById("crossingEditor").appendChild(node);
    });

    crossings[selected].forEach(line => {
        var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        node.setAttribute("class", "EditorLine");
        
        node.setAttribute("x1", (line.x1 - (line.x2-line.x1) / 100)  + "%");
        node.setAttribute("x2", (line.x2 + (line.x2-line.x1) / 100) + "%");
        
        node.setAttribute("y1", (line.y1 - (line.y2-line.y1) / 100) + "%");
        node.setAttribute("y2", (line.y2 + (line.y2-line.y1) / 100) + "%");
        
        node.setAttribute("stroke-width", (line.width - 1) + "%");
        node.setAttribute("style", "stroke:white");
        document.getElementById("crossingEditor").appendChild(node);
    });

    if (isHoverEditor) {
        crossings[selected].forEach((line , index)=> {
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            node.setAttribute("class", "EditorLine");
            
            node.setAttribute("x1", (line.x1)  + "%");
            node.setAttribute("x2", (line.x2) + "%");
            
            node.setAttribute("y1", (line.y1) + "%");
            node.setAttribute("y2", (line.y2) + "%");
            
            node.setAttribute("stroke-width", "9px");
            node.setAttribute("style", "stroke:rgb(100, 100, 100)");
            document.getElementById("crossingEditor").appendChild(node);

            node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            node.setAttribute("class", "EditorLine");
            node.setAttribute("cx", (line.x2) + "%");
            node.setAttribute("cy", (line.y2) + "%");

            node.setAttribute("r", "8px");
            node.setAttribute("style", "fill:black");
            node.setAttribute("onmousedown",  "startMovePoint(this)");
            document.getElementById("crossingEditor").appendChild(node);
        });
    }
    
}

function draw() {

    while (document.getElementsByClassName("line").length>0) {
        let child = document.getElementsByClassName("line")[0];
        document.getElementById("canvas").removeChild(child);
        
    }

    while (document.getElementsByClassName("hoverRegister").length>0) {
        let child = document.getElementsByClassName("hoverRegister")[0];
        document.getElementById("hoverContainer").removeChild(child);
        
    }

    drawEditor();

    let columns = columnsconst[crossings.length];
    let rows = Math.floor(columns * Math.sqrt(2));
    let diff = (100 * (Math.sqrt(2) - 1 * rows / columns) / Math.sqrt(2)) / rows / 2;
    for (let i = 1; i < columns; i++) { //Draw vertical lines
        let x = 100 * i / columns;
        var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        node.setAttribute("class", "line");
        node.setAttribute("x1", x+ "%");
        node.setAttribute("x2", x+ "%");
        
        node.setAttribute("y1", "0%");
        node.setAttribute("y2", "100%");
        node.setAttribute("style", "stroke:black;stroke-width:1");
        document.getElementById("canvas").appendChild(node);
    }
    
    for (let i = 1; i < rows; i++) { //Draw horizontal lines
        let y = 100.0 * i / rows;
        var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        node.setAttribute("class", "line");
        node.setAttribute("x1", "0%");
        node.setAttribute("x2", "100%");
        
        node.setAttribute("y1", y + "%");
        node.setAttribute("y2", y + "%");
        node.setAttribute("style", "stroke:black;stroke-width:1");
        document.getElementById("canvas").appendChild(node);
    }

    for (let i = 0; i < crossings.length; i++) {
        let x = (i % columns) * 100 / columns;
        let y = Math.floor(i / columns) * 100 / rows;
        crossings[i].forEach(line => { //Draw all the black roads
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            node.setAttribute("class", "line");
            
            node.setAttribute("x1", (x + line.x1 / columns) + "%");
            node.setAttribute("x2", (x + line.x2 / columns) + "%");
            
            node.setAttribute("y1", (y + line.y1 / columns / (Math.sqrt(2)) + diff) + "%");
            node.setAttribute("y2", (y + line.y2 / columns / (Math.sqrt(2)) + diff) + "%");
            
            node.setAttribute("stroke-width", (line.width / columns * 0.8) + "%");
            node.setAttribute("style", "stroke:black;");
            document.getElementById("canvas").appendChild(node);
        });

        crossings[i].forEach(line => { //Draw the white roads
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            node.setAttribute("class", "line");

            node.setAttribute("x1", (x + line.x1 / columns - (line.x2-line.x1) / 100 / columns)  + "%");
            node.setAttribute("x2", (x + line.x2  / columns + (line.x2-line.x1) / 100 / columns) + "%");
            
            node.setAttribute("y1", (y + line.y1 / columns / (Math.sqrt(2)) + diff - (line.y2-line.y1) / 100 / rows) + "%");
            node.setAttribute("y2", (y + line.y2 / columns / (Math.sqrt(2)) + diff + (line.y2-line.y1) / 100 / rows) + "%");
            
            node.setAttribute("stroke-width", ((line.width - 2) / columns * 0.8) + "%");
            node.setAttribute("style", "stroke:white;");
            document.getElementById("canvas").appendChild(node);
        });


        node = document.createElement("div");
        node.setAttribute("index", i);
        node.setAttribute("class", "hoverRegister");
        //node.setAttribute("onclick", "addLine(this)");
        node.setAttribute("onmouseout", "stopHighlight(this)");
        node.setAttribute("onmouseover", "highlight(this)");
        node.setAttribute("onclick", "select(this)");
        node.setAttribute("style", "height: " + 100/rows + "%; width: " + 100/columns + "%; top:" + y + "%; left:" + x + "%;");
        document.getElementById("hoverContainer").appendChild(node);
    }

    let i = crossings.length;
    let x = (i % columns) * 100 / columns;
    let y = Math.floor(i / columns) * 100 / rows;
    node = document.createElement("div");
    node.setAttribute("index", i);
    node.setAttribute("class", "hoverRegister");
    //node.setAttribute("onclick", "addLine(this)");
    node.setAttribute("onmouseout", "stopHighlight(this)");
    node.setAttribute("onmouseover", "highlight(this)");
    node.setAttribute("onclick", "select(this)");
    node.setAttribute("style", "height: " + 100/rows + "%; width: " + 100/columns + "%; top:" + y + "%; left:" + x + "%;");
    document.getElementById("hoverContainer").appendChild(node);

    
}