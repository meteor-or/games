import React from "react";
import Nav from "./components/Nav";
import Gameframe from "./components/Gameframe";

function App() {
  return (
    <div className="flex justify-center  w-screen h-screen bg-slate-300 p-4">
      <div className="flex flex-col w-96">
        <header className="basis-1/8">
          <Nav />
        </header>
        <main className="basis-3/4">
          <Gameframe />
        </main>
        <footer className="basis-1/8 h-f">copyright.</footer>
      </div>
    </div>
  );
}

export default App;
