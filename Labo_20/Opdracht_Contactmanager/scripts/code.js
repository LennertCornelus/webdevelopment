let global = {
    personen: []
};

// Event listener (btnBewaar click)

// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    if (document.querySelector(".errorMessage") !== null) {
        let select = document.querySelector("#lstPersonen");
        if (select.options.selectedIndex === -1) {
            let persoon = {};
            setAttributen(persoon);
            global.personen.push(persoon);
            let option = document.createElement("option");
            option.text = persoon.voornaam +" "+ persoon.familienaam;
            option.id = "id"+global.personen.indexOf(persoon).toString();
            select.appendChild(option);
        } else {
            let persoon = getSelectedPersoon();
            setAttributen(persoon);
            let index = global.personen.indexOf(persoon)
            let option = document.querySelector("#id"+index);
            option.text = persoon.voornaam +" "+ persoon.familienaam;
        }

    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.querySelector("#txtVoornaam").value = "";
    document.querySelector("#txtFamilienaam").value = "";
    document.querySelector("#txtGeboorteDatum").value = "";
    document.querySelector("#txtEmail").value = "";
    document.querySelector("#txtAantalKinderen").value = "";


    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const updateVelden = () => {
    let persoon = getSelectedPersoon();
    document.querySelector("#txtVoornaam").value = persoon.voornaam;
    document.querySelector("#txtFamilienaam").value = persoon.familienaam;
    document.querySelector("#txtGeboorteDatum").value = persoon.geboortedatum;
    document.querySelector("#txtEmail").value = persoon.email;
    document.querySelector("#txtAantalKinderen").value = persoon.aantalKinderen;

}

const getSelectedPersoon = () => {
    let select = document.querySelector("#lstPersonen");
    let options = select.children;
    let option = options[select.options.selectedIndex];
    let index = parseInt(option.id.substring(2));
    return global.personen[index];

}

const setAttributen = (persoon) => {
    persoon.voornaam = document.querySelector("#txtVoornaam").value;
    persoon.familienaam = document.querySelector("#txtFamilienaam").value;
    persoon.geboortedatum = document.querySelector("#txtGeboorteDatum").value;
    persoon.email = document.querySelector("#txtEmail").value;
    persoon.aantalKinderen = document.querySelector("#txtAantalKinderen").value;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", updateVelden);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);