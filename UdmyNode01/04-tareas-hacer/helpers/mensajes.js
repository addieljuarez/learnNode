


require('colors');

const mostrarMenu = () => {


    return new Promise((resolve, reject) => {


        console.clear();
        console.log('===================='.green);
        console.log('Seleccione una opcion'.green);
        console.log('====================\n'.green);

        console.log(`${'1.'.green} Crear una Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tareas`);
        console.log(`${'6.'.green} Borrar Tareas`);
        console.log(`${'0.'.green} Salir \n`);


        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Seleccione una opcion para continuar: `, (opt) => {
            // console.log(opt);


            readline.close();
            resolve(opt);
        });
    });
    
}



const pausa = () => {

    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Presione ${'Enter'.green} para continuar`, (opt) => {
            readline.close();
            resolve();
        });
    })
    

}

module.exports = {
    mostrarMenu,
    pausa
}