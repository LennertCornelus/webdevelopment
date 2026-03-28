
const setup = () => {

    let global = {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal ms voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we kunnen annuleren
    };

    const explode = () => {
        clearTimeout(global.timeoutId);
        window.alert("GAME OVER");

    }

    const hit = (event) => {
        event.target.remove();
        clearTimeout(global.timeoutId);
        global.score++;
        let score = document.querySelector("span");
        score.textContent = global.score;
        placeItem();
    }

    const placeItem = () => {
        let getal = Math.floor(Math.random()*global.IMAGE_COUNT);
        let item = document.createElement("img");
        let div = document.querySelector("div");
        item.setAttribute("src", global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX);
        item.setAttribute("alt", "Image "+getal);
        item.setAttribute("id", "target");
        item.style.size = global.IMAGE_SIZE;
        item.style.left = Math.random()*(600-global.IMAGE_SIZE/2) + "px";
        item.style.top = Math.random()*(800-global.IMAGE_SIZE/2) + "px";
        div.appendChild(item);
        global.timeoutId = setTimeout(replace, global.MOVE_DELAY)
        if (getal === 0) {
            item.addEventListener("click", explode);
        } else {
            item.addEventListener("click", hit);
        }
    }



    const replace = () => {
        let img = document.querySelector("img");
        img.remove();
        placeItem();
    }

    const play = () => {
        global.score = 0;
        let score = document.querySelector("span");
        score.textContent = global.score;
        replace();
    }

    const knop = () => {
        let button = document.querySelector("button");
        button.addEventListener("click", play);
    }


    knop();
};




window.addEventListener("load", setup);


