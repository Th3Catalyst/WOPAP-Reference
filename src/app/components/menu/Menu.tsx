import * as c from "../index";

import wordSearch from "../../scripts/wordSearch";
import tagSearch from "../../scripts/tagSearch";

export default function Menu() {
    return(
        <>
          <c.CollapseMenu pos={[20,20]} image="search.png">
          <h3 className="font-extrabold text-1xl">Search</h3>
          <br />
          <input type="text" placeholder="Search..." id="search" onKeyUp={() => {wordSearch()}} />
          <div id="searchTagCon">
                <input type="text" placeholder="Tag Search" id="searchTag" onKeyUp={() => {wordSearch(document.getElementById('tagList')?.querySelectorAll('li'), true); tagSearch();}} />
          </div>
          <ul id ="tagList"><c.PopulateTags /></ul>
          </c.CollapseMenu>
          <c.CollapseMenu pos={[20,70]} image="settings.png">
          <h3 className="font-extrabold text-1xl">Settings</h3>
          <br />
          <span><input type="checkbox" id="darkModeBox" onClick={() => {
                document.documentElement.style.setProperty('--primary-color', (document.getElementById('darkModeBox') as HTMLInputElement)!.checked ? 'black' : 'white');
                document.documentElement.style.setProperty('--secondary-color', (document.getElementById('darkModeBox') as HTMLInputElement)!.checked ? '#888' : 'black');
          }} /> <label htmlFor="darkModeBox">Dark Mode</label></span>
          </c.CollapseMenu>
        </>
    )
}