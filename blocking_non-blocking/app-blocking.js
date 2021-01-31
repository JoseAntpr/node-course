let { getUsuarioSync } = require("./usuario");

console.log("Inicio del programa");

let user1 = getUsuarioSync(1)
console.log("Usuario 1:", user1)

let user2 = getUsuarioSync(2)
console.log("Usuario 2:", user2)

console.log("Hola Mundo");