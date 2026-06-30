import { Icons } from './scripts/icons'
import { move } from './scripts/move';
import { onClick } from './scripts/onclick';
import { updateTime } from './scripts/time';
import './style.css'

const root = document.querySelector("#app");

const icon_container = document.createElement("div");
icon_container.id = "icons"

const navBad = document.createElement("div");
navBad.id = "navbar";

const windowButton = document.createElement("button");
windowButton.id = "windows";
windowButton.innerHTML = `
  <p>Austin Philip</p>
`;
navBad.appendChild(windowButton);

const tabs = document.createElement("div");
tabs.id = "tabs";
navBad.appendChild(tabs);

const time = document.createElement("div");
time.id = "time";
time.innerHTML = `
  <p><span class="hour">00</span>:<span class="min">00</span></p>
`;
navBad.appendChild(time);



root.appendChild(icon_container);
root.appendChild(navBad);

const icons = new Icons({
  className: "icon",
  root: "#icons"
});
icons.loadIcons();
icons.setIconsAbsolute();

//events 
icons.addEvent(onClick);
icons.addEvent(move);

updateTime(".hour", ".min");
setInterval(()=>{
  updateTime(".hour", ".min");
}, 1000);