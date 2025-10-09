"use client";

import { useEffect, useRef } from "react";

type PhaserGame = import("phaser").Game;

export default function GameCanvas() {
  const gameRef = useRef<PhaserGame | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || gameRef.current) {
      return;
    }

    let phaserGame: PhaserGame | null = null;
    let cancelled = false;

    const init = async () => {
      const Phaser = await import("phaser");
      const { createGameConfig } = await import("@/game/config");
      const gameConfig = await createGameConfig();

      if (cancelled) return;

      phaserGame = new Phaser.Game(gameConfig);
      gameRef.current = phaserGame;
    };

    init();

    return () => {
      cancelled = true;
      phaserGame?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="game-container" className="h-full w-full" />;
}

