const setup = () => {
    let tekst = "onoorbaar";

    let trigramsMaken = (input) => {
        let output = "";
        for (let i = 0; i < input.length-2; i++) {
            output = output + input[i]+input[i+1]+input[i+2]+" - ";
        }
        console.log(output.substring(0, output.length-3));
    }

    trigramsMaken(tekst);
}
window.addEventListener("load", setup);