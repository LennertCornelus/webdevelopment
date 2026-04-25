const setup = () => {
    let global = {
        redSlider : document.getElementById("red"),
        greenSlider : document.getElementById("green"),
        blueSlider : document.getElementById("blue"),
        redValue : document.getElementById("valRed"),
        greenValue : document.getElementById("valGreen"),
        blueValue : document.getElementById("valBlue"),
        swatch : document.getElementById("swatch"),
        save : document.querySelector("#save"),
        body : document.querySelector("body"),
        del : document.createElement("button"),
        favorites : [],
        favoritesDiv : []
    }

    const update = () => {
        global.redValue.textContent = global.redSlider.value;
        global.greenValue.textContent = global.greenSlider.value;
        global.blueValue.textContent = global.blueSlider.value;
        global.swatch.style.background = `rgb(${global.redSlider.value}, ${global.greenSlider.value}, ${global.blueSlider.value})`;
        localStorage.setItem("red", global.redValue.textContent);
        localStorage.setItem("green", global.greenValue.textContent);
        localStorage.setItem("blue", global.blueValue.textContent);
    }

    const set = (event) => {
        let div = event.target;
        global.redSlider.value = div.attributes[3].value;
        global.greenSlider.value = div.attributes[4].value;
        global.blueSlider.value = div.attributes[5].value;
        update();
    }

    const remove = (event) => {
        let div = event.currentTarget.parentNode;
        let swatchObject = {
            red : div.attributes[3].value,
            green : div.attributes[4].value,
            blue : div.attributes[5].value,
        }
        div.remove();
         let index = global.favoritesDiv.indexOf(div)
        global.favoritesDiv.splice(index, 1);
        global.favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(global.favorites));
        event.stopPropagation();
    }

    const saving = () => {
        let bestaand = false;
        let divs = document.querySelectorAll(".swatch");
        for (let i = 0; i<divs.length; i++) {
            if (divs[i].getAttribute("data-red") === global.redSlider.value && divs[i].getAttribute("data-green") === global.greenSlider.value && divs[i].getAttribute("data-blue") === global.blueSlider.value) {
                bestaand = true;
            }
        }
        if (!bestaand) {
            let newSwatch = global.swatch.cloneNode();
            newSwatch.style.background = `rgb(${global.redSlider.value}, ${global.greenSlider.value}, ${global.blueSlider.value})`;
            newSwatch.setAttribute("data-red",global.redSlider.value);
            newSwatch.setAttribute("data-green",global.greenSlider.value);
            newSwatch.setAttribute("data-blue",global.blueSlider.value);
            newSwatch.setAttribute("id","");
            newSwatch.setAttribute("class",'swatch swatch2');
            let newDel = global.del.cloneNode();
            newDel.setAttribute("class","delete");
            newDel.textContent = "X";
            global.body.appendChild(newSwatch);
            newSwatch.appendChild(newDel);
            newSwatch.addEventListener("click", set);
            newDel.addEventListener("click", remove);
            let swatchObject = {
                red : newSwatch.attributes[3].value,
                green : newSwatch.attributes[4].value,
                blue : newSwatch.attributes[5].value,
            }
            global.favorites.push(swatchObject);
            global.favoritesDiv.push(newSwatch);
            console.log(global.favorites);
            localStorage.setItem("favorites", JSON.stringify(global.favorites));
            console.log(localStorage);
        }
    }

    global.redSlider.addEventListener("change", update);
    global.greenSlider.addEventListener("change", update);
    global.blueSlider.addEventListener("change", update);
    global.redSlider.addEventListener("input", update);
    global.greenSlider.addEventListener("input", update);
    global.blueSlider.addEventListener("input", update);

    global.save.addEventListener("click", saving);

    const load = () => {
        let localFavorites = JSON.parse(localStorage.getItem("favorites"));
        for (let i =0; i<localFavorites.length; i++) {
            global.redSlider.value = parseInt(localFavorites[i].red);
            global.greenSlider.value = parseInt(localFavorites[i].green);
            global.blueSlider.value = parseInt(localFavorites[i].blue);
            saving();
        }
        global.redSlider.value = parseInt(localStorage.getItem("red"));
        global.greenSlider.value = parseInt(localStorage.getItem("green"));
        global.blueSlider.value = parseInt(localStorage.getItem("blue"));

    }
    load();
    update();
}
window.addEventListener("load", setup);