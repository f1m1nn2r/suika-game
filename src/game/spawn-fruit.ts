import Matter from "matter-js";

interface SpawnFruitProps {
  engine: Matter.engine;
  x: number;
  y: number;
}

export function spawnFruit({ engine, x, y }: SpawnFruitProps) {
  const { Bodies, World } = Matter;

  const fruit = Bodies.circle(x, y, 20, {
    restitution: 0.4,
    friction: 0.1,
    label: "fruit",
    render: {
      fillStyle: "#ff6b6b",
    },
  });

  World.add(engine.world, fruit);
}
