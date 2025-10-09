import { useEffect, useState } from "react";

export type GameStatus = "loading" | "ready";

export const useGame = () => {
  const [status, setStatus] = useState<GameStatus>("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("ready");
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { status };
};

