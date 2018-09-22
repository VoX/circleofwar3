import { SinglePlayerGame } from "./SinglePlayerGame";

const game = new SinglePlayerGame();

game.start().then(() => {
  game.goToScene("demo");
});
