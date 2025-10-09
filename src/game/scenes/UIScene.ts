import type * as PhaserType from "phaser";

const createUIScene = (Phaser: typeof PhaserType) => {
  return class UIScene extends Phaser.Scene {
    constructor() {
      super("UIScene");
    }

    create() {
      const text = this.add.text(16, 16, "UI Layer", {
        fontSize: "18px",
        color: "#ffffff",
      });
      text.setScrollFactor(0);
    }
  };
};

export default createUIScene;

