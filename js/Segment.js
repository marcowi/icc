function Segment(context, x1, y1, x2, y2) {
    this.context = context;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.active = false;
}

Segment.prototype.draw = function () {

    if (this.active) {
        //Draw segment from x1,y1 to x2,y2 to given context
    }

};
