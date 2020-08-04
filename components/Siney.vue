<template>
  <canvas id="siney"></canvas>
</template>

<script>
//import { CanvasSpace, Color, Geom, Curve, Pt, Group, Line } from 'pts'

export default {
  mounted() {
    const { CanvasSpace, Color, Geom, Curve, Pt, Group, Line } = require('pts')

    var space = new CanvasSpace('#siney').setup({
      retina: true,
      bgcolor: '#fdffff',
      resize: true
    })
    var form = space.getForm()
    var peaks = 8

    // animation
    space.add(time => {
      // create points along a line
      let c = space.center.clone()
      let g = Group.fromArray([
        [-space.width / peaks, c.y],
        [space.width + space.width / peaks, c.y]
      ])
      let linepts = Line.subpoints(g, peaks)

      g = g.slice(0, 1).concat(linepts, g.slice(-1))

      // interpolate with time to make them move
      let pts = g.map((p, i) => {
        let sinSeed = time / 24 + (i + (i % 10)) * 100
        let sinHeight = (Math.sin(sinSeed / 200) * space.height) / 2
        let yPos = Math.sin(sinSeed / 100) * sinHeight + space.height / 2
        return Geom.interpolate(p, new Pt(p.x, yPos))
      })

      // start/end points for proper fill
      pts.push(new Pt(space.width, space.height))
      pts = [new Pt(0, space.height)].concat(pts)

      // draw/fill the cardinal curve
      let curve = Curve.cardinal(pts, 50, (Math.sin(time / 2500) + 1) / 4)
      form.fillOnly('#d3f0f5').polygon(curve)
    })

    // start
    space
      .play()
      .bindMouse()
      .bindTouch()
  }
}
</script>

<style></style>
