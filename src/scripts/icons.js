export class Icons {
    constructor({className, root}){
        this.className = className;
        this.root = root;
        this.toLoad = {
            "About Me": "/icons/user.png",
            "Skills": "/icons/skills.png",
            "Resume": "/icons/cv.png",
            "Music": "/icons/music.png",
            "GitHub": "/icons/github.png",
            "Linkdin": "/icons/linkdin.png",
            "Itch.io": "/placeholder.png",
            "Projects": "/placeholder.png",
        }
    }

    loadIcons(){
        const container = document.querySelector(this.root);
        if (!container) return;

        Object.keys(this.toLoad).forEach(key => {
            const iconWrapper = document.createElement("div");
            iconWrapper.className = this.className;

            const icon = new Image(64, 64);
            icon.src = this.toLoad[key];

            const text = document.createElement("p");
            text.textContent = key;

            iconWrapper.appendChild(icon);
            iconWrapper.appendChild(text);

            container.appendChild(iconWrapper);
        });
    }

    setIconsAbsolute(){
        const icons = document.querySelectorAll(`.${this.className}`);
        if(!icons) return;

        const positions = Array.from(icons).map(icon => {
            return {
                left: icon.offsetLeft,
                top: icon.offsetTop
            }
        });

        icons.forEach((icon, index)=>{
            icon.style.left = `${positions[index].left}px`;
            icon.style.top = `${positions[index].top}px`;
            icon.style.position = 'absolute';
        });
    }

    addEvent(callback){
        const icons = document.querySelectorAll(`.${this.className}`);
        if(!icons) return;

        icons.forEach(icon=>{
            callback(icon);
        });
    }
}