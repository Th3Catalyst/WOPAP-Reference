"use client";
import * as c from "./components/index";

export default function Main() {
  return (
    <main id="mainContent" className="grid place-content-center h-screen">
      <div className="grid justify-items-center">
        <p className="text-[8vw] text-[#BB0011] mx-[0.5em]">THE WOPAP ARCHIVE</p>
        <button className="border-black border-4 rounded-4xl text-4xl p-5 bg-white cursor-pointer decoration-0 text-black m-0.5" onClick={() => {
            window.location.assign(`pages/timeline?${(new URLSearchParams(window.location.search)).toString()}`)
        }}>Timeline</button>
        <button className="border-black border-4 rounded-4xl text-4xl p-5 bg-white cursor-pointer decoration-0 text-black m-0.5" onClick={() => {
            window.location.assign(`pages/characters?${(new URLSearchParams(window.location.search)).toString()}`)
        }}>Character List</button>
      </div>
    </main>  
  );
}