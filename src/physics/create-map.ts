// 맵 생성

import Matter from "matter-js";

interface CreateMapProps {
  engine: Matter.engine;
  width: number;
  height: number;
}

export function createMap({ engine, width, height }: CreateMapProps) {
  const { Bodies, World } = Matter;

  const options = {
    isStatic: true,
    render: { fillStyle: "#e6b143" },
  };

  const leftWall = Bodies.rectangle(10, height / 2, 20, height, {
    ...options,
  });
  const rightWall = Bodies.rectangle(width - 10, height / 2, 20, height, {
    ...options,
  });
  const ground = Bodies.rectangle(width / 2, height - 10, width, 20, {
    ...options,
  });

  World.add(engine.world, [leftWall, rightWall, ground]);
}
