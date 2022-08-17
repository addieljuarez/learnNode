
const path = require('path');
const inquirer = require('inquirer');
const datastore = require('./datasotore');
const utils = require('./utils');

const filename = 'data.json';
const filepath = `${path.resolve('.')}/${filename}`;
const items = datastore.load(filepath);

// const params = [
//     {
//         name: 'item',
//         alias: 'i',
//         type: String,
//     },
//     {
//         name: 'completed',
//         alias: 'c',
//         type: Boolean,
//     },
//     {
//         name: 'date',
//         alias: 'd',
//         type: String,
//     }
// ];

const options = [
    {
        type: 'input',
        name: 'item',
        message: 'What do you want add?'
    },
    {
        type: 'confirm',
        name: 'completed',
        message: 'Is Completed?'
    },
    {
        type: 'input',
        name: 'date',
        message: 'Due Date MM/DD/YYYY'
    },
    
];

debugger

inquirer.prompt(options)
    .then(answer => {
        const { item = '', completed = false, date = ''} = answer;
        if(item){
            items.push({
                    item, 
                    completed, 
                    date
                });
            datastore.save(filepath, items);
        }
        utils.printlist(items);
    })

