import type * as PhaserType from "phaser";
import type { PhaserScene } from "../types";

export class Building {
  public readonly sprite: PhaserType.Physics.Arcade.Sprite;

  constructor(
    scene: PhaserScene,
    Phaser: typeof PhaserType,
    x: number,
    y: number,
    texture: string,
    public readonly targetUrl: string
  ) {
    this.sprite = new Phaser.Physics.Arcade.Sprite(scene, x, y, texture);
    scene.add.existing(this.sprite);
    scene.physics.add.existing(this.sprite, true);
  }

  destroy() {
    this.sprite.destroy();
  }
}

