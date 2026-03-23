const setup = () => {
let button = document.querySelector('button');

const addToDiv = () => {
    let p = document.querySelector('p');
    let div = document.querySelector("#myDIV");
    div.appendChild(p);
}

button.addEventListener('click', addToDiv);
}
window.addEventListener("load", setup);