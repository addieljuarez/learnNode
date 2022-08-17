

const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const path = require('path');


module.exports.findPattern = function(directory, files, pattern){
    const emitter = new EventEmitter();

    files.forEach(file => {
        const filePath = path.resolve(directory, file);
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if(err){
                return emitter.emit('file-error');
            }else{
                emitter.emit('file-read', file);
            }

            let matches = content.match(pattern);
            if(matches){
                matches.forEach(element => {
                    emitter.emit('file-match-found', file, element);
                });
            }
        });
    });

    return emitter
}