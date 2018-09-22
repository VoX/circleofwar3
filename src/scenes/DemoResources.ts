import * as ex from "excalibur";
import * as sword from "../images/sword.png";
import { IMap } from "../IMap";

const DemoResources: IMap<ex.Texture> = {
    Sword: new ex.Texture(sword),
};

export { DemoResources };
