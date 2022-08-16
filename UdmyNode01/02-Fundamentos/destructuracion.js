

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}


console.log(deadpool.getNombre());


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


const { nombre, apellido, poder, edad = 0 } = deadpool;
console.log(nombre, apellido, poder, edad);




// function imprimirHeroe( {} heroe ){
//     const { nombre, apellido, poder, edad = 0 } = heroe;
//     console.log(nombre, apellido, poder, edad);
// }

function imprimirHeroe( {nombre, apellido, poder, edad = 0}  ){
    nombre = 'Addiel';
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);



const heroes = ['deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);