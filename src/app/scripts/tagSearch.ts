import { tags } from "./addTag";
export default function tagSearch() {
  const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;

  for (let i = 0; i < events.length; i++) {
    (events[i].parentNode as HTMLElement).style.display = "none";
    ((events[i].parentNode as HTMLElement).previousElementSibling as HTMLElement).classList.remove("active");
  }
  const enabledTags: string[] = tags;
  if (enabledTags.length > 0) {
    console.log(enabledTags);
    for (let i = 0; i < events.length; i++) {
      let prevElement = (events[i] as HTMLElement).previousElementSibling
      while (prevElement) {
        if (prevElement.querySelector("p")) {
          (prevElement as HTMLElement).style.display = "none";
          break
        }
        prevElement = prevElement.previousElementSibling
      }
    }
  }
  for (let i = 0; i < events.length; i++) {
    const tags = events[i].getAttribute("data-tags");
    if (tags) {
      const tagList = tags.split(',').map(tag => tag.trim().toLowerCase());
      if (tagList.some(element => enabledTags.includes(element))) {
        events[i].style.display = "list-item";
        (events[i].parentNode as HTMLElement).style.display = "block";
        ((events[i].parentNode as HTMLElement).previousElementSibling as HTMLElement).classList.add("active");
        let prevElement = (events[i] as HTMLElement).previousElementSibling
        while (prevElement) {
          if (prevElement.querySelector("p")) {
            (prevElement as HTMLElement).style.display = "list-item";
            break
          }
          prevElement = prevElement.previousElementSibling
        }
      } else {
        events[i].style.display = "none";
      }
    } else {
      events[i].style.display = "none";
    }
  }
}


