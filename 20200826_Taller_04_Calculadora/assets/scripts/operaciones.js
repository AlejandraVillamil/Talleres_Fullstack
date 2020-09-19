

function operaciones(operador){
    let result
    //Traer numero 1
    let  n1=parseInt(document.getElementById('n1').value)
    console.log(n1)
    //Traer numero 1
    let  n2=parseInt(document.getElementById('n2').value)
    console.log(n2)
    if(isNaN(n1) ||isNaN(n2) ){
        console.log('detecta empty')   
        alert('No es posible realizar la operación intenta de nuevo, ingresando ambos números')
        console.log('error')

    }else{
 
        switch(operador){

            case"suma":
            result= n1+n2;
            print()
            break;
    
            case"resta":
            result= n1-n2;
            print()
            break;
    
            case"multiplicacion":
            result= n1*n2;
            print()
            break;
    
            case"division":
            result= n1/n2;
            print()
            break;
            
            default:
            alert('No es posible realizar la operación intenta de nuevo')
            console.log('error')
            break;
        }
            function print(){

                result_onscreen=document.getElementById('resultado')
                result_onscreen.innerText = result
                document.getElementById('n1').value="";
                document.getElementById('n2').value="";
                alert(result)
                console.log(result)  
            }



    }
    }
