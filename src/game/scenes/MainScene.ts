import type * as PhaserType from "phaser";
import type { PhaserScene } from "../types";
import { Player } from "../entities/Player";
import { createCursorKeys } from "../utils/controls";

const createMainScene = (Phaser: typeof PhaserType) => {
  return class MainScene extends Phaser.Scene {
    private player?: Player;

    constructor() {
      super("MainScene");
    }

    create() {
      const scene = this as PhaserScene;
      const cursors = createCursorKeys(scene);
      this.player = new Player(scene, Phaser, 640, 360, cursors);
    }

    update() {
      this.player?.update(Phaser);
    }
  };
};

export default createMainScene;

