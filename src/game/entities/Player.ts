import type * as PhaserType from "phaser";
import type { CursorKeys, PhaserScene } from "../types";

const PLAYER_SPEED = 200;

export class Player {
  private sprite: PhaserType.Physics.Arcade.Sprite;
  private cursors?: CursorKeys;

  constructor(
    private scene: PhaserScene,
    Phaser: typeof PhaserType,
    x: number,
    y: number,
    cursors?: CursorKeys
  ) {
    this.sprite = new Phaser.Physics.Arcade.Sprite(scene, x, y, "player");
    scene.add.existing(this.sprite);
    scene.physics.add.existing(this.sprite);
    this.sprite.setCollideWorldBounds(true);
    this.cursors = cursors;
  }

  get body() {
    return this.sprite;
  }

  update(Phaser: typeof PhaserType) {
    if (!this.cursors) {
      return;
    }

    const velocity = new Phaser.Math.Vector2(0, 0);

    if (this.cursors.left?.isDown) {
      velocity.x = -1;
    } else if (this.cursors.right?.isDown) {
      velocity.x = 1;
    }

    if (this.cursors.up?.isDown) {
      velocity.y = -1;
    } else if (this.cursors.down?.isDown) {
      velocity.y = 1;
    }

    if (velocity.lengthSq() > 0) {
      velocity.normalize().scale(PLAYER_SPEED);
    }

    this.sprite.body.setVelocity(velocity.x, velocity.y);
  }

  destroy() {
    this.sprite.destroy();
  }
}

