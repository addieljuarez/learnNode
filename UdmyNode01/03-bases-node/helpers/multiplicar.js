
const fs = require('fs');

const  crearArchivoTabla = async (base = 0) => {

    // return new Promise((resolve, reject) => {
    //     console.log('==============================');
    //     console.log(`   Tabla de ${base}`);
    //     console.log('==============================');
    //     let salida = '';
    //     for (let i = 0; i < 10; i++) {
    //         salida += ` ${base} X ${(i + 1)} = ${base * (i + 1)}\n`;
    //     }
        
    //     fs.writeFileSync(`tabla-${base}.txt`, salida);
    //     resolve(`tabla-${base}.txt`);
        

    // });


    try {
        console.log('==============================');
        console.log(`   Tabla de ${base}`);
        console.log('==============================');
        let salida = '';
        for (let i = 0; i < 10; i++) {
            salida += ` ${base} X ${(i + 1)} = ${base * (i + 1)}\n`;
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        console.log(salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
    
    
}

module.exports = {
    crearArchivoTabla
}