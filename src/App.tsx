import "./App.css";

function App() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  return (
    <main className="main">
      <section>
        <canvas className="suika-canvas" id="canvas">
          <div className="wall left-wall"></div>
          <div className="wall right-wall"></div>
          <div className="ground"></div>
        </canvas>
      </section>
    </main>
  );
}

export default App;
