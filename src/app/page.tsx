"use client";
import {useEffect} from "react";
import Collapsible from "./scripts/collapsible";
import wordSearch from "./scripts/wordSearch";
import tagSearch from "./scripts/tagSearch";
import initializeSearch from "./scripts/main";

import * as c from "./components/index";
import * as eras from "./eras/index";

export default function Main() {
  useEffect(() => { 
    Collapsible();
    initializeSearch();
  }, []);
  return (
    
    <main>
      <button id="searchMenuB" onClick={() => {
        document.getElementById("searchContainer")?.classList.toggle("show");
        console.log("clicked"
      );}} /> 
      <div id="searchContainer">
        <input type="text" placeholder="Search..." id="search" onKeyUp={() => {wordSearch()}} />
        <div id="searchTagCon">
          <input type="text" placeholder="Tag Search" id="searchTag" onKeyUp={() => {wordSearch(document.getElementById('tagList')?.querySelectorAll('li'), true); tagSearch();}} />
        </div>
        <ul id ="tagList"><c.PopulateTags /></ul>
      </div>
      <c.Timeline>
        <eras.Pre1960s />
        <eras.From1960to1999 />
        <eras.Post1999 />
      </c.Timeline>
    </main>  
  );
}
