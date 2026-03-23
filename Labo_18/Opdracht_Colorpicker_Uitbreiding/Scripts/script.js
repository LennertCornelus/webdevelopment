const setup = () => {

    let redSlider = document.getElementById("red");
    let greenSlider = document.getElementById("green");
    let blueSlider = document.getElementById("blue");
    let redValue = document.getElementById("valRed");
    let greenValue = document.getElementById("valGreen");
    let blueValue = document.getElementById("valBlue");
    let swatch = document.getElementById("swatch");
    let save = document.querySelector("#save");
    let body = document.querySelector("body");
    let del = document.createElement("button");

    const update = () => {
        redValue.textContent = redSlider.value;
        greenValue.textContent = greenSlider.value;
        blueValue.textContent = blueSlider.value;
        swatch.style.background = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    }

    const set = (event) => {
        let div = event.target;
        redSlider.value = div.attributes[3].value;
        greenSlider.value = div.attributes[4].value;
        blueSlider.value = div.attributes[5].value;
        update();

    }

    const remove = (event) => {
        let div = event.currentTarget.parentNode;
        div.remove();
        event.stopPropagation();
    }

    const saving = () => {
        let newSwatch = swatch.cloneNode();
        newSwatch.setAttribute("data-red",redSlider.value);
        newSwatch.setAttribute("data-green",greenSlider.value);
        newSwatch.setAttribute("data-blue",blueSlider.value);
        newSwatch.setAttribute("id","");
        newSwatch.setAttribute("class",'swatch swatch2');
        let newDel = del.cloneNode();
        newDel.setAttribute("class","delete");
        newDel.textContent = "X";
        body.appendChild(newSwatch);
        newSwatch.appendChild(newDel);
        newSwatch.addEventListener("click", set);
        newDel.addEventListener("click", remove);
    }

    redSlider.addEventListener("change", update);
    greenSlider.addEventListener("change", update);
    blueSlider.addEventListener("change", update);
    redSlider.addEventListener("input", update);
    greenSlider.addEventListener("input", update);
    blueSlider.addEventListener("input", update);

    save.addEventListener("click", saving);


    update();
}
window.addEventListener("load", setup);