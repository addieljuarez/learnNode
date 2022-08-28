
const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                name:'1.- Buscar Ciudad',
                value: 1,
            },
            {
                name:'2.- Historial',
                value: 2,
            },
            {
                name:'0.- Salir',
                value: 0,
            }
        ]
    }
]


const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white );
    console.log('==========================\n'.green);


    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}


const leerInput = async(message) => {
    const questionsInput = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(questionsInput);
    return desc;
}


const pausa = async() => {
    const questionPausa = [{
        type: 'input',
        name: 'pausa',
        message: `Presione enter para continuar`,
    }];

    await inquirer.prompt(questionPausa);
}


module.exports = {
    inquirerMenu,
    leerInput,
    pausa
}
