
function add(x,x2){
    return x + x2;
}

function sub(x,x2){
    return x -x2;
}

function div(x,x2) {
//return x/ x2;
if (x2 == 0){
   comnsole.log('no se puede dividir por zero');
}else{
    return x / x2;
}

}

function mult(x,x2){
    return x * x2;
}

exports.add = add;
exports.sub = sub;
exports.div = div;
exports.mult = mult;
