import { Engine, Scene } from "excalibur";
import { Player } from "../actors/ships/player";

export class DemoScene extends Scene {
  constructor() {
    super();
  }

  // tslint:disable-next-line:no-empty
  public onInitialize(engine: Engine) {
    const player = new Player();
    this.add(player);
    this.camera.strategy.radiusAroundActor(player, 50);
  }
  // tslint:disable-next-line:no-empty
  public onActivate() { }
  // tslint:disable-next-line:no-empty
  public onDeactivate() { }
}
