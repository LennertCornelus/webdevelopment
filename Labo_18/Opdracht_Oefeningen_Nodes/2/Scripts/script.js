const setup = () => {
let listItems = document.querySelectorAll('li');
for (let i = 0; i<listItems.length; i++) {
    listItems[i].setAttribute('class', 'listitem');
}
let img = document.createElement('img');
img.setAttribute('src','https://cdn.wikirby.com/1/10/Anime_Watermelon.png?20200122134451');
let body = document.querySelector('body');
body.appendChild(img);

}
window.addEventListener("load", setup);