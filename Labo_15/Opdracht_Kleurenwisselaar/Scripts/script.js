const setup = () => {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");

    const update1 = () => {
        let button1 = document.getElementById("button1");
        if (button1.className === "clicked") {
            button1.className = "";
        } else {
            button1.className = "clicked";
        }
    }

    const update2 = () => {
        let button2 = document.getElementById("button2");
        if (button2.className === "clicked") {
            button2.className = "";
        } else {
            button2.className = "clicked";
        }
    }

    const update3 = () => {
        let button3 = document.getElementById("button3");
        if (button3.className === "clicked") {
            button3.className = "";
        } else {
            button3.className = "clicked";
        }
    }

    button1.addEventListener("click", update1)
    button2.addEventListener("click", update2)
    button3.addEventListener("click", update3)
}
window.addEventListener("load", setup);