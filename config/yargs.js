const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la terea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado compleatado de una taresa', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}