const setup = () => {
let txtInput = document.getElementById("txtInput");
let substring = document.getElementById("substring");
let beginSubstring = document.getElementById("beginSubstring");
let eindeSubstring = document.getElementById("endSubstring");
let txtOutput = document.getElementById("txtOutput");

const doSubstring = () => {
    let text = txtInput.value;
    txtOutput.innerHTML = text.substring(beginSubstring.value,eindeSubstring.value);
}

substring.addEventListener("click", doSubstring);
}
window.addEventListener("load", setup);