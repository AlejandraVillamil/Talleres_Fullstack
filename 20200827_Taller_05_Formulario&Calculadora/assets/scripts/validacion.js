function validar(e){
    e.preventDefault()
    let input_nombre=document.getElementById('nombre')
    let input_mail=document.getElementById('mail')
    let input_edad=parseInt(document.getElementById('edad').value)
    let input_edad2=document.getElementById('edad')
    let input_direccion=document.getElementById('direccion')
    let input_tyc=document.getElementById('tyc')
    let mensajeNombre=document.getElementById('alerta_nombre') 
    let mensajeEmail=document.getElementById('alerta_mail') 
    let mensajeEdad=document.getElementById('alerta_edad')
    let mensajeDireccion=document.getElementById('alerta_direccion') 
    let count_error=0
    //Validación 1
    if(input_nombre.value ==''){
        mensajeNombre.innerText="Por favor llena el campo Nombre"
        input_nombre.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo Nombre", "error"); 
        count_error= count_error+1
    }else{
        input_nombre.classList.remove('input_box_alert')
        mensajeNombre.innerText=""
    }
    //Validación 2
    if(input_mail.value ==''){
        mensajeEmail.innerText="Por favor llena el campo Email"
        input_mail.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo E-mail", "error");
        count_error= count_error+1   
    } else{
        input_mail.classList.remove('input_box_alert')
        mensajeEmail.innerText=""
    }

    //Validación 3
    if(input_edad =='' || isNaN(input_edad)){
        mensajeEdad.innerText="Por favor llena el campo Edad"
        input_edad2.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo Edad", "error"); 
        count_error= count_error+1  
    }else{
        input_edad2.classList.remove('input_box_alert')
        mensajeEdad.innerText=""
    }

    //Validación 4
    if(input_direccion.value ==''){
        input_direccion.classList.add('input_box_alert')
        mensajeDireccion.innerText="Por favor llena el campo Dirección"
        swal("Error", "Debes diligenciar el campo Dirección", "error"); 
        count_error= count_error+1  
    }else{
        input_direccion.classList.remove('input_box_alert')
        mensajeDireccion.innerText=""}
   
    if(count_error==0 && input_tyc.checked==false){
       input_tyc.classList.add('input_box_alert')
       swal("Error", "Debes aceptar nuestros términos y condiciones", "error"); 
        }


    //Validación 6
   if(count_error==0 && input_tyc.checked==true) {
    swal("Muy bien!", "Registro éxitoso", "success");
        setTimeout(()=>{
                window.location='assets/pages/calculadora.html'
        },2000)
   } else if(count_error>1){  
    swal("Error", "Debes diligenciar los campos solicitados", "error"); 
    } 
    }
