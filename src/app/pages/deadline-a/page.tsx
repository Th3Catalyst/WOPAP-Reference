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
        <li className="text-5xl font-extrabold"><h1 className="text-orange-400!">DEADLINE A</h1></li>
        <eras.AAll />
      </c.Timeline>
    </main>  
  );
}
