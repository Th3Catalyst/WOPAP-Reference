"use client";
import {useEffect} from "react";
import Collapsible from "../../scripts/collapsible";
import initializeSearch from "../../scripts/main";

import * as c from "../../components/index";
import * as eras from "../../eras/index";

export default function Main() {
  useEffect(() => { 
    Collapsible();
    initializeSearch();

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
      <c.Menu />
      <c.Timeline>
        <eras.Pre1960s />
        <eras.From1960to1999 />
        <eras.Post1999 />
      </c.Timeline>
    </main>  
  );
}
