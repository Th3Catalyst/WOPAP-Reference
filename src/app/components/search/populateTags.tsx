"use client";
import { useEffect, useState } from "react";
import TagElement from "./tagSearch";

function getTags() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let returnVal = <p>loading1...</p>
      if (document ?? 0) {returnVal = <p>loading2...</p>} else {
        const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;
        let allTags: string[] = [];

        for (let timeEvent of events) {
          let tags = timeEvent.getAttribute("data-tags")?.split(",")
          if (!tags) {return}
          for (let tag of tags) {
              if (!(tag in allTags)) {
                allTags.push(tag)
              }
          }
        }
        returnVal = allTags.map(tag => <TagElement tag={tag} />)
      }
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
    .then(data =>
      setTags(data)
    );
   }, [])
  
  return (
    <>{tagInfo.tags}</>
  )
}