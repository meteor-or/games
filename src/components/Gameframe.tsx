import React from "react";
import Mainpanel from "./Mainpanel";

function Gameframe() {
  return (
    <ul className="flex flex-col bg-yellow-500 border-2 border-black rounded-xl p-4 py-8 h-full ">
      <li className="basis-1/2 rounded-xl text-white p-8 pb-12 bg-stone-900 max-h-80">
        <div className=" w-full h-full bg-stone-400">
          <Mainpanel />
        </div>
        <h1>GAMEBOY</h1>
      </li>
      <li className="basis-1/2 mt-8 p-4">
        <section className="flex flex-col items-center">
          <h2 className="flex w-fit border bg-yellow-400 rounded-xl px-4 mb-4">
            meteor
          </h2>
          <div
            id="controler"
            className="w-full text-white flex justify-between"
          >
            <ul className="grid w-24 h-24 grid-cols-3 grid-rows-3 ">
              <li className=" bg-black flex items-center justify-center w-full h-full  col-start-2">
                {"↑"}
              </li>
              <li className=" bg-black flex items-center justify-center  w-full h-full  col-start-1">
                {"←"}
              </li>
              <li className=" bg-black w-full h-full col-start-2"></li>
              <li className=" bg-black flex items-center justify-center w-full h-full  col-start-3">
                {"→"}
              </li>
              <li className=" bg-black flex items-center justify-center w-full h-full  col-start-2">
                {"↓"}
              </li>
            </ul>
            <ul className=" grid w-24 h-24 grid-cols-2 grid-rows-2">
              <li className="w-full h-full rounded-full bg-black flex items-center justify-center">
                A
              </li>
              <li className="w-full h-full rounded-full bg-black flex items-center justify-center row-start-2 col-start-2">
                B
              </li>
            </ul>
          </div>
        </section>
      </li>
    </ul>
  );
}

export default Gameframe;
