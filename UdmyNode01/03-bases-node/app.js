


console.clear();



// option
// listar
// boolean
// default:false,



const { crearArchivoTabla } = require('./helpers/multiplicar');
const args = require('./config/yargs');
const b = args.b;
const l = args.l;
const h = args.h;


// console.log(process.argv);
// const [,,arg3 = 'base = 0' ] = process.argv;

// const [, base = 0] = arg3.split('='); 
// console.log(base);



// console.log(process.argv);
// console.log(args);
// console.log(args.base);
crearArchivoTabla(b, l, h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
    .catch(err => console.log(err));