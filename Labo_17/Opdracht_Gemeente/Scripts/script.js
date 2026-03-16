const setup = () => {
    let ok = document.getElementById('ok');
    let annuleren = document.getElementById('annuleren');

    const sorting = (a,b) => {
        return a.value.localeCompare(b.value);
    }

    const order = () => {
        let options = document.getElementsByClassName('option');
        options.sort(sorting);
        let select = document.getElementById('GemeenteKeuze');
        select.empty();
        for (let i = 0; i < options.length; i++) {
            let option = options[i].innerHTML;
            select.insertAdjacentHTML('beforeend', option);
        }
    }

    const toevoegen = () => {
        let gemeente = document.getElementById('Gemeente').value;
        if (gemeente.localeCompare("stop")!==0) {
            let keuze = document.getElementById('GemeenteKeuze');
            let option = `<option value=\"${gemeente.toLowerCase()}\">${gemeente}</option>`
            keuze.insertAdjacentHTML('beforeend', option);
        }
        order();
    }

    const clear = () => {
        let gemeente = document.getElementById('Gemeente');
        gemeente.value = '';
    }

    ok.addEventListener('click', toevoegen);
    annuleren.addEventListener('click', clear);
}
window.addEventListener("load", setup);