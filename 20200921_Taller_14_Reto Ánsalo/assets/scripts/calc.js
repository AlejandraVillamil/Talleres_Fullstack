//Declaración de variables
let operator1 
let operator2 = 0
let StgOperation
let StgOp1
let StgOp2
let Stgres
let operation 
let result = document.getElementById('result');

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

localStorage.setItem('operation',null)
//Recibir operadores
document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('click', event => {
        console.log(event.target)
        
            operator1 = event.target.textContent
            msgresult.innerText+=operator1

           
        
  })})

//Recibir operaciones
        document.querySelectorAll('.operation').forEach(item => {
            item.addEventListener('click', event => {
                operation=event.target.textContent
                localStorage.setItem('operation', operation)
                localStorage.setItem('operator1', msgresult.innerText)
                localStorage.setItem('Result', msgresult.innerText)
                msgresult.innerText=""
               
                 })})

// Generar resultado
result.onclick = function(){
    
    localStorage.setItem('operator2', msgresult.innerText)


    StgOperation=localStorage.getItem('operation')
    StgOp1=localStorage.getItem('operator1')
    StgOp2=localStorage.getItem('operator2')
    Stgres=localStorage.getItem('Result')

    switch(StgOperation){
        case "+":
          operation = parseFloat(StgOp1) + parseFloat(StgOp2)
          msgresult.innerText=operation
          localStorage.setItem('Result', operation)
          
          break;
        case "-":
            operation = parseFloat(StgOp1) - parseFloat(StgOp2)
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
            break;
        case "X":
            operation = parseFloat(StgOp1) * parseFloat(StgOp2)
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
            break;

        case "÷":
            operation = parseFloat(StgOp1) / parseFloat(StgOp2)
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
                  break;

        case "+/-":
            operation = parseFloat(Stgres) * (-1)
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
        break;

        case "%":
            operation = parseFloat(Stgres) / 100
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
        break;

        case "1/x":
            operation = 1/ parseFloat(Stgres)
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
        break;
        case "x2":
            operation = parseFloat(Stgres)* parseFloat(Stgres)
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
        break;
        case "2√x":
            operation = Math.sqrt(parseFloat(Stgres)) 
            msgresult.innerText=operation
            localStorage.setItem('Result', operation)
            
        break;
        
        




      }

      localStorage.setItem('operation',null)


}

//Borra Todo
Clear.onclick = function(){
    localStorage.clear();
    msgresult.innerText=""
}
//CE Borra operador 2
CE.onclick = function(){
    localStorage.setItem('operator2', "")
    msgresult.innerText=""
}
//CE Borra una cifra
del.onclick = function(){
    msgresult.innerHTML = msgresult.innerText.slice(0, -1)
    localStorage.setItem('operator2', msgresult.innerText)

}


        
//Generar resultados

/*

 
*/