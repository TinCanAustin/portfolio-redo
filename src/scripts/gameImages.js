class Images{
    constructor({toLoad, w, h}){
        this.toLoad = toLoad;
        this.w = w;
        this.h = h

        this.images = [];

        this.toLoad.forEach(imagePath  => {
            const img = new Image(this.w, this.h);
            img.src = imagePath;
            img.onload = ()=>{
                this.images.push(img);
            }
        });
    }
}

const gameList = [
    "./games/delta.png", 
    "./games/ds.jpg",
    "./games/fate.png",
    "./games/fear_and_hunger.png",
    "./games/gmod.jpg",
    "./games/honkai.png",
    "./games/museDash.jpg",
    "./games/oneshot.png",
    "./games/persona5.png",
    "./games/skullgirls.png",
    "./games/trackmania.png",
    "./games/undertale.png",
    "./games/waframe.png"
];
export const gameImagesList = new Images({
    toLoad: gameList,
    w: 250,
    h: 120
});

const LanguagesList = [
    './skills/Python-logo-notext',
    './skills/C_Programming_Language.svg',
    './skills/ISO_C++_Logo.svg',
    './skills/Logo_C_sharp.png',
    './skills/Java_programming_language_logo.svg',
    './skills/Unofficial_JavaScript_logo_2.svg',
    './skills/Rust_programming_language_black_logo.png',
    './skills/Dart-logo.png',
    './skills/Godot_icon.svg'
];
export const LangageImageList = new Images({
    toLoad: LanguagesList,
    w: 64,
    h: 64
});

const Tools = [
    './skills/Visual_Studio_Code_1.35_icon.svg',
    './skills/Git_icon.svg',
    './skills/action.png',
    './skills/docker-svgrepo-com.svg',
    './skills/googleML.png',
    './skills/Amazon_Web_Services_Logo.svg',
    './skills/UnityWhiteLogo.png',
    './skills/Playwright--Streamline-Svg-Logos.svg',
    './skills/Selenium_Logo.png',
    './skills/Railway_Logo.png'
];
export const ToolsImageList = new Images({
    toLoad: Tools,
    w: 64,
    h: 64
});