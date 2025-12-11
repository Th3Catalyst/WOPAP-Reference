"use client";
import tagSearch from "./tagSearch";

export let tags: string[] = [];
interface AddTagProps {
    tag: string;
}

export default function addTag({tag}: AddTagProps) {
    
  const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;

  

  let input: HTMLInputElement | null = document.getElementById("searchTag") as HTMLInputElement | null;
  if (input) {
    input.value = "";
    if (tags.includes(tag)) {
      tags = tags.filter(e => e !== tag);
    } else {
      tags.push(tag);
    }
    let newtag = document.createElement("div");
    document.getElementById("searchTagCon")?.appendChild(newtag);
    newtag.innerText = tag;
    newtag.classList.add("tag");
    document.getElementById("searchTagCon")?.appendChild(input);

    let tagElements = document.getElementsByClassName("tag");
    for (let j = 0; j < tagElements.length; j++) {
      tagElements[j].addEventListener("click", (e) => {
        (e.target as HTMLElement)?.remove();
        tags = tags.filter(t => t !== (e.target as HTMLElement)?.innerText);
        tagSearch();
        if (tags.length == 0) {
          for (let i = 0; i < events.length; i++) {
            events[i].style.display = "list-item";
          }
        }
      });
    }
  }
}

