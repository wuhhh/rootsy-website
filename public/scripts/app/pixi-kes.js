class Kes {

  // construct
  constructor(w, h) {

    this.app = new PIXI.Application(w, h, { transparent: true, sharedTicker: true });
    $('header')[0].appendChild( this.app.view );

    this.ready();

  }


  // delegate drawing tasks
  ready() {

    let ox = 200;
    let oy = 300;
    let w  = 1;
    let h  = 1;

    let sprite = this.getVideoSprite(ox, oy, w, h);

    /*this.app.stage.filters = [
      new PIXI.filters.DotFilter(0.2, 5),
    ];*/

    this.app.stage.addChild( sprite );

  }


  // get a video sprite of specified w/h and offset
  getVideoSprite(w, h, offx, offy) {

    let texture = PIXI.Texture.fromVideo( $('#kes')[0] );
    let sprite = new PIXI.Sprite( texture );

    // create a new sprite using the video texture*/
    return sprite;

  }

}


// Initialise on domready
$(function() {

  var kes = new Kes( 706, 550 );

});
