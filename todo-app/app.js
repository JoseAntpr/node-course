require('colors');
const { showMenu, stop } = require('./helpers/messages');

console.clear();

const main = async() => {
    
    console.log("Hola Mundo");

    let opt = '';

    do {
       opt = await showMenu();
       await stop()
    } while (opt !== 0);



}

main();