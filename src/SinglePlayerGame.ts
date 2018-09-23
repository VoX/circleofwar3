import { CollisionResolutionStrategy, Color, DisplayMode, Engine, Loader, Physics } from "excalibur";
import { DemoResources } from "./scenes/demoResources";
import { DemoScene } from "./scenes/demoScene";

export class SinglePlayerGame extends Engine {
    constructor() {
        super({ width: 800, height: 600, displayMode: DisplayMode.FullScreen });
    }

    public start() {
        this.initDemoScene();
        this.backgroundColor = Color.Black;
        Physics.allowRigidBodyRotation = true;
        Physics.checkForFastBodies = true;
        Physics.collisionResolutionStrategy = CollisionResolutionStrategy.RigidBody;
        Physics.useRigidBodyPhysics();
        return super.start(this.initLoader());
    }

    private initDemoScene() {
        const demo = new DemoScene();
        this.add("demo", demo);
    }

    private initLoader(): Loader {
        const loader = new Loader();
        for (const key in DemoResources) {
            if (DemoResources.hasOwnProperty(key)) {
                loader.addResource(DemoResources[key]);
            }
        }
        return loader;
    }
}
