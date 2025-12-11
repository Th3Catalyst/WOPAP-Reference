"use client";
import { useState } from "react";
import TagElement from "./tagSearch";

export default function PopulateTags() {
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
  let tagElements = allTags.map(tag => <TagElement tag={tag} />)
  return (
    <ul id ="tagList">{tagElements}</ul>
  )
}