
const { 
    inquirerMenu,
    leerInput,
    pausa,
} = require('./helpers/inquirer');



const main = async() => {


    let opt = -1;

    do {
        opt = await  inquirerMenu();

        console.log(opt);

        if(opt !== 0) await pausa();

        // switch (opt){
        //     case 1:
        //         console.log('Entro al case 1');
        //     break;
        //     case 2:
        //         console.log('Entro al case 2');
        //     break;
        // }
    } while (opt !== 0);



    // const texto = await leerInput('Hola: ');
    // console.log('texto: ' + texto);
}


main();

// console.log('Hola Mundo');


