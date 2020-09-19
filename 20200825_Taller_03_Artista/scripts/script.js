var nombre
var apodo
var edad
var signo
//Creación de función generica
function pedirNombre(){
    nombre=prompt('Nombre')
    //Diligenciar nombre
    var name_onscreen=document.getElementById('name_onscreen')
    name_onscreen.innerText = nombre
}

//Creación de función con evento de escucha 1
var btnApodo = document.querySelector('#btnApodo')
btnApodo.addEventListener('click',()=>{
    apodo=prompt('Apodo')
        //Diligenciar apodo
        var nick_onscreen=document.getElementById('nick_onscreen')
        nick_onscreen.innerText = apodo
})

//Creación de función con evento de escucha 2
function pedirSigno(){
    signo=prompt('Signo zodiacal')
       //Diligenciar Signo
   var zodiac_onscreen=document.getElementById('zodiac_onscreen')
   zodiac_onscreen.innerText = signo
}
btnSigno.addEventListener('click',pedirSigno)


//función tipo flecha
var pedirEdad =()=>{
    edad=prompt('Edad') 
    //Diligenciar Edad
   var age_onscreen=document.getElementById('age_onscreen')
   age_onscreen.innerText = edad

}
//función agupada
function askInfo(){
   var name=prompt('Nombre')
   //Diligenciar nombre
   var name_onscreen=document.getElementById('name_onscreen')
   name_onscreen.innerText = name

   var nick=prompt('Apodo')
   //Diligenciar apodo
   var nick_onscreen=document.getElementById('nick_onscreen')
   nick_onscreen.innerText = nick

   var zodiac=prompt('Signo zodiacal')
   //Diligenciar Signo
   var zodiac_onscreen=document.getElementById('zodiac_onscreen')
   zodiac_onscreen.innerText = zodiac

   var age=prompt('Edad')  
   //Diligenciar Edad
   var age_onscreen=document.getElementById('age_onscreen')
   age_onscreen.innerText = age
   
   var message =` Fue registrado ${name}, de apodo "${nick}" de ${age} años y signo zodiacal ${zodiac}`
   
   alert(message)

}

function print(){
    alert('Bienvenid@ '+  nombre)
    document.write('Hola ' + nombre + ' bienvenid@! <br/>')
    var mensaje =`Mi nombre es ${nombre}, pero mi apodo es "${apodo}" tengo ${edad} años y mi signo zodiacal es ${signo}`
    document.write(mensaje)
    console.log(mensaje)
    alert(mensaje)


}



