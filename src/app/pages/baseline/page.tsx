"use client";
import {useEffect} from "react";
import initializePage from "../../scripts/main";

import * as c from "../../components/index";
import * as eras from "../../eras/index";

export default function Main() {
  useEffect(() => { 
    initializePage();
  }, []);
  return (
    <main id="mainContent">
      <c.Menu />
      <c.Timeline>
        <li className="text-5xl font-extrabold"><h1 className="text-purple-900!">BASELINE</h1></li>
        <eras.BASEPre1960s />
        <eras.BASEFrom1960to1999 />
        <eras.BASEPost1999 />
      </c.Timeline>
    </main>  
  );
}
