const setup = () => {
let validate = document.getElementById("submit");

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

const checkDate = (date) => {
    dates = date.split("-");
    return !!(dates[0].length === 4 && isGetal(dates[0]) && dates[1].length === 2 && dates[2].length === 2 && dates[1].indexOf("-") === -1 && dates[2].indexOf("-") === -1 && dates.length === 3);
}

const controleer = () => {
    let voornaam = document.getElementById("voornaam");
    let familienaam = document.getElementById("familienaam");
    let geboortedatum = document.getElementById("geboortedatum");
    let email = document.getElementById("email");
    let aantalKinderen = document.getElementById("aantalKinderen");

    let voornaamMelding = document.getElementById("voornaamMelding");
    let familienaamMelding = document.getElementById("familienaamMelding");
    let geboorteDatumMelding = document.getElementById("geboortedatumMelding");
    let emailMelding = document.getElementById("emailMelding");
    let aantalKinderenMelding = document.getElementById("aantalKinderenMelding");
    let validated = true;

    let voornaamInput = voornaam.value.trim();
    if (voornaamInput.length > 30) {
        voornaam.className = "nietGeldig";
        voornaamMelding.innerText = "error: max 30 karakters";
        validated = false;
    } else {
        voornaam.className = "";
        voornaamMelding.innerText = "";
    }

    let familienaamInput = familienaam.value.trim();
    if (familienaamInput.length === 0) {
        familienaam.className = "nietGeldig";
        familienaamMelding.innerText = "error: verplicht veld";
        validated = false;
    } else {
        if (familienaamInput.length > 50) {
            familienaam.className = "nietGeldig";
            familienaamMelding.innerText = "error: max 50 karakters";
            validated = false;
        } else {
            familienaam.className = "";
            familienaamMelding.innerText = "";
        }
    }

    let geboorteDatumInput = geboortedatum.value.trim();
    if (geboorteDatumInput.length === 0) {
        geboortedatum.className = "nietGeldig";
        geboorteDatumMelding.innerText = "error: verplicht veld";
        validated = false;
    } else {
        if (!checkDate(geboorteDatumInput)) {
            geboortedatum.className = "nietGeldig";
            geboorteDatumMelding.innerText = "error: formaat is niet jjjj-mm-dd";
            validated = false;
        } else {
            geboortedatum.className = "";
            geboorteDatumMelding.innerText = "";
        }
    }

    let emailInput = email.value.trim();
    if (emailInput.length === 0) {
        email.className = "nietGeldig";
        emailMelding.innerText = "error: verplicht veld";
        validated = false;
    } else {
        let emails = emailInput.split("@")
        if (!(emails.length === 2 && emails[0].length > 0 && emails[1].length > 0)) {
            email.className = "nietGeldig";
            emailMelding.innerText = "error: geen geldig email adres";
            validated = false;
        } else {
            email.className = "";
            emailMelding.innerText = "";
        }
    }

    let aantalKinderenInput = aantalKinderen.value.trim();

    if (!isGetal(aantalKinderenInput) || aantalKinderenInput.indexOf("-") !== -1) {
        aantalKinderen.className = "nietGeldig";
        aantalKinderenMelding.innerText = "error: is geen positief getal";
        validated = false;
    } else {
        if (aantalKinderenInput.length >2) {
            aantalKinderen.className = "nietGeldig";
            aantalKinderenMelding.innerText = "error: is te vruchtbaar";
            validated = false;
        } else {
            aantalKinderen.className = "";
            aantalKinderenMelding.innerText = "";
        }
    }

    if (validated) {
        window.alert("proficiat!");
    }

}

validate.addEventListener("click", controleer);
}
window.addEventListener("load", setup);