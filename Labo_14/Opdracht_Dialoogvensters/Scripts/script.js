const setup = () => {
    window.alert("You are being a dum dum.");
    window.confirm("Are you sure you would like to be a dum dum?");
    window.prompt("How much of a dum dum are you?");

    console.log(window.confirm("Are you sure you would like to be a dum dum?"));
    console.log(window.confirm("Are you sure you would like to be a dum dum?"));
    console.log( window.prompt("How much of a dum dum are you?"));
    console.log( window.prompt("How much of a dum dum are you?"));





}
window.addEventListener("load", setup);