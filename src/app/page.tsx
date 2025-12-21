"use client";
import {useEffect} from "react";

import * as c from "./components/index";

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
    <main id="mainContent">
      <c.Settings pos={[20,20]} />
      <a onClick={() => {
        window.location.assign(`pages/timeline?${(new URLSearchParams(window.location.search)).toString()}`)
      }}>Timeline</a>
    </main>  
  );
}