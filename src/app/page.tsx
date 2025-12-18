"use client";
import {useEffect} from "react";
import Collapsible from "./scripts/collapsible";
import initializeSearch from "./scripts/main";

import * as c from "./components/index";
import * as eras from "./eras/index";

export default function Main() {
  useEffect(() => { 
    Collapsible();
    initializeSearch();
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
