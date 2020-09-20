
const ArtistList=[]

function validar(e){
    e.preventDefault()
    //Declaración de variables
    let InputName=document.getElementById('InputName')
    let InputBand=document.getElementById('InputBand')
    let InputGender=document.getElementById('InputGender')
    let InputMail=document.getElementById('InputEmail1')
    let InputPassword=document.getElementById('InputPassword') 
    let msgName=document.getElementById('name_alert') 
    let msgBand=document.getElementById('band_alert') 
    let msgMail=document.getElementById('mail_alert') 
    let msgGender=document.getElementById('gender_alert') 
    let msgPassword=document.getElementById('password_alert')  
    let count_error=0

    //Validación Nombre
    if(InputName.value ==''){
        msgName.innerText="Por favor llena el campo Nombre"
        InputName.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo Nombre", "error"); 
        count_error= count_error+1
    }else{
        InputName.classList.remove('input_box_alert')
        msgName.innerText=""
    }

    //Validación Banda
    if(InputBand.value ==''){
        msgBand.innerText="Por favor llena el campo Banda"
        InputBand.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo Banda", "error"); 
        count_error= count_error+1
    }else{
        InputBand.classList.remove('input_box_alert')
        msgBand.innerText=""
    }

    //Validación Género Músical
    if(InputGender.value ==''){
        msgGender.innerText="Por favor llena el campo Género musical"
        InputGender.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo Género musical", "error"); 
        count_error= count_error+1
    }else{
        InputGender.classList.remove('input_box_alert')
        msgGender.innerText=""
    }

    //Validación Correo electrónico
    if(InputMail.value ==''){
        msgMail.innerText="Por favor llena el campo Correo electrónico"
        InputMail.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo Correo electrónico", "error"); 
        count_error= count_error+1
    }else{
        InputMail.classList.remove('input_box_alert')
        msgMail.innerText=""
    }
    
    //Validación Contraseña
    if(InputPassword.value ==''){
        msgPassword.innerText="Por favor llena el campo Contraseña"
        InputPassword.classList.add('input_box_alert')
        swal("Error", "Debes diligenciar el campo Contraseña", "error"); 
        count_error= count_error+1
    }else{
        InputPassword.classList.remove('input_box_alert')
        msgPassword.innerText=""
    }
       

        
    //Validación 6
   if(count_error==0){
    swal("Muy bien!", "Registro éxitoso", "success");

    // Almacenar en storage

       //Declaración de variables
       let stgName=InputName.value
       let stgBand=InputBand.value
       let stgGender=InputGender.value
       let stgMail=InputMail.value
       let stgPassword=InputPassword.value
       //Se llenan los datos de artista en un objeto
       let Artist={
           Nombre:stgName, 
           Band:stgBand,
           Género:stgGender,
           Mail:stgMail, 
           User_Password:stgPassword }
       //El objeto se envia a la función AddToStorage
       AddToStorage(Artist)

   } else if(count_error>1){  
    swal("Error", "Debes diligenciar los campos solicitados", "error"); 
    } 
}

const AddToStorage=(Artist)=>{
    if(localStorage.getItem('Artistas')==null){
        //Agregar ojeto a la lista de usuarios
        ArtistList.push(Artist)
        // alamacena los datos del artista en un string & Enviar string al localStorage
        localStorage.setItem('Artistas', (JSON.stringify(ArtistList)))
        

    }else{
        //Formatear string del localStorage
        let artist_info = JSON.parse(localStorage.getItem('Artistas'))
        //Agregar ojeto a la lista de usuarios
        ArtistList.push(Artist)
        // alamacena los datos del artista en un string & Enviar string al localStorage
        localStorage.setItem('Artistas', (JSON.stringify(ArtistList)))
    }
    swal("Muy bien!", "Registro éxitoso", "success");
    setTimeout(()=>{
            window.location='assets/pages/login.html'
    },2000)
}


