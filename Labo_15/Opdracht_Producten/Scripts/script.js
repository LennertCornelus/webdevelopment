const setup = () => {
    let herberekenen = document.getElementById('herberekenen');

    const update = () => {
        let prijs =document.getElementsByClassName('prijs');
        let aantal = document.getElementsByClassName('aantal');
        let btw = document.getElementsByClassName('btw');
        let subtotaal = document.getElementsByClassName('subtotaal');
        let totaal = document.getElementById('totaal');
        let newTotaal = 0;

        for (let i = 0; i < prijs.length; i++) {
            let tempTotaal = parseInt(prijs[i].innerText) * aantal[i].value * ((100+parseInt(btw[i].innerText))/100);
            subtotaal[i].innerText = `${tempTotaal.toFixed(2)} Eur`;
             newTotaal += tempTotaal;
        }
        totaal.innerText = `${newTotaal.toFixed(2)} Eur`;
    }

    herberekenen.addEventListener('click', update)
}
window.addEventListener("load", setup);