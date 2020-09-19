let stgMail = document.getElementById('login')
console.log(stgMail)

function storagedata(){
    
    let stgMail = document.getElementById('login')
      localStorage.setItem("Mail",stgMail.value )
      console.log(stgMail)
    let stgPassword = document.getElementById('password')
    localStorage.setItem("Password", stgPassword.value)
}
