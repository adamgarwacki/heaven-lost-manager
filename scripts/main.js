'use strict';

let navButtons = document.getElementsByClassName("nav-buttons");
let pageContents = document.getElementsByClassName("page-contents-child");

for (let i = 0; i < 3; i++) {
    let b = document.getElementById("nav-button-" + i);
    b.addEventListener("click", () => {
        Array.from(navButtons).forEach((e) => {
            e.classList.remove("button-active");
        });
        b.classList.add("button-active");

        Array.from(pageContents).forEach((e) => {
            e.classList.remove("contents-active");
        });
        Array.from(pageContents)[i].classList.add("contents-active");
    });
}