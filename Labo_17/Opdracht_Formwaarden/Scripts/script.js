const setup = () => {
let knop = document.getElementById("resultaat");

let print = () => {
    let roker = document.getElementById("roker").checked;
    if (roker) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }
    let moedertaal = document.getElementsByName("moedertaal");
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log("moedertaal is "+moedertaal[i].value);
        }
    }
    let buurland = document.getElementById("buurland").options;
    console.log("favorite buurland is "+buurland[buurland.selectedIndex].text);
    let bestelling = document.getElementById("bestelling").options;
    let bestellingString = "bestelling bestaat uit ";
    for (let i = 0; i < bestelling.length; i++) {
        if (bestelling[i].selected) {
            bestellingString += bestelling[i].text+" ";
        }
    }
    console.log(bestellingString);
}

knop.addEventListener("click", print);
}
window.addEventListener("load", setup);