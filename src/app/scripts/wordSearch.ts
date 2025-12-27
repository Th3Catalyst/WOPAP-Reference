
export default function wordSearch(elements: NodeListOf<HTMLElement> | null = null, menu: boolean = false) {
  const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;
  elements = elements ? elements: events;
  let filter: string | string[]

  if (!menu) {
    const input = document.getElementById("search");
    filter = (input as HTMLInputElement).value.toUpperCase();
    for (let i = 0; i < elements.length; i++) {
      (elements[i].parentNode as HTMLElement).style.display = "none";
      ((elements[i].parentNode as HTMLElement).previousElementSibling as HTMLElement).classList.remove("active");
    }
  } else {
    
    const input = document.getElementById("searchTag") as HTMLInputElement;
    filter = input.value.toUpperCase().split(',');
    filter = filter[filter.length - 1].trim();
    
  }
  for (let i = 0; i < elements.length; i++) {
    let prevElement = (elements[i] as HTMLElement).previousElementSibling
    while (prevElement) {
      if (prevElement.querySelector("p")) {
        (prevElement as HTMLElement).style.display = "none";
        break
      }
      prevElement = prevElement.previousElementSibling
    }
  }
  for (let i = 0; i < elements.length; i++) {
    let txtValue: string | undefined;
    if (!menu) {
      txtValue = elements[i].querySelector('div')?.textContent || elements[i].querySelector('div')?.innerText;
    } else {
      txtValue = elements[i].querySelector('button')?.textContent || elements[i].querySelector('button')?.innerText;
    }
    if (txtValue) {
      if (txtValue?.toUpperCase().indexOf(filter) > -1) {
        elements[i].style.display = "list-item";
        if (!menu) {
          (elements[i].parentNode as HTMLElement).style.display = "block";
          ((elements[i].parentNode as HTMLElement).previousElementSibling as HTMLElement).classList.add("active");
          let prevElement = (elements[i] as HTMLElement).previousElementSibling
          while (prevElement) {
            if (prevElement.querySelector("p")) {
              (prevElement as HTMLElement).style.display = "list-item";
              break
            }
            prevElement = prevElement.previousElementSibling
          }
        }
      } else {
        elements[i].style.display = "none";
      }
    }
  }
  if ((document.getElementById("search") as HTMLInputElement | null)?.value == "" && !menu) {
    for (let i = 0; i < elements.length; i++) {
      (elements[i].parentNode as HTMLElement).style.display = "none";
      (elements[i].parentNode as HTMLElement).previousElementSibling?.classList.remove("active");
      elements[i].style.display = "list-item";
    }
  }
}

