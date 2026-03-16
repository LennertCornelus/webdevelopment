const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel"

    let naarHet = (input) => {
        let output = "";
        let lastDe = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === 'd' && input[i+1] === "e") {
                output = output+input.substring(lastDe, i);
                output = output + "het"
                lastDe = i+2;
            }
        }
        output = output+input.substring(lastDe, input.length);
        console.log(output)
    }
    naarHet(tekst);

    let newText = "de man riep de";

    naarHet(newText);
}
window.addEventListener("load", setup);