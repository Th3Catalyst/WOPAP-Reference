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
    
    <main id="mainContent">
      <c.CollapseMenu pos={[20,20]} image="search.png">
        <h3 className="font-extrabold text-1xl">Search</h3>
        <input type="text" placeholder="Search..." id="search" onKeyUp={() => {wordSearch()}} />
        <div id="searchTagCon">
          <input type="text" placeholder="Tag Search" id="searchTag" onKeyUp={() => {wordSearch(document.getElementById('tagList')?.querySelectorAll('li'), true); tagSearch();}} />
        </div>
        <ul id ="tagList"><c.PopulateTags /></ul>
      </c.CollapseMenu>
      <c.CollapseMenu pos={[20,70]} image="settings.png">
        <h3 className="font-extrabold text-1xl">Settings</h3>
        <span><input type="checkbox" id="darkModeBox" onClick={()=> {
          document.getElementById("mainContent")?.classList.toggle("darkMode");
        }} /> <label htmlFor="darkModeBox">Dark Mode</label></span>
      </c.CollapseMenu>
      <c.Timeline>
        <eras.Pre1960s />
        <eras.From1960to1999 />
        <eras.Post1999 />
      </c.Timeline>
    </main>  
  );
}
