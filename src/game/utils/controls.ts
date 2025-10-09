import type { CursorKeys, PhaserScene } from "../types";

export const createCursorKeys = (scene: PhaserScene): CursorKeys | undefined => {
  return scene.input.keyboard?.createCursorKeys();
};

