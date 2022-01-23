import React from "react";
import Nav from "./components/Nav";
import Gameframe from "./components/Gameframe";

function App() {
  return (
    <div className="flex justify-center w-screen h-screen bg-stone-400 py-12">
      <div className="flex drop-shadow-2xl flex-col w-96">
        <header className="basis-1/12">
          <Nav />
        </header>
        <main className="basis-11/12">
          <Gameframe />
        </main>
      </div>
    </div>
  );
}

export default App;
