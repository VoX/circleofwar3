import * as ex from "excalibur";
import { Player } from "../actors/player/player";

export class DemoScene extends ex.Scene {
  constructor() {
    super();
  }

  // tslint:disable-next-line:no-empty
  public onInitialize(engine: ex.Engine) {
    const player = new Player();
    this.add(player);
  }
  // tslint:disable-next-line:no-empty
  public onActivate() { }
  // tslint:disable-next-line:no-empty
  public onDeactivate() { }
}
