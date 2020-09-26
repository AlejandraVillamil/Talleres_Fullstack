//Declaración de variables
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let lettersMsg = document.getElementById('lettersInput')
let NumbersMsg = document.getElementById('numbersInput')
let myLetters = []
let myNumbers = []
let stgMissing = []
let currrent = []
let nav
localStorage.setItem('Input', "text")
localStorage.setItem('process', "Inprogress")


//Escribir letras en pantalla
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        let countError = 0
        let stgMissing = []
        //Obtener Valor
        let getValue = event.target.value
        //Borrar datos
        if (getValue == "del") {
            lettersMsg.innerText = ""
            NumbersMsg.innerText = ""
            myLetters = []
            myNumbers = []
            stgMissing = []
            localStorage.setItem('myLetters', "")
            localStorage.setItem('myNumbers', "")
            applyTheme()
        } 
        else {
            let position = event.target.value - 1
            //Ciclo para recorrer el arreglo hasta la posición correspondiente a la tecla seleccionada
            if (myLetters.length > 0) {
                for (let i = 0; i < position + 1; i++) {
                    if (localStorage.getItem('Input') == "text") {
                        let current = letters[position]
                        let nav = myLetters[i]
                        let navLetters = letters[i]
                        //¿El valor ingresado ya existe?
                        if (current == nav) {
                            countError = 1
                        }
                        //¿Faltan valores? Comparando el array generado por el usuario respecto al array quemado
                        else if (i < position && nav != navLetters) {
                            //localStorage.clear('Missing')       
                            stgMissing.push(navLetters)
                            localStorage.setItem('Missing', stgMissing)
                            countError = 2
                        }
                    } else if (localStorage.getItem('Input') == "number") {

                        let current = position + 1
                        let nav = myNumbers[i]
                        let navNumbers = i + 1
                        //¿El valor ingresado ya existe?
                        if (current == nav) {
                            countError = 1
                        }
                        //¿Faltan valores? Comparando el array generado por el usuario respecto al array quemado
                        else if (i < position && nav != navNumbers) {
                            //localStorage.clear('Missing')       
                            stgMissing.push(navNumbers)
                            localStorage.setItem('Missing', stgMissing)
                            countError = 2
                        }
                    }
                }
            } else if (position != 0) {
                countError = 3
            }
            //Si no hay errores permite agregar el campo
            if (countError == 0) {
                NumbersMsg.innerText = localStorage.getItem('myNumbers')
                    
                //Si el objeto myLetters es igual a letters empieza a ingresar números
                if (localStorage.getItem('myLetters') == letters) {
                    // Escribe el objeto letras en input box
                    lettersMsg.innerText = myLetters
                    //Alamacena el objeto letras en el localstorage
                    localStorage.setItem('myLetters', myLetters)
                    //Marcar el tipo de entrada comok numero
                    Input = "number"
                    localStorage.setItem('Input', "number") 
                    //Si la tecla es J se modifica el valor, para que pinte 0
                    if (position == 9) {
                        position = -1
                        swal("Listo", "Ya ingresaste todos los números", "success");
                        
                        if(localStorage.getItem('myNumbers') == Numbers) {
                            localStorage.setItem('process', "Completed")
                            swal("Listo", "Ya ingresaste todos los números", "success");

                        }}

                            //applyTheme()
                            myNumbers.push(position + 1)
                            localStorage.setItem('myNumbers', myNumbers)
                            NumbersMsg.innerText = localStorage.getItem('myNumbers')
                } else {

                    myLetters.push(letters[position])
                    lettersMsg.innerText = myLetters
                    localStorage.setItem('myLetters', myLetters)
                    if (position == 9 && localStorage.getItem('myLetters') == myLetters) {
                        Input = localStorage.setItem('Input', "number")
                        swal("Listo", "Ya ingresaste todas las letras", "success");
                    }
                }
            }
            //Si hay errores los arroja por pantalla
            else if (countError == 1) {
                swal("Error", "El valor ingresado ya existe ", "error");
            } else if (countError == 2) {
                swal("Error", "Hacen falta por ingresar " + stgMissing, "error");
                localStorage.setItem('Missing', "")
            } else if (countError == 3) {
                swal("Error", "No puede iniciar con  esa tecla", "error");
            }
        }
    })
})


/****************************************CAMBIO DE TEMA****************************************/
function getThemeStorage() {
    darkThemeStatus = true
    retoThemeStatus = true
    let btnDark = document.getElementById('darkTheme')
    let btnReto = document.getElementById('retoTheme')
    //Tema oscuro  
    btnDark.addEventListener('click', () => {
        if (darkThemeStatus == true) {
            localStorage.setItem("SelectedTheme", "darkTheme")
            applyTheme()
            darkThemeStatus = false

        } else {
            localStorage.setItem("SelectedTheme", "none")
            applyTheme()
            darkThemeStatus = true
        }
    })
    //Tema retro
    btnReto.addEventListener('click', () => {
        if (retoThemeStatus == true) {
            localStorage.setItem("SelectedTheme", "retoTheme")
            applyTheme()
            retoThemeStatus = false
        } else {
            localStorage.setItem("SelectedTheme", "none")
            applyTheme()
            retoThemeStatus = true
        }
    })

}

function applyTheme() {

    lettersMsg.innerText = localStorage.getItem('myLetters')
    NumbersMsg.innerText = localStorage.getItem('myNumbers')

    if (localStorage.getItem('process') == "Completed") {
        swal("Listo", "Ya ingresaste todos los números. Oprime la tecla Reset para continuar", "success");
    }

    if (localStorage.getItem("SelectedTheme") == "retoTheme") {
        let container = document.getElementById('themeContainer')
        container.className = "pb-5 pt-3 retoTheme"

    } else if (localStorage.getItem("SelectedTheme") == "darkTheme") {
        let container = document.getElementById('themeContainer')
        container.className = "pb-5 pt-3 darkTheme"
    } else {
        let container = document.getElementById('themeContainer')
        container.className = "pb-5 pt-3"
    }
}