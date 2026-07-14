const MIN_WIDTH = 1280;
const MIN_HEIGHT = 600;

function createScreenWarning() {
  const overlay = document.createElement("div");
  overlay.id = "screen-warning";
  overlay.innerHTML = `
    <h1>Screen Too Small</h1>
    <p>This site requires a screen to be at least <strong>${MIN_WIDTH}x${MIN_HEIGHT}px</strong>...</p>
    <p id="screen-size-display"></p>
  `;
  return overlay;
}

export function checkScreen(){
    const w = window.innerWidth;
    const h = window.innerHeight;
    const toSmall = w < MIN_HEIGHT || h < MIN_HEIGHT;
    let overlay = document.getElementById("screen-warning");

    if(toSmall){
        if(!overlay){
            overlay = createScreenWarning();
            document.body.appendChild(overlay);
        }
        overlay.querySelector("#screen-size-display").textContent = `Current Size: ${w}x${h}px`;
        document.body.style.overflow = "hidden";
    } else {
        if (overlay) overlay.remove();
        document.body.style.overflow = "";
    }
}