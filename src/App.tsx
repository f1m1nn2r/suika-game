import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 700;
    canvas.height = 700;

    console.log(canvas.getBoundingClientRect());

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 바닥
    ctx.fillStyle = "#228b22";
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

    // 양쪽 벽
    ctx.fillStyle = "#A52A2A";
    ctx.fillRect(0, 0, 20, canvas.height);

    ctx.fillStyle = "#A52A2A";
    ctx.fillRect(canvas.width - 20, 0, 20, canvas.height);
  }, []);

  return (
    <main className="main">
      <section>
        <canvas ref={canvasRef} className="suika-canvas" id="canvas"></canvas>
      </section>
    </main>
  );
}

export default App;
