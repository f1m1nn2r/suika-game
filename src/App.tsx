import Matter from "matter-js";
import "./App.css";
import { useEffect, useRef } from "react";
import { createMap } from "./physics/create-map";
import { initMatter } from "./physics/init-matter";
import { spawnFruit } from "./game/spawn-fruit";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = 700;

    const { engine, render } = initMatter({
      canvas,
      container: containerRef.current,
    });

    canvas.addEventListener("mousedown", (e) => {
      const rect = canvas.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spawnFruit({ engine, x, y });
    });

    createMap({
      engine,
      width: 700,
      height: 700,
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <canvas ref={canvasRef} className="suika-canvas" />
    </div>
  );
}

export default App;
