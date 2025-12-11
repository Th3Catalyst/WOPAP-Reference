interface WordSearchProps {
    elements?: NodeListOf<HTMLElement>;
    menu?: boolean;
}

export default function wordSearch(elements: NodeListOf<HTMLElement> | null = null, menu: boolean = false) {

  elements = elements ? elements: document.querySelectorAll('[data-event]') as NodeListOf<HTMLElement>;
  
  if (!menu) {
    let input = document.getElementById("search");
    let filter = (input as HTMLInputElement).value.toUpperCase();
    for (let i = 0; i < elements.length; i++) {
      (elements[i].parentNode as HTMLElement).style.display = "none";
      ((elements[i].parentNode as HTMLElement).previousElementSibling as HTMLElement).classList.remove("active");
    }
  } else {
    
    let input = document.getElementById("searchTag") as HTMLInputElement;
    let filter = input.value.toUpperCase().split(',');
    filter = filter[filter.length - 1].trim();
    console.log(filter);
  }
  for (i = 0; i < elements.length; i++) {
    if (!menu) {
      txtValue = elements[i].querySelector('div').querySelector('p').textContent || elements[i].querySelector('div').querySelector('p').innerText;
    } else {
      txtValue = elements[i].querySelector('button').textContent || elements[i].querySelector('button').innerText;
    }
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      elements[i].style.display = "list-item";
      if (!menu) {
        elements[i].parentNode.style.display = "block";
        elements[i].parentNode.previousElementSibling.classList.add("active");
      }
    } else {
      elements[i].style.display = "none";
    }
  }
  if (document.getElementById("search").value == "" && !menu) {
    for (i = 0; i < events.length; i++) {
      events[i].parentNode.style.display = "none";
      events[i].parentNode.previousElementSibling.classList.remove("active");
      events[i].style.display = "list-item";
    }
  }
}

