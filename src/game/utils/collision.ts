import type { ArcadeGroup, ArcadeSprite, GameObject, PhaserScene } from "../types";

export const setupPlayerBuildingCollision = (
  scene: PhaserScene,
  player: ArcadeSprite,
  buildings: ArcadeGroup,
  callback: (building: GameObject) => void
) => {
  scene.physics.add.overlap(player, buildings, (_player, building) => {
    callback(building as GameObject);
  });
};

