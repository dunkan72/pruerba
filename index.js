//const func = require('./funciones.js');

const os = require('os');

const fs = require('fs');



fs.readFile('./texto.txt', 

function(err,data){
  if (err){
     console.log(err);

  }
  console.log(data);

});

/*

fs.writeFile('./texto.txt','primera linea',

function(err) {

if (err){
  console.log(err);

}
console.log('archivo creado');
}

);

console.log('ultima linea de codigo');
*/



//console.log(os.platform());



/*
console.log(func);

console.log(func.add(1,2));

console.log(func.sub(1,2));

console.log(func.div(1,2));

console.log(func.mult(1,2));
*/