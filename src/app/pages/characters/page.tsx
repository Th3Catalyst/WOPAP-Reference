"use client";
import {useEffect} from "react";
import Collapsible from "../../scripts/collapsible";
import initializeSearch from "../../scripts/main";

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

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
    Collapsible();
    initializeSearch();

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
    <main id="mainContent" style={{backgroundColor: themeColor}}>
    </main>  
  );
}
