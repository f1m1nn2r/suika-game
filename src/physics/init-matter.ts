// matter 세팅

import Matter from "matter-js";

interface InitMatterProps {
  canvas: HTMLCanvasElement | null;
  container: HTMLDivElement | null;
}

export function initMatter({ canvas, container }: InitMatterProps) {
  const { Engine, Render, Runner } = Matter;

  const engine = Engine.create();

  const render = Render.create({
    element: container,
    engine: engine,
    canvas,
    options: {
      wireframes: false,
      width: 700,
      height: 700,
      background: "#f7f4c8",
    },
  });

  const runner = Runner.create();

  Render.run(render);
  Runner.run(runner, engine);

  return { engine, render, runner };
}
