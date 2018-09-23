import { Actor, Color, Engine, Input } from "excalibur";
import { DemoResources } from "../../scenes/demoResources";

export class Player extends Actor {
    public speed: number;

    constructor() {
        super();
        this.setWidth(25);
        this.setHeight(25);
        this.x = 150;
        this.y = 150;
        this.color = new Color(255, 255, 255);
        this.speed = 0.1;
        this.addDrawing(DemoResources.Fighter);
    }

    public update(engine: Engine, delta: number) {
        super.update(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Shift)) {
            this.speed = 0.5;
        }
        if (engine.input.keyboard.wasReleased(Input.Keys.Shift)) {
            this.speed = 0.1;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.W)) {
            this.y = delta * -this.speed + this.y;
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S)) {
            this.y = delta * this.speed + this.y;
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A)) {
            this.x = delta * -this.speed + this.x;
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D)) {
            this.x = delta * this.speed + this.x;
        }
    }
}
