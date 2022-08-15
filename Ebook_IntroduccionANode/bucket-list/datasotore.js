
const fs = require('fs');

module.exports.load = function(filepath){
    try {
        // if file exits
        const content = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        // if file doesn't exist
        return [];
    }
}

module.exports.save = function(filepath, content){
    fs.writeFileSync(filepath, JSON.stringify(content, null, 2))
}