var lines = [[1, 1], [1,1], [1,1]];
var height;

function on_load() {
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

function addLine(node) {
    let indices = node.getAttribute("index").split(" ");
    let i = parseInt(indices[0]);
    if (i < 17){
        let list;
        if (i < lines.length) {
            list = lines[i];
        } else {
            list = [0,0];
        }
        
        if (indices[1] === "r") {
            list[1]++;
            if (list[1] === 4) {list[1] = 0}
        } else {
            list[0]++;
            if (list[0] === 4) {list[0] = 0}
        }
        lines[i] = list;

        while (lines.length>1 & lines[lines.length-1][0] === 0 & lines[lines.length-1][1] === 0) {
            lines.pop();
        }
        draw();
    }
    
}

function draw() {

    let child = document.getElementById("circle");
    if (child) {
        document.getElementById("canvas").removeChild(child);
    }
    

    while (document.getElementsByClassName("line").length>0) {
        let child = document.getElementsByClassName("line")[0];
        document.getElementById("canvas").removeChild(child);
        
    }

    while (document.getElementsByClassName("hoverRegister").length>0) {
        let child = document.getElementsByClassName("hoverRegister")[0];
        document.getElementById("hoverContainer").removeChild(child);
        
    }

    //<circle id="çircle" cx="50%" cy="95%" r="8" stroke="black" stroke-width="3" fill="black"/>
    var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    node.setAttribute("class", "line");
    node.setAttribute("x1", "50%");
    node.setAttribute("x2", "50%");
    
    node.setAttribute("y1", "5%");
    node.setAttribute("y2", "95%");
    node.setAttribute("style", "stroke:black;stroke-width:2");
    document.getElementById("canvas").appendChild(node);

    node = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    node.setAttribute("id", "circle");
    node.setAttribute("cx", "50%");
    node.setAttribute("cy", "95%");
    
    node.setAttribute("r", "10");
    node.setAttribute("style", "fill:black;");
    document.getElementById("canvas").appendChild(node);
    
    for (let i = 0; i < lines.length; i++) {
        let y = 90-i*5;
        if (lines[i][0] === 1) {
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "40%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", y+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "l 1");
            node.setAttribute("class", "line " + i + " l");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);
        } else if (lines[i][0] === 2) {
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "40%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y+2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "l 1");
            node.setAttribute("class", "line " + i + " l");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);

            node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "40%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y-2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "l 2");
            node.setAttribute("class", "line " + i + " l");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);
        } else if (lines[i][0] === 3) {
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "40%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y+2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "l 1");
            node.setAttribute("class", "line " + i + " l");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);

            node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "40%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", y +"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "l 2");
            node.setAttribute("class", "line " + i + " l");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);

            node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "40%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y-2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "l 3");
            node.setAttribute("class", "line " + i + " l");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);
        }


        if (lines[i][1] === 1) {
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            
            node.setAttribute("class", "line");
            node.setAttribute("x1", "60%");
            node.setAttribute("x2", "50%");
            node.setAttribute("y1", y+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "r 1");
            node.setAttribute("class", "line " + i + " r");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);
        } else if (lines[i][1] === 2) {
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "60%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y+2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "r 1");
            node.setAttribute("class", "line " + i + " r");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);

            node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "60%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y-2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "r 2");
            node.setAttribute("class", "line " + i + " r");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);
        } else if (lines[i][1] === 3) {
            var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "60%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y+2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "r 1");
            node.setAttribute("class", "line " + i + " r");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);

            node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "60%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", y +"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "r 2");
            node.setAttribute("class", "line " + i + " r");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);

            node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        
            node.setAttribute("class", "line");
            node.setAttribute("x1", "60%");
            node.setAttribute("x2", "50%");
            
            node.setAttribute("y1", (y-2)+"%");
            node.setAttribute("y2", y+"%");
            node.setAttribute("id", "line " + i + "r 3");
            node.setAttribute("class", "line " + i + " r");
            node.setAttribute("style", "stroke:black;stroke-width:2");
            document.getElementById("canvas").appendChild(node);
        }

        var node = document.createElement("div");
        node.setAttribute("index", i + " l");
        node.setAttribute("class", "hoverRegister");
        node.setAttribute("onclick", "addLine(this)");
        node.setAttribute("onmouseout", "stopHighlight(this)");
        node.setAttribute("onmouseover", "highlight(this)");
        node.setAttribute("style", "top:" + (y - 2.5) + "%; right:50%;");
        document.getElementById("hoverContainer").appendChild(node);

        node = document.createElement("div");
        node.setAttribute("index", i + " r");
        node.setAttribute("class", "hoverRegister");
        node.setAttribute("onclick", "addLine(this)");
        node.setAttribute("onmouseout", "stopHighlight(this)");
        node.setAttribute("onmouseover", "highlight(this)");
        node.setAttribute("style", "top:" + (y - 2.5) + "%; left:50%;");
        document.getElementById("hoverContainer").appendChild(node);
        
    }
    if (lines.length < 17) {
        var node = document.createElement("div");
        node.setAttribute("index", lines.length + " l");
        node.setAttribute("class", "hoverRegister");
        node.setAttribute("onclick", "addLine(this)");
        node.setAttribute("onmouseout", "stopHighlight(this)");
        node.setAttribute("onmouseover", "highlight(this)");
        node.setAttribute("style", "top:" + (87.5 - lines.length*5) + "%; right:50%;");
        document.getElementById("hoverContainer").appendChild(node);

        node = document.createElement("div");
        node.setAttribute("index", lines.length + " r");
        node.setAttribute("class", "hoverRegister");
        node.setAttribute("onclick", "addLine(this)");
        node.setAttribute("onmouseout", "stopHighlight(this)");
        node.setAttribute("onmouseover", "highlight(this)");
        node.setAttribute("style", "top:" + (87.5 - lines.length*5) + "%; left:50%;");
        document.getElementById("hoverContainer").appendChild(node);
    }
        
}