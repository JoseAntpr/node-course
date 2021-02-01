const { v4: uuidV4 } = require('uuid');

class Task {
    id = '';
    desc = '';
    completed = false

    constructor ( desc ) {
        this.id = uuidV4();
        this.desc = desc;
    }

}

module.exports = Task