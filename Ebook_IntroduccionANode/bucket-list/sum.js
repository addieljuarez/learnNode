
const pi = 3.141593;

function sum(x, y){
    return x + y;
}

function subtraction(x, y){
    return x - y;
}

function circleArea(r){
    return pi * r * r;
}

module.exports = {
    sum: sum,
    sub: subtraction,
    pi: pi,
}