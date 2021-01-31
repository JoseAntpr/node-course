const getUsuarioSync = ( id ) => {
    const startTime = new Date().getTime()
    while(new Date().getTime() - startTime <= 3000) {
        // Espera para simular un get de datos a bd
    }
    return { id: id, nombre: `Usuario ${id}`}
}

const getUsuario = (id, callback) => {
    let user = {
        id,
        usuario: `usuario${id}`
    }

    setTimeout(()=> callback(user), 3000)
    
}

module.exports = {
    getUsuarioSync,
    getUsuario
}