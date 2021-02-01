const Task = require('./task');
/*
* listado:
*       {'uuid-12313': { id:123124, desc: ...}}
*/

class Tasks {
    _listado = {};

    constructor() {
        this.list = {}
    }

    create( desc = '' ) {
        const task = new Task(desc);
        this.list[task.id] = task;
    }
}

module.exports = Tasks