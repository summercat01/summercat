import type * as PhaserType from "phaser";

const createPreloadScene = (Phaser: typeof PhaserType) => {
  return class PreloadScene extends Phaser.Scene {
    constructor() {
      super("PreloadScene");
    }

    preload() {
      // TODO: Add asset loading here (spritesheets, tilemaps, etc.)
    }

    create() {
      this.scene.start("MainScene");
    }
  };
};

export default createPreloadScene;

