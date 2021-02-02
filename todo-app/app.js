
const { 
    inquirerMenu, 
    stop, 
    readInput,
    deleteTaskList,
    confirm,
    showChecklist
} = require('./helpers/inquirer');
const { saveData, readData } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

require('colors');

const main = async() => {

    let opt = ''
    const tasks = new Tasks()

    const readDb = readData();

    if( readDb ) {
        tasks.loadTasksFromArray(readDb)
    }

    do{
        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.create(desc);
                break
            case '2':
                tasks.alltasks()
                break
            case '3':
                tasks.listPendingOrCompletedTasks(true)
                break
            case '4':
                tasks.listPendingOrCompletedTasks(false)
                break
            case '5':
                const ids = await showChecklist(tasks.listArr);
                tasks.toggleCompleted(ids);
                break
            case '6':
                    const id = await deleteTaskList(tasks.listArr);
                    if( id !== '0') {
                        const ok = await confirm("¿Desea borrar la tarea?");
                        if (ok) {
                            tasks.deleteTask(id);
                            console.log("Tarea borrada");
                        }
                    }
                    
                    break

        }

        saveData( tasks.listArr);

        await stop()
    } while (opt !== 0);
}

main();