
const { 
    inquirerMenu, 
    stop, 
    readInput 
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

require('colors');

const main = async() => {

    let opt = ''
    const tasks = new Tasks()
    do{
        opt = await inquirerMenu();
        

        switch(opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.create(desc);
                break
            case '2':
                console.log( tasks.list );
                break

        }

        await stop()
    } while (opt !== 0);
}

main();