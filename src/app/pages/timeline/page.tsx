"use client";
import {useEffect} from "react";
import initializePage from "../../scripts/main";

import * as c from "../../components/index";

export default function Main() {
  useEffect(() => { 
    const URLParams = new URLSearchParams(window.location.search)
    const theme = URLParams.get('theme')
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
    <main id="mainContent" className="grid place-content-center h-screen">
      <c.Settings pos={[20,20]} />
      <div className="grid justify-items-center">
        <p className="text-9xl text-[#BB0011] m-[0.5em]">WOPAP REFERENCE</p>
        <button className="border-black border-4 rounded-4xl text-4xl p-5 bg-white cursor-pointer decoration-0 text-black" onClick={() => {
            window.location.assign(`pages/timeline?${(new URLSearchParams(window.location.search)).toString()}`)
        }}>Timeline</button>
      </div>
    </main>  
  );
}