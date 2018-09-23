import { Texture } from "excalibur";
import * as fighter_sm from "../images/fighter-sm.png";
import { IMap } from "../map";

const DemoResources: IMap<ex.Texture> = {
    Fighter: new Texture(fighter_sm),
};

export { DemoResources };
