let { getUsuario } = require("./usuario");

console.log("Inicio del programa");

 getUsuario(1, (user1) => console.log(user1))

 getUsuario(2, (user2) => console.log(user2))


console.log("Hola Mundo");