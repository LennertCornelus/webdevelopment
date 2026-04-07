const setup = () => {
    const berekenDagenOpWereldbol = () => {
        geboorteDatum = new Date("2006-05-22");
        huidigeDatum = new Date();
        console.log("Ik besta nu al "+((huidigeDatum-geboorteDatum)/86400000).toFixed()+" dagen.");
    }

    berekenDagenOpWereldbol();
}
window.addEventListener("load", setup);