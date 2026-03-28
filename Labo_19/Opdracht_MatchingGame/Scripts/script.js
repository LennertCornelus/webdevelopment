const setup = () => {
    let global = {
        AANTAL_HORIZONTAAL: 4,
        AANTAL_VERTICAAL: 3,
        AANTAL_KAARTEN: 6,
        isBusy: false,
        CARD_SOUNDS: {
            "Images/kaart1.png":new Audio("Sounds/Wither_skeleton_step1.mp3"),
            "Images/kaart2.png":new Audio("Sounds/Zombie_idle3.mp3"),
            "Images/kaart3.png":new Audio("Sounds/Enderman_idle2.mp3"),
            "Images/kaart4.png":new Audio("Sounds/Skeleton_hurt4.mp3"),
            "Images/kaart5.png":new Audio("Sounds/Hurt_Old.mp3"),
            "Images/kaart6.png":new Audio("Sounds/Creeper_fuse.mp3"),
            "Correct":new Audio("Sounds/XP_Old.mp3"),
            "Fout":new Audio("Sounds/Explosion1.mp3"),
            "Win": new Audio("Sounds/Challenge_complete.mp3")
        }
    }

    const placeCards = () => {
        let cardImages = new Array();

        let achterkant = "Images/achterkant.png";
        let speelVeld = document.querySelector("#speelveld");
        for (let i = 1; i < global.AANTAL_KAARTEN+1; i++) {
            cardImages.push("Images/kaart"+i+".png");
            cardImages.push("Images/kaart"+i+".png");
        }

        for (let i = cardImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardImages[i], cardImages[j]] = [cardImages[j], cardImages[i]];
        }
        for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            row.style.display = "flex";
            speelVeld.appendChild(row);
            for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
                let kaart = document.createElement("img");
                kaart.setAttribute("data-src",cardImages.shift());
                kaart.setAttribute('src', achterkant);
                kaart.addEventListener("click", kaartOmdraaien)
                row.appendChild(kaart);
            }
        }
    }

    const kaartOmdraaien = (event) => {
        if (global.isBusy === false && event.target.getAttribute("class") !== "omgedraaid") {
            let kaart = event.target;
            let source = kaart.getAttribute("data-src");
            global.CARD_SOUNDS[source].play();
            kaart.setAttribute("src", kaart.getAttribute("data-src"));
            kaart.setAttribute("class", "omgedraaid");
            let omgedraaid = document.querySelectorAll(".omgedraaid");
            if (omgedraaid.length === 2) {
                if (omgedraaid[0].getAttribute("src") === omgedraaid[1].getAttribute("src")) {
                    omgedraaid[0].setAttribute("class", "omgedraaid juist");
                    omgedraaid[1].setAttribute("class", "omgedraaid juist");
                    global.isBusy = true;
                    setTimeout(continueGame, 1000);
                } else {
                    omgedraaid[0].setAttribute("class", "omgedraaid fout");
                    omgedraaid[1].setAttribute("class", "omgedraaid fout");
                    global.isBusy = true;
                    setTimeout(continueGame, 1000);
                }
            }
        }

    }

    const continueGame = () => {
        let omgedraaid = document.querySelectorAll(".omgedraaid");
        if (omgedraaid[0].getAttribute("src") === omgedraaid[1].getAttribute("src")) {
            let src =
            global.CARD_SOUNDS.Correct.play();
            omgedraaid[0].removeEventListener("click", kaartOmdraaien);
            omgedraaid[1].removeEventListener("click", kaartOmdraaien);
            omgedraaid[0].setAttribute("class", "gevonden");
            omgedraaid[1].setAttribute("class", "gevonden")
            global.isBusy = false;
        } else {
            global.CARD_SOUNDS.Fout.play();
            omgedraaid[0].removeAttribute("class");
            omgedraaid[0].setAttribute("src", "Images/achterkant.png");
            omgedraaid[1].removeAttribute("class");
            omgedraaid[1].setAttribute("src", "Images/achterkant.png");
            global.isBusy = false;
        }
        let kaarten = document.querySelectorAll(".gevonden");
        if (kaarten.length === global.AANTAL_KAARTEN*2) {
        global.CARD_SOUNDS.Win.play();
        window.alert("YOU WIN!!!");
        }
    }


placeCards();

}
window.addEventListener("load", setup);