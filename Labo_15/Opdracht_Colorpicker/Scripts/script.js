const setup = () => {

    let redSlider = document.getElementById("red");
    let greenSlider = document.getElementById("green");
    let blueSlider = document.getElementById("blue");
    let redValue = document.getElementById("valRed");
    let greenValue = document.getElementById("valGreen");
    let blueValue = document.getElementById("valBlue");
    let swatch = document.getElementById("swatch")

    const update = () => {
        let redSlider = document.getElementById("red");
        let greenSlider = document.getElementById("green");
        let blueSlider = document.getElementById("blue");
        redValue.innerHTML = redSlider.value;
        greenValue.innerHTML = greenSlider.value;
        blueValue.innerHTML = blueSlider.value;
        swatch.style.background = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    }

    redSlider.addEventListener("change", update);
    greenSlider.addEventListener("change", update);
    blueSlider.addEventListener("change", update);
    redSlider.addEventListener("input", update);
    greenSlider.addEventListener("input", update);
    blueSlider.addEventListener("input", update);



}
window.addEventListener("load", setup);