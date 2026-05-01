const setup = () => {

    let global = {
        ArrayUsedCommands : [],
        ARRAYCOMMANDPREFIXES : [
            ['g','www.google.com/search?q=', 'Google', 'blue'],
            ['y','www.youtube.com/results?search_query=', 'Youtube', 'red'],
            ['x','x.com/hashtag/', 'X', 'lightblue'],
            ['i','www.instagram.com/explore/tags/', 'Instagram', 'magenta'],
        ]
    }

    const startup = () => {
        let searchButton = document.querySelector('button');
        searchButton.addEventListener('click', search);
        let sortButton = document.querySelector('.sort')
        sortButton.addEventListener('click', sortSearches)
        if (localStorage.getItem('Internet Start Page History')!==null){
            global.ArrayUsedCommands =  JSON.parse(localStorage.getItem('Internet Start Page History'));
            if (global.ArrayUsedCommands !== null) {
                for (let i = 0; i < global.ArrayUsedCommands.length; i++) {
                    createCard(global.ArrayUsedCommands[i].command, global.ArrayUsedCommands[i].url);
                }
            }
        }
        }


    const search = () => {
        let command = document.querySelector('input').value;
        if (validate(command)) {
            let url = 'https://'+global.ARRAYCOMMANDPREFIXES[getCommandIndex(command)][1]+command.substring(3);
            open(url);
            createCard(command, url);
            document.querySelector('input').value = '';
            let h = {
                title: global.ARRAYCOMMANDPREFIXES[getCommandIndex(command)][2],
                text: command.substring(3),
                url: url,
                command: command,
            }
            global.ArrayUsedCommands.push(h);
            localStorage.setItem("Internet Start Page History", JSON.stringify(global.ArrayUsedCommands));
        }
    }

    const validate = (command) => {
        if (!command.startsWith("/")) {
            window.alert("Invalid command");
            return false;
        } else {
            if (getCommandIndex(command) === -1 || command.length<=1) {
                window.alert("Unknown command prefix");
                return false;
            } else {

                return true;
            }
            }
        }


    const createCard = (command, url) => {
        let col = document.createElement('div');
        col.setAttribute('class', 'col-4');
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.style.backgroundColor = global.ARRAYCOMMANDPREFIXES[getCommandIndex(command)][3];
        col.appendChild(card);
       let title = document.createElement('h3');
       title.setAttribute('class', 'card-title');
       title.textContent = global.ARRAYCOMMANDPREFIXES[getCommandIndex(command)][2] ;
       card.appendChild(title);
       let text = document.createElement('p',);
       text.setAttribute('class', 'card-text');
       text.textContent = command.substring(3);
       card.appendChild(text);
       let button = document.createElement('button');
       button.setAttribute('data-url', url);
       button.textContent = "GO!";
       button.addEventListener('click', openTheURL);
       card.appendChild(button);
       let div = document.querySelector("#history");
       let row = document.querySelector(".row");
        row.appendChild(col);
    }

    const getCommandIndex = (command) => {
        let gevonden = false
        for (let i = 0; i < global.ARRAYCOMMANDPREFIXES.length; i++) {
            if (global.ARRAYCOMMANDPREFIXES[i][0] === command.substring(1,2)) {
                gevonden = true;
                return i;
            }
        }
        if (!gevonden) {
            return -1;
        }
    }

    const openTheURL = (event) => {
        let url = event.currentTarget.getAttribute('data-url');
        open(url);
    }

    const sortSearches = () => {
        global.ArrayUsedCommands.sort(compareSearches);
        let row = document.querySelector(".row");
        row.innerHTML = '';
        localStorage.setItem("Internet Start Page History", JSON.stringify(global.ArrayUsedCommands));
        if (global.ArrayUsedCommands !== null) {
            for (let i = 0; i < global.ArrayUsedCommands.length; i++) {
                createCard(global.ArrayUsedCommands[i].command, global.ArrayUsedCommands[i].url);
            }
        }
    }

    const compareSearches = (a,b) => {
        if (a.title===b.title){
            return a.text.localeCompare(b.text);
        } else {
            if (a.title.localeCompare(b.title)>0){
                return 1
            } else {
                return -1;
            }
        }
    }

    startup();
}
window.addEventListener("load", setup);