

const args = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'muestra el contenido de la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'El número hasta donde llegara la multiplicacion, el default es 10'
    })
    .check((args, option) => {
        if(isNaN(args.b)){
            throw 'La base debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = args;