let stgMail = document.getElementById('login')
console.log(stgMail)

function storagedata(){
    
    let stgMail = document.getElementById('login')
      localStorage.setItem("Mail",stgMail.value )
      console.log(stgMail)
    let stgPassword = document.getElementById('password')
    localStorage.setItem("Password", stgPassword.value)
}

/*
let btnDark = document.getElementById('dark')
btnDark.addEventListener('click', () => {
    //let container = document.getElementById('container').classList.add('dark')
    // Si selecciona se carga el color de tema en el localstorage
    localStorage.setItem("SelectedTheme", "dark")
    getThemeStorage()
})
*/