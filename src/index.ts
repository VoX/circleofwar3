import { SinglePlayerGame } from "./singlePlayerGame";

const game = new SinglePlayerGame();

game.start().then(() => {
  game.goToScene("demo");
});
