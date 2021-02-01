const inquirer = require('inquirer');
require('colors');

const menuOpt = {
    type: 'list',
    name: 'option',
    message: '¿Qué acción quiere realizar?',
    choices: [
        { 
            value: '1',
            name: '1. Crear tarea'
        },
        { 
            value: '2',
            name: '2. Listar tareas'
        },
        { 
            value: '3',
            name: '3. Listar tareas completadas'
        },
        { 
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        { 
            value: '5',
            name: '5. Completar tarea'
        },
        { 
            value: '6',
            name: '6. Borrar tarea'
        },
        { 
            value: '0',
            name: '0. Salir'
        }
    ]
}

const inquirerMenu = async() => {
    console.clear();
    console.log("- - - - - - - - - - - ".green);
    console.log("Seleccione una opción".white);
    console.log("- - - - - - - - - - - ".green);

    const { option } = await inquirer.prompt(menuOpt);

    return option

}

const stop = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    console.log("\n");

    await inquirer.prompt(question);

}

const readInput = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]
    console.log("\n");
    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = { 
    inquirerMenu,
    stop, 
    readInput
}