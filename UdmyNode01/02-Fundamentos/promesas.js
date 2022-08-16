const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = ( id ) => {


    return new Promise ((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre
        if(empleado) {
            resolve(empleado);
        }else{
            reject(`No existe el empleado con el id ${id}`);
        }
    });
}


const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario) ? resolve(salario) : reject(`No existe el user con el id ${id}`);
    });
}


const id = 5;



// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));



// getEmpleado(id)
//     .then( empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log(`El empleado: ${empleado} tiene un salario ${salario}`);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     })
//     .catch(err => {
//         console.log(err);
//     });

let nombre;

getEmpleado(id)
    .then(empleado =>  {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El emeplado con el nombre ${nombre} tiene un salrio de ${salario}`))
    .catch(err => console.log(err));