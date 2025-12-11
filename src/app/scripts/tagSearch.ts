import { tags } from "./addTag";
export default function tagSearch() {
  const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;

  for (let i = 0; i < events.length; i++) {
    (events[i].parentNode as HTMLElement).style.display = "none";
    ((events[i].parentNode as HTMLElement).previousElementSibling as HTMLElement).classList.remove("active");
  }
  let enabledTags = tags;
  console.log(enabledTags);
  for (let i = 0; i < events.length; i++) {
    let tags = events[i].getAttribute("data-tags");
    if (tags) {
      let tagList = tags.split(',').map(tag => tag.trim().toLowerCase());
      if (tagList.some(element => enabledTags.includes(element))) {
        events[i].style.display = "list-item";
        (events[i].parentNode as HTMLElement).style.display = "block";
        ((events[i].parentNode as HTMLElement).previousElementSibling as HTMLElement).classList.add("active");
      } else {
        events[i].style.display = "none";
      }
    } else {
      events[i].style.display = "none";
    }
  }
}


