import type { ArcadeGroup, ArcadeSprite, PhaserScene } from "../types";

export const setupPlayerBuildingCollision = (
  scene: PhaserScene,
  player: ArcadeSprite,
  buildings: ArcadeGroup,
  callback: (building: Phaser.GameObjects.GameObject) => void
) => {
  scene.physics.add.overlap(player, buildings, (_player, building) => {
    callback(building);
  });
};

