
const fs = require('fs');

const  crearArchivoTabla = async (base = 0, listar = false, hasta = 10) => {

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

        if(listar){
            console.log('==============================');
            console.log(`   Tabla de ${base}`);
            console.log('==============================');
        }
        
        let salida = '';
        for (let i = 0; i < hasta; i++) {
            salida += ` ${base} X ${(i + 1)} = ${base * (i + 1)}\n`;
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if(listar){
            console.log(salida);
        }
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
    
    
}

module.exports = {
    crearArchivoTabla
}