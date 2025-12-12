"use client";
import {useEffect} from "react";
import Collapsible from "./scripts/collapsible";
import wordSearch from "./scripts/wordSearch";
import tagSearch from "./scripts/tagSearch";
import initializeSearch from "./scripts/main";

import * as c from "./components/index";

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
        
      </div>
      <c.Timeline>
        <c.TimelineCollapsible year="1200">
          <c.TimelineYear year="12??" />
          <c.TimelineEvent date="????" year="12??" tags={["schriftsteller","giftschreiber","the brothers","cryptomancy","thilo zwist"]}>
            The schriftsteller, a cryptomantic cult that follows The Unyielding, <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">is founded</a>. Sometime later, the giftschreiber cult forms out of schriftsteller defects.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1620">
          <c.TimelineYear year="1622" />
          <c.TimelineEvent date="APR 1" year="1622" tags={["thilo zwist"]}>
            PoI-382 (<a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">Thilo Zwist</a>) born in Amstetten, Austria.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1640">
          <c.TimelineYear year="1644" />
          <c.TimelineEvent date="????" year="1644" tags={["schriftsteller", "cryptomancy"]}>
            The Bavarian army enlists schriftsteller in the <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">creation of weaponized memes</a> for use in the Thirty Years War.
          </c.TimelineEvent>
          <c.TimelineYear year="1645" />
          <c.TimelineEvent date="MAY 2" year="1645" tags={["schriftsteller"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">Schriftsteller slaughtered</a> by General Franz von Mercy.
          </c.TimelineEvent>
          <c.TimelineEvent date="AUG. 3" year="1645" tags={["thilo zwist", "schriftsteller"]}>
            PoI-382 (<a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">Thilo Zwist</a>) kills von Mercy in the Battle of Nordlingen.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1890">
          <c.TimelineYear year="1897" />
          <c.TimelineEvent date="MAY 17" year="1897" tags={["wynn rydderech", "acroamatic abatement"]}>
            W. Rydderech <a href="https://scp-wiki.wikidot.com/acroamatic-abatement" target="_blank">destroys a sample of anomalous plagioclase,</a> beginning his intrest into what will later become acroamatic abatement.
          </c.TimelineEvent>
          <c.TimelineYear year="1898" />
          <c.TimelineEvent date="????" year="1898" tags={["scp-5238", "memetics"]}>
            Occultist Morgan Robertson publishes <a href="https://scp-wiki.wikidot.com/scp-5238" target="_blank"><i>The Wreck of the Titan: Or, Futility</i></a>. This begins a career of memetic attacks against the stability of worldwide order.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1900">
          <c.TimelineYear year="1905" />
          <c.TimelineEvent date="SEP. 13" year="1905" tags={["vivian scout", "wynn rydderech"]}>
            <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">V.L. Scout and W. Rydderech meet</a> at Cardiff University, Wales.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1910">
          <c.TimelineYear year="1910" />
          <c.TimelineEvent date="????" year="1910" tags={["wynn rydderech"]}>
            Wynn Rydderech obtains a <a href="https://scp-wiki.wikidot.com/acroamatic-abatement" target="_blank">doctorate in toxicology</a> at Cardiff University.
          </c.TimelineEvent>
          <c.TimelineYear year="1912" />
          <c.TimelineEvent date="JUL. 7" year="1912" tags={["wynn rydderech"]}>
            <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">Dr. W. Rydderech</a> joins the SCP Foundation.
          </c.TimelineEvent>
          <c.TimelineYear year="1915" />
          <c.TimelineEvent date="JAN. 9" year="1915" tags={["wynn rydderech", "the aag"]}>
            Dr. W. Rydderech founds <a href="https://scp-wiki.wikidot.com/acroamatic-abatement" target="_blank">the Acroamatic Abatement Group.</a>
          </c.TimelineEvent>
          <c.TimelineEvent date="APR. 1" year="1915" tags={["vivian scout"]}>
            <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">Dr. V.L. Scout</a> joins the SCP Foundation.
          </c.TimelineEvent>
          <c.TimelineEvent date="APR. 5" year="1915" tags={["vivian scout", "simpson centre", "clio"]}>
            Dr. Scout founds <a href="https://scp-wiki.wikidot.com/dead-dogs-magic-mounties" target="_blank">Project CLIO</a> under the cover of the Simpson Centre for Policy.
          </c.TimelineEvent>
          <c.TimelineYear year="1916" />
          <c.TimelineEvent date="OCT. 28" year="1916" tags={["thilo zwist"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">SCP-5382</a> discovered.
          </c.TimelineEvent>
          <c.TimelineYear year="1917" />
          <c.TimelineEvent date="JAN. 1" year="1917" tags={["lys reynders", "thilo zwist"]}>
            A few <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">minutes after midnight</a>, Dr. Lys Reynders succumbs to <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">SCP-5382-B</a> and expires.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1920">
          <c.TimelineYear year="1920" />
          <c.TimelineEvent date="MAR. 26" year="1920" tags={["vivian scout", "thilo zwist"]}>
            First contact between <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">Dr. V.L. Scout</a> and PoI-382 (<a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">Thilo Zwist</a>).
          </c.TimelineEvent>
          <c.TimelineYear year="1928" />
          <c.TimelineEvent date="????" year="1928" tags={["site 43"]}>
            <a href="https://scp-wiki.wikidot.com/whose-lake-is-it-anyway" target="_blank">Native land</a> around Lake Huron sold to developers.
          </c.TimelineEvent>
          <c.TimelineEvent date="OCT. 17" year="1928" tags={["raynard watts"]}>
            Royal Commission on Extranormal Phenomena (<a href="https://scp-wiki.wikidot.com/dead-dogs-magic-mounties" target="_blank">Watts Commission</a>) begins.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1930">
          <c.TimelineYear year="1931" />
          <c.TimelineEvent date="JUL. 1" year="1931" tags={["osat", "raynard watts"]}>
            Royal Canadian Mounted Police creates <a href="https://scp-wiki.wikidot.com/dead-dogs-magic-mounties" target="_blank">OSAT</a> under Superintendent Raynard Watts.
          </c.TimelineEvent>
          <c.TimelineYear year="1936" />
          <c.TimelineEvent date="????" year="1936" tags={["none"]}>
            Ipperwash Provincial Park created on <a href="https://scp-wiki.wikidot.com/whose-lake-is-it-anyway" target="_blank">indigenous land.</a>
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1940">
          <c.TimelineYear year="1941" />
          <c.TimelineEvent date="SEP. 8" year="1941" tags={["vivian scout", "the brothers"]}>
            V. L. Scout <a href="https://scp-wiki.wikidot.com/0-underture" target="_blank">meets</a> (and captures) The Uncontained (SCP-001-A).
          </c.TimelineEvent>
          <c.TimelineEvent date="SEP. 8" year="1941" tags={["vivian scout", "wynn rydderech"]}>
            V. L. Scout talks to a <a href="https://scp-wiki.wikidot.com/30-underlude" target="_blank">mysterious man</a><span className="fnnum">.</span><span className="fncon">Most likely Rydderech or Scout from the future.</span> in the Mishepeshu tunnels.
          </c.TimelineEvent>
          <c.TimelineYear year="1942" />
          <c.TimelineEvent date="APR. 1" year="1942" tags={["site 43"]}>
            Construction begins on <a href="https://scp-wiki.wikidot.com/dead-dogs-magic-mounties" target="_blank">Provisional Site-43</a> beneath Camp Ipperwash.
          </c.TimelineEvent>
          <c.TimelineEvent date="AUG. 3" year="1942" tags={["nexus 94"]}>
            <a href="https://scp-wiki.wikidot.com/dead-dogs-magic-mounties" target="_blank">Nexus-94</a> created on <a href="https://scp-wiki.wikidot.com/whose-lake-is-it-anyway" target="_blank">First Nations reservations</a> around Lake Huron.
          </c.TimelineEvent>
          <c.TimelineYear year="1943" />
          <c.TimelineEvent date="APR. 1" year="1943" tags={["site 43"]}>
            <a href="https://scp-wiki.wikidot.com/dead-dogs-magic-mounties" target="_blank">Provisional Site-43</a> completed.
          </c.TimelineEvent>
          <c.TimelineEvent date="DEC. 31" year="1943" tags={["ilse reynders"]}>
            <a href="https://scp-wiki.wikidot.com/over-time-hub" target="_blank">Dr. Ilse Reynders</a> gets trapped in AAF-A's <a href="https://scp-wiki.wikidot.com/scp-5616" target="_blank">Anomalous Documents Disposal Chamber.</a>
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1960">
          <c.TimelineYear year="1960" />
          <c.TimelineEvent date="JUN. 18" year="1960" tags={["wynn rydderech", "the brothers", "acroamatic abatement"]}>
            <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">Dr. W. Rydderech</a> tries to experiment/consult with either SCP-001-A or -B. Instead it temporarily breaches and Rydderech is exposed to <a href="https://scp-wiki.wikidot.com/scp-5520" target="_blank">volatile esoteric substances.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="1964" />
          <c.TimelineEvent date="MAR. 17" year="1964" tags={["raynard watts"]}>
            Superintendent <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">Raynard Watts is killed</a> by a <i>loup-garou</i> in Montréal.
          </c.TimelineEvent>
          <c.TimelineYear year="1965" />
          <c.TimelineEvent date="APR. 1" year="1965" tags={["site 43", "vivian scout", "wynn rydderech"]}>
            Site-43 is promoted from provisional status. Drs. Scout and Rydderech <a href="https://scp-wiki.wikidot.com/the-good-work" target="_blank">have a drink in celebration.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="1966" />
          <c.TimelineEvent date="NOV. 14" year="1966" tags={["wynn rydderech"]}>
            Dr. W. Rydderech leaves the site and begins construction on AAF-W, becoming <a href="https://scp-wiki.wikidot.com/scp-5520" target="_blank">SCP-5520.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="1967" />
          <c.TimelineEvent date="OCT. 19" year="1967" tags={["elizabeth crocker", "panopticon crisis", "giftschreiber"]}>
            Agent Elizabeth Crocker assassinates O5-7. <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Panopticon Crisis</a> begins.
          </c.TimelineEvent>
          <c.TimelineYear year="1968" />
          <c.TimelineEvent date="JAN. 3" year="1968" tags={["site 43", "panopticon crisis"]}>
            The Canadian government <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">revokes the Foundation's right</a> to operate Site-43.
          </c.TimelineEvent>
          <c.TimelineEvent date="JAN. 7" year="1968" tags={["osat", "site 43"]}>
            <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">OSAT</a> fails to breach Site-43.
          </c.TimelineEvent>
          <c.TimelineEvent date="MAR. 12" year="1968" tags={["thilo zwist", "cryptomancy", "frontispiece"]}>
            Dr. Izaak Okorie meets <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">Thilo Zwist</a>, who fashions a cryptomantic shield for the use of a new front company: <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Scout's Cargo Packing.</a>
          </c.TimelineEvent>
          <c.TimelineEvent date="MAY ??" year="1968" tags={["elizabeth crocker", "panopticon crisis", "thilo zwist", "cryptomancy"]}>
            <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Elizabeth Crocker</a> attacks a convoy utilizing <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">Zwist's</a> cryptomancy.
          </c.TimelineEvent>
          <c.TimelineEvent date="JUL. 2" year="1968" tags={["elizabeth crocker", "panopticon crisis"]}>
            Site-03 Director Abrasha Sokolsky expelled from Soviet Union by <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Crocker.</a>
          </c.TimelineEvent>
          <c.TimelineEvent date="SEP. 3" year="1968" tags={["ilse reynders", "cryptomancy", "frontispiece"]}>
            Drs. Arik Euler, Izaak Okorie and <a href="https://scp-wiki.wikidot.com/scp-5616" target="_blank">Ilse Reynders</a> identify <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank"><i>linguanons</i></a>, the anomalous particles which allow <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">Zwist's</a> cryptomancy to operate.
          </c.TimelineEvent>
          <c.TimelineEvent date="SEP. 15" year="1968" tags={["cryptomancy", "frontispiece"]}>
            The first Foundation-made cryptomancy is applied to signage for a new front company, the <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Shell Construction Partnership.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="1969" />
          <c.TimelineEvent date="FEB. 17" year="1969" tags={["frontispiece", "cryptomancy", "ilse reynders"]}>
            Drs. Euler, Okorie and <a href="https://scp-wiki.wikidot.com/scp-5616" target="_blank">Reynders</a> propose creating "<a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">The Frontispiece</a>," a piece of thaumaturgy transforming the initialism SCP into a cryptomantic shield. Their proposal is accepted by the O5 Council.
          </c.TimelineEvent>
          <c.TimelineEvent date="JUL. 4" year="1969" tags={["elizabeth crocker", "panopticon crisis", "site 43"]}>
            <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Elizabeth Crocker</a> attacks Site-43.
          </c.TimelineEvent>
          <c.TimelineEvent date="JUL. 9" year="1969" tags={["frontispiece", "cryptomancy", "giftschreiber"]}>
            <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">The Frontispiece</a> is successfully implemented. Memetic attacks by GoI-5054 (giftschreiber) begin against the <a href="https://scp-wiki.wikidot.com/scp-5054-ex" target="_blank">Canadian Prime Minister.</a>
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1970">
          <c.TimelineYear year="1971" />
          <c.TimelineEvent date="????" year="1971" tags={["panopticon crisis", "memetics", "cryptomancy"]}>
            The <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Panopticon Crisis</a> ends. Dr. Euler founds the Mimesis and Cryptomancy Section (now Memetics and Countermemetics) at Site-43.
          </c.TimelineEvent>
          <c.TimelineEvent date="AUG. ??" year="1971" tags={["frontispiece", "cryptomancy"]}>
            Dr. Euler convinces PoI-922 ("Andy Warhol") to create a visual representation of <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">the Frontispiece</a> for use in countries which do not employ the Latin alphabet.
          </c.TimelineEvent>
          <c.TimelineYear year="1979" />
          <c.TimelineEvent date="MAY 22" year="1979" tags={["giftschreiber", "memetics", "SCP-5054-ex"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5054-ex" target="_blank">Giftschreiber</a> interfere memetically with the Canadian federal election.
          </c.TimelineEvent>
          <c.TimelineEvent date="MAY 25" year="1979" tags={["SCP-5054-ex"]}>
            Operation SHADOWPLAY creates fictional Prime Minister Joe Clark (<a href="https://scp-wiki.wikidot.com/scp-5054-ex" target="_blank">SCP-5054-EX</a>).
          </c.TimelineEvent>
          <c.TimelineEvent date="JUL. 3" year="1979" tags={["allan mcinnis"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5379" target="_blank">A.J. McInnis joins</a> the SCP Foundation.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1980">
          <c.TimelineYear year="1980" />
          <c.TimelineEvent date="JAN. 1" year="1980" tags={["elizabeth crocker", "giftschreiber"]}>
            Izaak Okorie is murdered by <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Elizabeth Crocker.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="1984" />
          <c.TimelineEvent date="????" year="1984" tags={["none"]}>
            <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">Dr. Euler</a> transfers to Site-87.
          </c.TimelineEvent>
          <c.TimelineYear year="1987" />
          <c.TimelineEvent date="????" year="1987" tags={["none"]}>
            <a href="https://scp-wiki.wikidot.com/are-we-cool-yet-hub" target="_blank">Are We Cool Yet?</a> formed by former members of <a href="https://scp-wiki.wikidot.com/pickman-blank-proposal" target="_blank">PoI-922's workshop.</a>
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="1990">
          <c.TimelineYear year="1991" />
          <c.TimelineEvent date="SEP. 1" year="1991" tags={["vivian scout", "harry blank"]}>
            Dr. V.L. Scout takes on <a href="https://scp-wiki.wikidot.com/dissertation" target="_blank">H. Blank</a> as a doctoral student at University of Toronto.
          </c.TimelineEvent>
          <c.TimelineYear year="1992" />
          <c.TimelineEvent date="NOV. 9" year="1992" tags={["scp-5281"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5281" target="_blank">SCP-5281</a>, a child-eating phantom, is "contained" at Site-43.
          </c.TimelineEvent>
          <c.TimelineYear year="1993" />
          <c.TimelineEvent date="MAY ??" year="1993" tags={["nexus 94"]}>
            A group of the <a href="https://scp-wiki.wikidot.com/are-we-cool-yet-hub" target="_blank">Stony Point indigenous</a> enter Camp Ipperwash — peacefully — and occupy the premises.
          </c.TimelineEvent>
          <c.TimelineYear year="1994" />
          <c.TimelineEvent date="AUG. 3" year="1994" tags={["harry blank", "lillian lillihammer", "site 43"]}>
            Drs. H. Blank and L. Lillihammer <a href="https://scp-wiki.wikidot.com/defence" target="_blank">discover the SCP Foundation</a> at Site-43, and are subsequently hired.
          </c.TimelineEvent>
          <c.TimelineYear year="1995" />
          <c.TimelineEvent date="JUL. 29" year="1995" tags={["site 43", "ipperwash crisis"]}>
            Department of Defense is permanently ejected from Site-43 interdiction zone, beginning <a href="https://scp-wiki.wikidot.com/whose-lake-is-it-anyway" target="_blank">the Ipperwash Crisis.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="1996" />
          <c.TimelineEvent date="????" year="1996" tags={["placeholder"]}>
            <a href="https://scp-wiki.wikidot.com/aiad-homescreen" target="_blank">Dr. Nathan Valis</a> is involved in a fight against forgettable foes whilst Director of AIAD at Site-15.
          </c.TimelineEvent>
          <c.TimelineEvent date="JAN. 6" year="1996" tags={["site 43"]}>
            Site-43 Information and Technocryptography Chief <a href="https://scp-wiki.wikidot.com/scp-5295" target="_blank">R. Marroquin</a> revealed to be a Maxwellist mole.
          </c.TimelineEvent>
          <c.TimelineEvent date="FEB. 3" year="1996" tags={["vivian scout", "allan mcinnis"]}>
            V.L. Scout tells McInnis the <a href="https://scp-wiki.wikidot.com/10-under-new-direction" target="_blank">list of names</a> given to him in <a href="https://scp-wiki.wikidot.com/0-underture" target="_blank">1941</a>, with some omissions(?).
          </c.TimelineEvent>
          <c.TimelineEvent date="FEB. 9" year="1996" tags={["vivian scout", "wynn rydderech"]}>
            Dr. Scout attempts to decommission <a href="https://scp-wiki.wikidot.com/scp-5520" target="_blank">SCP-5520.</a>
          </c.TimelineEvent>
          <c.TimelineEvent date="APR. 1" year="1996" tags={["vivian scout", "allan mcinnis"]}>
            <a href="https://scp-wiki.wikidot.com/51-stop-the-clock" target="_blank">Dr. Scout retires.</a> Dr. McInnis becomes the director of Site-43.
          </c.TimelineEvent>
          <c.TimelineEvent date="APR. 3" year="1996" tags={["scp-5281"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5281" target="_blank">SCP-5281</a> is decommissioned.
          </c.TimelineEvent>
          <c.TimelineYear year="1997" />
          <c.TimelineEvent date="APR. 1" year="1997" tags={["vivian scout"]}>
            Dr. V.L. Scout <a href="https://scp-wiki.wikidot.com/32-executive-dysfunction" target="_blank">dies.</a>
          </c.TimelineEvent>
          <c.TimelineEvent date="APR. 4" year="1997" tags={["thilo zwist"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5382" target="_blank">PoI-382 (Thilo Zwist)</a> officially allies with the SCP Foundation.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="2000">
          <c.TimelineYear year="2000" />
          <c.TimelineEvent date="MAY 5" year="2000" tags={["lillian lillihammer", "wynn rydderech"]}>
            Lillihammer meets Rydderech, and he delivers to her <a href="https://scp-wiki.wikidot.com/9-transition" target="_blank">a cryptic message.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="2002" />
          <c.TimelineEvent date="MAY 5" year="2002" tags={["placeholder"]}>
            Dr. Nathan Valis suffers an identity abstraction, becoming <a href="https://scp-wiki.wikidot.com/scp-5242" target="_blank">Dr. Placeholder McDoctorate.</a>
          </c.TimelineEvent>
          <c.TimelineEvent date="SEP. 8" year="2002" tags={["scp-5243", "the brothers", "acroamatic abatement"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5243" target="_blank">SCP-5243</a> occurs for the first time. Mass containment breach in Acroamatic Abatement Facility AAF-D, killing eight staff members. SCP-001-A and -B, which caused the breach, are erased from reality.
          </c.TimelineEvent>
          <c.TimelineEvent date="SEP. 9" year="2002" tags={["scp-5056"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5056" target="_blank">SCP-5056</a> Manifests.
          </c.TimelineEvent>
          <c.TimelineYear year="2003" />
          <c.TimelineEvent date="SEP. 8" year="2003" tags={["scp-5243"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5243" target="_blank">SCP-5243</a> recurs for the first time. Unstable alternate timeline created (Deadline A: Playing Gods).
          </c.TimelineEvent>
          <c.TimelineYear year="2007" />
          <c.TimelineEvent date="SEP. 8" year="2007" tags={["scp-5243"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5243" target="_blank">SCP-5243</a> recurs for the fifth time. Unstable alternate timeline created (Deadline B: The World Wide Web).
          </c.TimelineEvent>
          <c.TimelineYear year="2009" />
          <c.TimelineEvent date="MAY 9" year="2009" tags={["scp-5109"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5109" target="_blank">SCP-5109</a> first encountered.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="2010">
          <c.TimelineYear year="2011" />
          <c.TimelineEvent date="SEP. 8" year="2011" tags={["scp-5243"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5243" target="_blank">SCP-5243</a> recurs for the ninth time. Unstable alternate timeline created (Deadline C: Next to Nothing).
          </c.TimelineEvent>
          <c.TimelineYear year="2013" />
          <c.TimelineEvent date="SEP. 7" year="2013" tags={["scp-5756"]}>
            First observation of an annual phenomenon which corrupts objects within a certain Janitorial and Maintenance Section employee storage locker (<a href="https://scp-wiki.wikidot.com/scp-5756" target="_blank">SCP-5756</a>).
          </c.TimelineEvent>
          <c.TimelineYear year="2015" />
          <c.TimelineEvent date="SEP. 8" year="2015" tags={["scp-5243"]}>
            Dr. A. Zlatá is <a href="https://scp-wiki.wikidot.com/49-repent-at-leisure" target="_blank">killed by SCP-5243.</a>
          </c.TimelineEvent>
          <c.TimelineEvent date="DEC. 29" year="2015" tags={["none"]}>
            <a href="https://scp-wiki.wikidot.com/49-repent-at-leisure" target="_blank">Arik Euler dies.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="2016" />
          <c.TimelineEvent date="SEP. 8" year="2016" tags={["scp-5243"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5243" target="_blank">SCP-5243</a> recurs for the fourteenth time. Unstable alternate timeline created. (Deadline D: Wonders of my Hand)
          </c.TimelineEvent>
          <c.TimelineYear year="2017" />
          <c.TimelineEvent date="SEP. 8" year="2017" tags={["scp-5243"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5243" target="_blank">SCP-5243</a> recurs for the fifteenth time. Unstable alternate timeline created. (Deadline E: Look Upon my Works)
          </c.TimelineEvent>
          <c.TimelineYear year="2019" />
          <c.TimelineEvent date="SEP. 8" year="2019" tags={["the brothers"]}>
            SCP-001 <a href="https://scp-wiki.wikidot.com/59-the-foreseeable-future" target="_blank">restored to reality.</a>
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="2020">
          <c.TimelineYear year="2020" />
          <c.TimelineEvent date="OCT. 23" year="2020" tags={["site 43"]}>
            <a href="https://scp-wiki.wikidot.com/the-b-b-decommission" target="_blank">Site-43 attacked</a> by the Foundation Elimination Coalition.
          </c.TimelineEvent>
          <c.TimelineEvent date="NOV. 23" year="2020" tags={["daniil sokolsky", "placeholder", "scp-5956"]}>
            Daniil Sokolsky commissions Placeholder to construct the REISNO Cannon (<a href="https://scp-wiki.wikidot.com/scp-5956" target="_blank">SCP-5956</a>) for use with <a href="https://scp-wiki.wikidot.com/the-time-after-time-password-hub" target="_blank">SCP-5109</a>. Placeholder was found to have already been constructing the Cannon under the guidance of his future self.
          </c.TimelineEvent>
          <c.TimelineEvent date="DEC. 18-25" year="2020" tags={["site 43"]}>
            Site-43 <a href="https://scp-wiki.wikidot.com/the-huron-carol" target="_blank">attacked by Are We Cool Yet?</a>
          </c.TimelineEvent>
          <c.TimelineYear year="2021" />
          <c.TimelineEvent date="JAN. 1" year="2021" tags={["site 43", "tatp"]}>
            Site-43 agents conduct <a href="https://scp-wiki.wikidot.com/the-time-after-time-password-hub" target="_blank">a global sting</a> against GoI moles.
          </c.TimelineEvent>
          <c.TimelineEvent date="????" year="2021" tags={["scp-6500"]}>
            The Impasse (<a href="https://scp-wiki.wikidot.com/scp-6500" target="_blank">SCP-6500</a>) begins.
          </c.TimelineEvent>
          <c.TimelineEvent date="JAN. 22" year="2021" tags={["scp-5866"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5866" target="_blank">SCP-5866</a> breaches containment.
          </c.TimelineEvent>
          <c.TimelineEvent date="MAR. 30" year="2021" tags={["ilse reynders"]}>
            <a href="https://scp-wiki.wikidot.com/67-terminal-terminal" target="_blank">Dr. Ilse Reynders</a> escapes confinement and becomes Chair of Acroamatic Abatement.
          </c.TimelineEvent>
          <c.TimelineEvent date="SEP. 8" year="2021" tags={["scp-5243", "dougall deering"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5243" target="_blank">SCP-5243</a> recurs for the nineteenth time. Unstable alternate timeline created. (Deadline F: Dead Idiot)
          </c.TimelineEvent>
          <c.TimelineYear year="2022" />
          <c.TimelineEvent date="SEP. 8" year="2022" tags={["dougall deering", "paraline"]}>
            <a href="https://scp-wiki.wikidot.com/scp-5956" target="_blank">Paraline</a> created due to the negligence of D. Deering.
          </c.TimelineEvent>
          <c.TimelineEvent date="DEC. 25" year="2022" tags={["thilo zwist"]}>
            Thilo Zwist celebrates <a href="https://scp-wiki.wikidot.com/come-home-for-zwistmas" target="_blank">Christmas at Site-43.</a>
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="2030">
          <c.TimelineYear year="2033" />
          <c.TimelineEvent date="????" year="2033" tags={["none"]}>
            Project begins into <a href="https://scp-wiki.wikidot.com/placeholder" target="_blank">archetypical anomalies.</a>
          </c.TimelineEvent>
          <c.TimelineYear year="2034" />
          <c.TimelineEvent date="????" year="2034" tags={["ilse reynders", "tad", "placeholder", "scp-5956"]}>
            Ilse Reynders, Director of the Temporal Anomalies Department, <a href="https://scp-wiki.wikidot.com/cast" target="_blank">contacts Placeholder McDoctorate.</a> She instructs him to reverse engineer <a href="https://scp-wiki.wikidot.com/scp-5956" target="_blank">the REISNO Cannon</a> and then guide his 2020 self in building it, thus completing the causal loop.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
        <c.TimelineCollapsible year="Post-2030">
          <c.TimelineYear year="Unknown" />
          <c.TimelineEvent date="????" year="????" tags={["ilse reynders", "tad"]}>
            <a href="https://scp-wiki.wikidot.com/scp-6500/offset/15" target="_blank">Dr. Ilse Reynders reassigned to the Temporal Anomalies Department</a> and eventually promoted to Director.
          </c.TimelineEvent>
        </c.TimelineCollapsible>
      </c.Timeline>
    </main>  
  );
}
