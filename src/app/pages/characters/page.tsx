"use client";
import React, {ReactElement, ReactNode, useEffect} from "react";
import Collapsible from "../../scripts/collapsible";
import initializeSearch from "../../scripts/main";

import * as c from "../../components/index";

interface CharacterCardInterface {
  name: string,
  roles: Array<string>, 
  sites: Array<string>,
  image?: string, 
  description: ReactNode, 
  history: Array<ReactNode>, 
  relationships?: Record<string, ReactNode>, 
  appearances: Array<ReactElement>, 
  misc?: Array<string>
}
function CharacterCard({name, roles, sites, image, description, history, relationships, appearances, misc}: CharacterCardInterface) {
  let appearances_list: Array<ReactElement> = [];
  for (let i in appearances) {
    appearances_list.push(<li key={i}>{appearances[i]}</li>)
  }
  let formatted_appearances: ReactElement = React.createElement(
    "ul", {className: "content list-disc ml-4 mt-2"}, appearances_list
  );
  return (
    <div className="lg:w-[40em] sm:w-[90vw] h-[60em] m-4 p-3 bg-[#999] text-black overflow-scroll">
      <h1 className="text-4xl font-black text-center">{name}</h1>
      <h3 className="text-2xl font-black text-center">{roles[0]}, {sites[0]}</h3>
      <hr className="border-3 m-6" />
      <h3 className="text-2xl font-black">Overview:</h3>
      <p className="text-lg">{description}</p>
      <h3 className="mt-4 text-2xl font-black cursor-pointer text-[#8D2c4c] collapsible">Appearances:</h3>
      {formatted_appearances}
    </div>
  )
  
}

export default function Main() {
  useEffect(() => { 
    Collapsible();
    initializeSearch();
  }, []);
  return (
    <main id="mainContent">
      <c.Menu />
      <CharacterCard name="Dr. Daniil Sokolsky" roles={["ETTRA Deputy Chief"]} sites={["Site-43"]} description=
      {<><a href="https://scp-wiki.com/time-after-time-password-hub">Scheming, conniving, 
        constantly-planning</a>. Delights in Byzantine intrigue, in keeping ahead of the pack, 
        in showing his colleagues up and embarrassing his enemies. 
        <a href="https://scp-wiki.com/scp-8888"> Complexity addiction</a>. Gratingly arrogant
        personality.</>}
      history={[
        "h"
      ]} appearances={[
        <a href="https://scp-wiki.wikidot.com/scp-5109">SCP-5109</a>,
        <a href="https://scp-wiki.wikidot.com/the-b-b-decommission">The B&B Decommission</a>,
        <a href="https://scp-wiki.wikidot.com/scp-5751">SCP-5751</a>,
        <a href="https://scp-wiki.wikidot.com/the-huron-carol">The Huron Carol</a>,
        <a href="https://scp-wiki.wikidot.com/character-development">Character Development</a>,
        <a href="https://scp-wiki.wikidot.com/if-you-don-t-know-the-words">If You Don't Know the Words</a>,
        <a href="https://scp-wiki.wikidot.com/spread-the-word">Spread the Word</a>,
        <a href="https://scp-wiki.wikidot.com/scp-5956">SCP-5956</a>,
        <a href="https://scp-wiki.wikidot.com/danimals">Danimals</a>,
        <a href="https://scp-wiki.wikidot.com/whack-a-mole">Whack a Mole</a>,
        <a href="https://scp-wiki.wikidot.com/lost-in-the-translation">Lost in the Translation</a>,
        <a href="https://scp-wiki.wikidot.com/passing-sentence">Passing Sentence</a>,
        <a href="https://scp-wiki.wikidot.com/out-of-character">Out of Character</a>,
        <a href="https://scp-wiki.wikidot.com/scp-7000">SCP-7000</a>,
        <a href="https://scp-wiki.wikidot.com/6-on-reflection">On Reflection</a>,
        <a href="https://scp-wiki.wikidot.com/7-beyond-repair">Beyond Repair</a>,
        <a href="https://scp-wiki.wikidot.com/22-borrowing-trouble">Borrowing Trouble</a>,
        <a href="https://scp-wiki.wikidot.com/28-hooking-up">Hooking Up</a>,
        <a href="https://scp-wiki.wikidot.com/36-face-time">Face Time</a>,
        <a href="https://scp-wiki.wikidot.com/37-beggar-belief">Beggar Belief</a>,
        <a href="https://scp-wiki.wikidot.com/38-world-of-difference">World of Difference</a>,
        <a href="https://scp-wiki.wikidot.com/39-double-date">Double Date</a>,
        <a href="https://scp-wiki.wikidot.com/42-life-cycled">Life Cycled</a>,
        <a href="https://scp-wiki.wikidot.com/have-yourselves">Have Yourselves</a>,
        <a href="https://scp-wiki.wikidot.com/scp-8888">SCP-8888</a>,
        <a href="https://scp-wiki.wikidot.com/45-nothing-to-worry-about">Nothing to Worry About</a>,
        <a href="https://scp-wiki.wikidot.com/47-past-caring">caring</a>,
        <a href="https://scp-wiki.wikidot.com/48-unforgettable-too">too</a>,
        <a href="https://scp-wiki.wikidot.com/52-true-art-is-cognitohazardous">cognitohazardous</a>,
        <a href="https://scp-wiki.wikidot.com/53-those-who-cant">cant</a>,
        <a href="https://scp-wiki.wikidot.com/58-time-flat">flat</a>,
        <a href="https://scp-wiki.wikidot.com/59-the-foreseeable-future">future</a>,
        <a href="https://scp-wiki.wikidot.com/scp-8141">8141</a>,
        <a href="https://scp-wiki.wikidot.com/scp-8382">8382</a>,
        <a href="https://scp-wiki.wikidot.com/63-de-tijd-vliegt">vliegt</a>,
        <a href="https://scp-wiki.wikidot.com/66-kaleidoscope">kaleidoscope</a>,
        <a href="https://scp-wiki.wikidot.com/68-ones-own">own</a>,
        <a href="https://scp-wiki.wikidot.com/70-parasite">parasite</a>,
        <a href="https://scp-wiki.wikidot.com/71-overlude">overlude</a>,
        <a href="https://scp-wiki.wikidot.com/73-better-dead">dead</a>,
        <a href="https://scp-wiki.wikidot.com/joy-to-the-worlds">worlds</a>,
        <a href="https://scp-wiki.wikidot.com/001-blank-i">i</a>,
        <a href="https://scp-wiki.wikidot.com/21-daniil">daniil</a>,
      ]} />
    </main>  
  );
}
