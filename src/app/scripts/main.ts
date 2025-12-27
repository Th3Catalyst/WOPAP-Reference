"use client";
import wordSearch from "./wordSearch";
import Collapsible from "./collapsible"
import { tags } from "./addTag";

function initializeSearch() {
    const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;

    document.getElementById("searchTag")?.addEventListener("focus", () => {
        wordSearch((document.getElementById('tagList') as HTMLElement).querySelectorAll('li'), true);
        const input: HTMLInputElement | null = document.getElementById("searchTag") as HTMLInputElement | null;
        if (input) {
            setTimeout(() => { input.selectionStart = input.selectionEnd = 10000; }, 0);
            if (document.getElementById("tagList") as HTMLElement) { 
                (document.getElementById("tagList") as HTMLElement).style.display = "block";
            }
           
        }
    });

    document.getElementById("searchTag")?.addEventListener("blur", () => {
    document.addEventListener("mouseup", () => {
        setTimeout(() => {
            if (document.getElementById("tagList") as HTMLElement) {
                (document.getElementById("tagList") as HTMLElement).style.display = "none";
            }
            if (tags.length == 0) {
                for (let i = 0; i < events.length; i++) {
                    events[i].style.display = "list-item";
                }
            }
        }, 20);
    }, { once: true 
    });});
    document.getElementById("searchTagCon")!.addEventListener("click", () => {
    document.getElementById("searchTag")!.focus(
);});}

export default function initializePage()  {
    Collapsible();
    initializeSearch();

    const URLParams = new URLSearchParams(window.location.search)
    const theme = URLParams.get('theme')
    if (theme == "dark") {
        document.documentElement.style.setProperty('--primary-color', "black");
        document.documentElement.style.setProperty('--secondary-color', '#888');
        (document.getElementById('darkModeBox') as HTMLInputElement)!.checked = true;
    } else if (theme == 'light') {
        document.documentElement.style.setProperty('--primary-color', "white");
        document.documentElement.style.setProperty('--secondary-color', 'black');
        (document.getElementById('darkModeBox') as HTMLInputElement)!.checked = false;
    }
}