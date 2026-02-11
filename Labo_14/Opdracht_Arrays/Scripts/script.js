const setup = () => {
    const familienamen = ['Shan','Saltzman','Souen','Simpson','Sullivan','Shuzen'];

    console.log(familienamen.length);

    console.log(familienamen[0]);
    console.log(familienamen[2]);
    console.log(familienamen[4]);

    const VoegNaamToe = () => {
        familienamen.push(prompt('What is your last name?'));
    }

    VoegNaamToe();
    console.log(familienamen);

    console.log(familienamen.join(" , "));
}
window.addEventListener("load", setup);

