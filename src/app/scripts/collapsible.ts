"use client";

export default function Collapsible() {
  const coll: HTMLCollection = document.getElementsByClassName("collapsible");

  for (const i of coll as HTMLCollectionOf<HTMLElement>) {
    i.addEventListener("click", () => {
      i.classList.toggle("active");
      const content = i.nextElementSibling as HTMLElement | null;
      if (content && content.style.display != "none" && content.style.display != "") {
        content.style.display = "none";
      } else if (content) {
        content.style.display = "block";
      }
    });
    
  }
  
}


