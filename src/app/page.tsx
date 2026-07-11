"use client";
import {useEffect} from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

import * as c from "./components/index";

export default function Main() {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const theme = searchParams.get('theme');
  let themeColor: string = "";
  if (theme == "dark") {
    themeColor = "black";
  } else if (theme == 'light') {
    themeColor = "white";
  }
  useEffect(() => { 
    if (theme == "dark") {
        document.documentElement.style.setProperty('--primary-color', "black");
        document.documentElement.style.setProperty('--secondary-color', '#888');
        (document.getElementById('darkModeBox') as HTMLInputElement)!.checked = true;
    } else if (theme == 'light') {
        document.documentElement.style.setProperty('--primary-color', "white");
        document.documentElement.style.setProperty('--secondary-color', 'black');
        (document.getElementById('darkModeBox') as HTMLInputElement)!.checked = false;
    }
  }, []);
  return (
    <main id="mainContent" className="grid place-content-center h-screen" style={{backgroundColor: themeColor}}>
      <c.Settings pos={[20,20]} />
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