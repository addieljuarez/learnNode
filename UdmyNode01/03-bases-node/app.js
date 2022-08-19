


console.clear();
const args = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .check((args, option) => {
        // console.log('yargs', args);
        if(isNaN(args.b)){
            throw 'La base debe ser un numero';
        }
    })
    .argv



const { option } = require('yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');


// console.log(process.argv);
// const [,,arg3 = 'base = 0' ] = process.argv;

// const [, base = 0] = arg3.split('='); 
// console.log(base);



// console.log(process.argv);
console.log(args);
console.log(args.base);
// crearArchivoTabla(base)
//     .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
//     .catch(err => console.log(err));