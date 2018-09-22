import ex = require("excalibur");
import { DemoResources } from "./scenes/DemoResources";
import { DemoScene } from "./scenes/DemoScene";

export class SinglePlayerGame extends ex.Engine {
    constructor() {
        super({ width: 800, height: 600, displayMode: ex.DisplayMode.FullScreen });
    }

    public start() {
        this.initDemoScene();
        return super.start(this.initLoader());
    }

    private initDemoScene() {
        const demo = new DemoScene();
        this.add("demo", demo);
    }

    private initLoader(): ex.Loader {
        const loader = new ex.Loader();
        for (const key in DemoResources) {
            if (DemoResources.hasOwnProperty(key)) {
                loader.addResource(DemoResources[key]);
            }
        }
        return loader;
    }
}
