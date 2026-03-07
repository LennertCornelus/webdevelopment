const setup = () => {

    let tekst = "De man van An geeft geen hand aan ambetante verwanten"
    let positie = 0;
    let aantal = -1;
    while (positie !== -1) {
        let newpositie = tekst.toLowerCase().indexOf("an", positie+2);
        positie = newpositie;
        aantal++;
    }
    console.log(`De string 'an' komt ${aantal} keer voort in de tekst.`)

    positie = tekst.length-1;
    aantal = -1;
    while (positie !== -1) {
        let newpositie = tekst.toLowerCase().lastIndexOf("an", positie-2);
        positie = newpositie;
        aantal++;
    }
    console.log(`De string 'an' komt ${aantal} keer voort in de tekst.`)



}
window.addEventListener("load", setup);