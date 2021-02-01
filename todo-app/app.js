const { inquirerMenu, stop } = require('./helpers/inquirer');

require('colors');

const main = async() => {

    let opt = ''
    do{
        opt = await inquirerMenu();
        console.log({opt})

        await stop()
    } while (opt !== 0);
}

main();