"use client";
import wordSearch from "./wordSearch";
import { tags } from "./addTag";

export default function initializeSearch() {
    const events = document.querySelectorAll('[data-tags]') as NodeListOf<HTMLElement>;

    document.getElementById("searchTag")?.addEventListener("focus", (e) => {
        wordSearch((document.getElementById('tagList') as HTMLElement).querySelectorAll('li'), true);
        let input: HTMLInputElement | null = document.getElementById("searchTag") as HTMLInputElement | null;
        if (input) {
            setTimeout(() => { input.selectionStart = input.selectionEnd = 10000; }, 0);
            if (document.getElementById("tagList") as HTMLElement) { 
                (document.getElementById("tagList") as HTMLElement).style.display = "block";
            }
           
        }
    });

    document.getElementById("searchTag")?.addEventListener("blur", (e) => {
    document.addEventListener("mouseup", (e) => {
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
    document.getElementById("searchTagCon")!.addEventListener("click", (e) => {
    document.getElementById("searchTag")!.focus(
);});}