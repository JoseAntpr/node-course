const fs = require("fs");
const colors = require("colors")
const argv = require('./config/yargs').argv;

const { listar, crear} = require("./wishlist/wishlist")


const comando  = argv._[0]


console.log(comando);

switch(comando) {
    case 'crear':
        crear(argv.name, argv.wishlist)
            .then(data => {
                console.log("=================".blue);
                console.log(`Wishlist de ${name}`.green)
                console.log("=================".blue);
                console.log(data)
            })
            .catch(e => console.error(colors.red(e)));
        break;
    case 'listar': 
        listar(argv.name)
            .then(data => console.log(data))
            .catch(e => console.error(colors.red(e) ))
        break;
    default:
        console.log("Comando no reconocido");

}



