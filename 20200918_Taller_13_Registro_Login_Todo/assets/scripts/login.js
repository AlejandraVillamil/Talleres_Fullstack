  let CurrentMail = document.getElementById('loginMail') 
  let CurrentPassword = document.getElementById('loginPassword')
  const current_Artists =JSON.parse(localStorage.getItem('Artistas'))


function storagedata(e){
  e.preventDefault()
  localStorage.setItem("Mail",CurrentMail.value )
  localStorage.setItem("User_Password", CurrentPassword.value)

  for(let c=0;c<current_Artists.length+1; c+=1){
  let stgMail=current_Artists[c].Mail
  let stgPassword=current_Artists[c].User_Password
    if(stgMail==CurrentMail.value && stgPassword==CurrentPassword.value){
      let UserPosition = c
      localStorage.setItem("Location", UserPosition )
      swal({
        title: 'Login exitoso',
        text: 'Redireccionando...',
        icon: 'success',
        timer: 2000,
        buttons: false,
    })
    .then(() => {
      window.location='todo.html'
    })
   
     } 
  }


}
