
function getThemeStorage() {
let btnDark = document.getElementById('dark')
btnDark.addEventListener('click', () => {
    //let container = document.getElementById('container').classList.add('dark')
    // Si selecciona se carga el color de tema en el localstorage
    localStorage.setItem("SelectedTheme", "dark")
    getThemeStorage()
})

let btnlight = document.getElementById('light')
btnlight.addEventListener('click', () => {
    //    let container = document.getElementById('container').classList.add('white')
    // Si selecciona se carga el color de tema en el localstorage
    localStorage.setItem("SelectedTheme", "light")
    getThemeStorage()
})

let btnPink = document.getElementById('pink')
btnPink.addEventListener('click', () => {
    //let container = document.getElementById('container').classList.add('pink')
    // Si selecciona se carga el color de tema en el localstorage
    localStorage.setItem("SelectedTheme", "pink")
    getThemeStorage()
})


    let themeOnStorage = localStorage.getItem('SelectedTheme')

    if (themeOnStorage == "dark") {
        console.log("rule Dark")    
        let container = document.getElementById('container')
        container.className="container dark"
    
    }else if(themeOnStorage == "pink"){
        console.log("rule pink")
        let container = document.getElementById('container')
        container.className="container pink"
        
    }else{
        console.log("rule white")
        let container = document.getElementById('container')
        container.className="container"
    }


}



//Ejemplos 

const usuario = document.getElementById('usuario')
usuario.addEventListener('click', () => {
    const nombreUsuario = prompt('Escribe tu nombre')
    localStorage.setItem("usuarioStorage", nombreUsuario)
})
const traerUsuarioStorage = () => {
    const usuarioGuardadoEnStorage = localStorage.getItem('usuarioStorage')
    document.getElementById('mostrarUsuario').innerText = usuarioGuardadoEnStorage
    console.log(usuarioGuardadoEnStorage, "Este es el usuario")
}