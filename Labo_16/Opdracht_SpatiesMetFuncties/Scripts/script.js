const setup = () => {
    let button = document.getElementById("split");

    const split = () => {
        let input = document.getElementById("text").value;
        let output = maakMetSpaties(input);
        console.log(output);
    }

    const maakMetSpaties = (inputText) => {
        let result= "";
        inputText = inputText.replaceAll(' ','');
        inputText = inputText.split('');
        for (let i = 0; i < inputText.length; i++) {
            result += inputText[i]+" ";
        }
        return result;
    }
    button.addEventListener("click", split)
}
window.addEventListener("load", setup);