const setup = () => {
    const eersteProgramma = () => {
        let student = {
            voornaam : "Jan",
            familienaam : "Janssens",
            geboorteDatum : new Date("1993-12-31"),
            adres : { // een object
                straat : "Kerkstraat 13",
                postcode : "8500",
                gemeente : "Kortrijk"
            },
            isIngeschreven : true,
            namenVanExen :
                ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
            aantalAutos : 2,
        }

        let JSONStudent = JSON.stringify(student);
        console.log(JSONStudent);
        console.log(student.geboorteDatum.toISOString());
    }

    const tweedeProgramma = () => {
        let student = JSON.parse('{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"}}')
        console.log(student.voornaam);
        console.log(student.namenVanExen);
        console.log(student.geboorteDatum);
        console.log(student);
    }

    eersteProgramma();
    tweedeProgramma();
}
window.addEventListener("load", setup);