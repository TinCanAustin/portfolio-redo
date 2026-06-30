export function updateTime(hourTag, minTag){
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    document.querySelector(hourTag).textContent = hour;
    document.querySelector(minTag).textContent = min;
}