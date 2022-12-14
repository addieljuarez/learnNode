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

        (salario) ? resolve(salario) : reject(`No existe el salario con el id ${id}`);
    });
}


const getInfoUser = async(id) => {
    // return `Hola Mundo`;
    try {
        const empleado = await getEmpleado(id);
        const salario =  await getSalario(id);
        return `El salario del eumpleado ${empleado} es ${salario}`
    } catch (error) {
        throw error;
    }
    
}

const id = 5;

getInfoUser(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));



