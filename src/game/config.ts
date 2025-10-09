export type GameConfig = import("phaser").Types.Core.GameConfig;

export const createGameConfig = async (): Promise<GameConfig> => {
  const Phaser = await import("phaser");
  const PreloadSceneFactory = (await import("./scenes/PreloadScene")).default;
  const MainSceneFactory = (await import("./scenes/MainScene")).default;
  const UISceneFactory = (await import("./scenes/UIScene")).default;

  const PreloadScene = PreloadSceneFactory(Phaser);
  const MainScene = MainSceneFactory(Phaser);
  const UIScene = UISceneFactory(Phaser);

  const config: GameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: "game-container",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 },
        debug: process.env.NODE_ENV === "development",
      },
    },
    scene: [PreloadScene, MainScene, UIScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  };

  return config;
};

