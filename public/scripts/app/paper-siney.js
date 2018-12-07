var width, height, center
var points = 8
var smooth = true
var path = new Path()
var mousePos = view.center / 2
//var pathHeight = mousePos.y;
var pathHeight = 80
path.fillColor = {
  gradient: {
    stops: ['#f0eded', '#edcecf', '#b0e6ef']
  },
  origin: new Point(0, view.size.height * 0.85),
  destination: new Point(0, view.size.height * 0.35)
}
initializePath()

function initializePath() {
  center = view.center
  width = view.size.width
  height = view.size.height / 2
  path.segments = []
  path.add(view.bounds.bottomLeft)
  path.add(new Point(view.bounds.bottomLeft.x, view.bounds.bottomLeft.y - 200))
  for (var i = 1; i < points; i++) {
    var point = new Point((width / points) * i, center.y)
    path.add(point)
  }
  path.add(
    new Point(view.bounds.bottomRight.x, view.bounds.bottomRight.y - 200)
  )
  path.add(view.bounds.bottomRight)
  //path.fullySelected = true;
}

function onFrame(event) {
  //pathHeight += (center.y - mousePos.y - pathHeight) / 10;
  //pathHeight += (center.y - pathHeight) / 10;
  for (var i = 2; i < points; i++) {
    var sinSeed = event.count + (i + (i % 10)) * 100
    var sinHeight = Math.sin(sinSeed / 200) * pathHeight
    var yPos = Math.sin(sinSeed / 100) * sinHeight + height
    path.segments[i].point.y = yPos
  }
  if (smooth) path.smooth({ type: 'continuous' })
}

function onMouseMove(event) {
  mousePos = event.point
}

function onMouseDown(event) {
  smooth = !smooth
  if (!smooth) {
    // If smooth has been turned off, we need to reset
    // the handles of the path:
    for (var i = 0, l = path.segments.length; i < l; i++) {
      var segment = path.segments[i]
      segment.handleIn = segment.handleOut = null
    }
  }
}

// Reposition the path whenever the window is resized:
function onResize(event) {
  initializePath()
}
