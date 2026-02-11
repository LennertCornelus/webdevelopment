const setup = () => {
    let textWijzigen = document.getElementById("wijzigen");
    const wijzigText = () => {
        let pElement=document.getElementById("txtOutput");
        pElement.innerHTML="Welkom!";
    }
    textWijzigen.addEventListener("click", wijzigText)

}
window.addEventListener("load", setup);
