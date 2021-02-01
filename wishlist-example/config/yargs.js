const argv = require("yargs")
                .command('crear', "Crea una wishlist para una persona", { name: {demand: true, alias: "n"}, wishlist: { demand: true, alias: "w", type: "array"}})
                .command("listar", "Lista los deseos de una lista de tareas", { name: {demand: true, alias: "n"}})
                .help()
                .argv;

module.exports = { argv }