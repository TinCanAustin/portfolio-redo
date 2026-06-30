export function move(icon){
    icon.addEventListener("mousedown", (e)=>{
        e.preventDefault();

        const offsetX = e.clientX - icon.offsetLeft;
        const offsetY = e.clientY - icon.offsetTop;

        function onDrag(moveEvent){
            icon.style.cursor = 'move';

            icon.style.left = `${moveEvent.clientX - offsetX}px`;
            icon.style.top = `${moveEvent.clientY - offsetY}px`;
        }

        window.addEventListener("mousemove", onDrag);

        window.addEventListener("mouseup", function onMouseUp() {
            icon.style.cursor = 'default';
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", onMouseUp);
        });
    });
}

export function re_move(page){
    page.querySelector(".header").addEventListener("mousedown", (e)=>{
        e.preventDefault();

        const offsetX = e.clientX - page.offsetLeft;
        const offsetY = e.clientY - page.offsetTop;

        function onDrag(moveEvent){
            page.style.cursor = 'move';

            page.style.left = `${moveEvent.clientX - offsetX}px`;
            page.style.top = `${moveEvent.clientY - offsetY}px`;
        }

        window.addEventListener("mousemove", onDrag);

        window.addEventListener("mouseup", function onMouseUp() {
            page.style.cursor = 'default';
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", onMouseUp);
        });
    });
}