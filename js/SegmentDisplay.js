function SegmentDisplay(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.segments = [];
    this.color = "#000";
    this.thickness = 2;
}

SegmentDisplay.prototype.init = function() {
    this.generateSevenSegment();
};

SegmentDisplay.prototype.draw = function () {
    segments.forEach(function (segment) {
        segment.draw();
    });
};

SegmentDisplay.prototype.generateSevenSegment = function () {
    this.segments.push(new Segment(this.context, 0, 0, 1, 0));
    this.segments.push(new Segment(this.context, 1, 0, 1, 1));
    this.segments.push(new Segment(this.context, 1, 1, 1, 2));
    this.segments.push(new Segment(this.context, 0, 2, 1, 2));
    this.segments.push(new Segment(this.context, 0, 1, 0, 2));
    this.segments.push(new Segment(this.context, 0, 0, 0, 1));
    this.segments.push(new Segment(this.context, 0, 1, 1, 0));
};