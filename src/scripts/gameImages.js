class GameImages{
    constructor(){
        this.toLoad = [
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

        this.images = [];

        this.toLoad.forEach(imagePath  => {
            const img = new Image(250, 120);
            img.src = imagePath;
            img.onload = ()=>{
                this.images.push(img);
            }
        });
    }
}

export const gameImagesList = new GameImages();