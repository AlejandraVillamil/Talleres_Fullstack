//Declaración de variables
//Numeros
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let cero = document.getElementById('cero');
let operator1
let operator2
let stgresult

//operaciones
let result = document.getElementById('result');
let add = document.getElementById('add');
let less = document.getElementById('less');
let mult = document.getElementById('mult');
let div = document.getElementById('div');

//otros
let point = document.getElementById('point');
let reset = document.getElementById('reset');
let root = document.getElementById('root');
let exp = document.getElementById('exp');
let den = document.getElementById('den');
let percentage = document.getElementById('percentage');
let CE = document.getElementById('CE');
let Clear = document.getElementById('Clear');
let del = document.getElementById('del');
//mensaje
let msgresult = document.getElementById('msgresult');


//Escribir letras en pantalla
document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', event => {
        console.log(event.target)
        let number = event.target.textContent
        msgresult.innerText += number

    })})