import * as ex from 'excalibur';

export class Player extends ex.Actor {
  speed: number;
  constructor() {
    super();
    this.setWidth(25);
    this.setHeight(25);
    this.x = 150;
    this.y = 150;
    this.color = new ex.Color(255, 255, 255);
    this.speed = 0.1;
  }

  public update(engine: ex.Engine, delta: number) {
    if (engine.input.keyboard.wasPressed(ex.Input.Keys.Shift)) {
      this.speed = 0.5;
    }
    if (engine.input.keyboard.wasReleased(ex.Input.Keys.Shift)) {
      this.speed = 0.1;
    }


    super.update(engine, delta);
    if (engine.input.keyboard.isHeld(ex.Input.Keys.W)) {
      this.y = delta * -this.speed + this.y;
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.S)) {
      this.y = delta * this.speed + this.y;
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.A)) {
      this.x = delta * -this.speed + this.x;
    }
    if (engine.input.keyboard.isHeld(ex.Input.Keys.D)) {
      this.x = delta * this.speed + this.x;
    }
  }
}
