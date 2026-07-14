import { re_move } from "./move";

export function createWindow(root, id){
    const existing  = document.getElementById(id);
    if(existing){
        existing.style.zIndex = String(Date.now());
        return existing;
    }

    const page = document.createElement("div");
    page.className = "windowPage";
    page.id = id;

    const header = document.createElement("div");
    header.className = "header";
    page.appendChild(header);

    const title = document.createElement("div");
    title.className = "title";
    const titleText = document.createElement("p");
    title.appendChild(titleText);
    header.appendChild(title);

    const exit = document.createElement("div");
    exit.className = "exit";
    const text = document.createElement("a");
    text.innerHTML = "x";
    text.onclick = ()=>{
        page.remove();
    }
    exit.appendChild(text);
    header.appendChild(exit);

    const content = document.createElement("div");
    content.className = "content";
    page.appendChild(content);

    re_move(page);

    document.querySelector(`#${root}`).appendChild(page);
}