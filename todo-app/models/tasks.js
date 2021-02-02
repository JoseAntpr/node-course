const Task = require('./task');
/*
* listado:
*       {'uuid-12313': { id:123124, desc: ...}}
*/

class Tasks {
    list = {};

    get listArr() {

        const list = [];
        Object.keys(this.list).forEach( key => {
            const task = this.list[key];
            list.push( task );
        });

        return list;
    }


    constructor() {
        this.list = {}
    }

    create( desc = '' ) {
        const task = new Task(desc);
        this.list[task.id] = task;
    }

    loadTasksFromArray( tasks = []) {
        tasks.forEach( task => {
            this.list[task.id] = task;
        })
    }

    alltasks() {
        this.listArr.forEach(( task, i) => {
            const idx = i +1;
            const {desc, completed } = task
            const state = completed ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${idx}. ${desc} :: ${state}`);
        });
    }

    listPendingOrCompletedTasks(completedOpt = true) {
        let count = 0;
        this.listArr.forEach(( task) => {
            const {desc, completed } = task
            const state = completed ? 'Completado'.green : 'Pendiente'.red;

            if( completedOpt ) {
                if(completed) {
                    count +=1;
                    console.log(`${count}. ${desc} :: ${state}`);
                }

            } else {
                if(!completed) {
                    count +=1;
                    console.log(`${count}. ${desc} :: ${state}`);
                }
            }
        });
    }

    deleteTask( id = '') {
        if(this.list[id]) {
            delete this.list[id];
        }
    }

    toggleCompleted( ids = []) {
        ids.forEach( id => {
            this.list[id].completed = true;
        })

        this.listArr.forEach( task => {
            if( !ids.includes(task.id)) {
                this.list[task.id] = false;
            }
        });
    }
}

module.exports = Tasks