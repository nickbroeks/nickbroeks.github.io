class svgObject {
    
    constructor() {
    }
    
    draw() {

    }
}

class svgLine {
    
    constructor(point1, point2, width) {
        this.p1 = point1;
        this.p2 = point2;
        this.width = width;
    }

    draw(className, idName, parentId) {
        var node = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        node.setAttribute("class", className);
        node.setAttribute("x1", (this.p1.x) + "%");
        node.setAttribute("x2", (this.p2.x) + "%");
        
        node.setAttribute("y1", (this.p1.x) + "%");
        node.setAttribute("y2", (this.p2.y) + "%");
        node.setAttribute("stroke-width", (this.width) + "%");
        return node;
    }
    
}