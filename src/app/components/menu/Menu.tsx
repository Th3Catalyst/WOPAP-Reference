import * as c from "../index";

import wordSearch from "../../scripts/wordSearch";
import tagSearch from "../../scripts/tagSearch";

export default function Menu() {
    return(
        <>
          <c.CollapseMenu pos={[20,20]} image="../../search.png">
          <h3 className="font-extrabold text-1xl">Search</h3>
          <br />
          <input type="text" placeholder="Search..." id="search" onKeyUp={() => {wordSearch()}} />
          <div id="searchTagCon">
                <input type="text" placeholder="Tag Search" id="searchTag" onKeyUp={() => {wordSearch(document.getElementById('tagList')?.querySelectorAll('li'), true); tagSearch();}} />
          </div>
          <ul id ="tagList"><c.PopulateTags /></ul>
          </c.CollapseMenu>
          <c.Settings pos={[20,70]} />
          <button className="fixed w-10 h-10  border-[3px] border-solid border-[#BB0011] rounded-[4] cursor-pointer z-1000 bg-cover bg-center bg-no-repeat top-[120px] right-5" style={{
            backgroundImage: `url('../../home.png')`
          }} onClick={() => {
            window.location.assign(`/?${(new URLSearchParams(window.location.search)).toString()}`);
          }} /> 
        </>
    )
}