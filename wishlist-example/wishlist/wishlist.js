const fs = require("fs");
const colors = require("colors");


const listar = (name) => {

    return new Promise((resolve, reject) => {
        fs.readFile(`wishlists/${name}-'s-wishlist.txt`,'utf8',(error, data) => {
            if(error){
                reject(error);
            } else {
                resolve(data);
            }
        })

    });

}

const crear = (name, wishlist) => {
    console.log("=================".blue);
    console.log(`Creando wishlist de ${name}`.green)
    console.log("=================".blue);

    return new Promise((resolve, reject) => {

        let data = ""

        for(let i=0; i < wishlist.length; i++) {
            data += `- ${wishlist[i]}\n`
        }

        fs.writeFile(`wishlists/${name}-'s-wishlist.txt`, data, (error) => {
            if(error) {
                reject(error);
            } else {
                resolve(`wihslists/${name}-'s-wishlist.txt`)
            }
        })
    })

}

module.exports = {
    listar,
    crear
}