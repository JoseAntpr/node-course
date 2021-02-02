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

const inquirerMenu = async () => {
    console.clear();
    console.log("- - - - - - - - - - - ".green);
    console.log("Seleccione una opción".white);
    console.log("- - - - - - - - - - - ".green);

    const { option } = await inquirer.prompt(menuOpt);

    return option

}

const stop = async () => {
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

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
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

const deleteTaskList = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i +1}`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: [
                ...choices,
                {
                    value: '0',
                    name: '0.'.green + ' Cancelar'
                }
            ]

        }]
    const { id } = await inquirer.prompt(question);
    return id;
}

const confirm = async ( message ) => {
    const question = [
        {
            type: 'confirm',
            name:'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const showChecklist = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i +1}`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: task.completed
        }
    })

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices

        }]
    const { ids } = await inquirer.prompt(question);
    return ids;
}

module.exports = {
    inquirerMenu,
    stop,
    readInput,
    deleteTaskList,
    confirm,
    showChecklist
}