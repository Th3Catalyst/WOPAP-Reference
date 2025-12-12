"use client";
import React, { JSX, SetStateAction, useEffect, useState } from "react";
import TagElement from "./tagSearch";

function getTags() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let returnVal: JSX.Element[] = [];
      const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;
      const allTags: string[] = [];

      for (const timeEvent of events) {
        const tags = timeEvent.getAttribute("data-tags")?.split(",")
        if (!tags) {return}
        for (const tag of tags) {
            if (!allTags.includes(tag)) {
              allTags.push(tag)
            }
        }
        allTags.sort()
      }
      returnVal = allTags.map(tag => <TagElement key={tag} tag={tag} />)
      resolve({
        tags: returnVal
      })
    }, 1500)
  })
}

export default function PopulateTags() {
  const [tagInfo, setTags] = useState({});
  
  
  useEffect(() => {
    getTags()
    .then(tagInfo =>
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      setTags(tagInfo as SetStateAction<{}>)
    ); 
   }, []);
  
  return (
    <>{(tagInfo as { tags: JSX.Element[] }).tags}</>
  );
}