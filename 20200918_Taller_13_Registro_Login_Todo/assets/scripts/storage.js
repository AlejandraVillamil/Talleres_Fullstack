const UserProfile = document.getElementById('User_Profile')
const CurrentLists = document.getElementById('toDoLists')
const User_location = localStorage.getItem('Location')
const currentArtists = JSON.parse(localStorage.getItem('Artistas'))
let MyLists = []
//Diligenciar datos del usuario en el aside
UserProfile.innerHTML = `
<h3 class="card-title" id="User_Name">${currentArtists[User_location].Nombre}</h3>
<p id="User_Band">${currentArtists[User_location].Band}</p>
<p id="User_Gender">${currentArtists[User_location].Género}</p>
<p id="USer_email">${currentArtists[User_location].Mail}</p>
        `
/*************************CREAR OBJETO LISTA*****************************/
const AddList = () => {
        //Darle un numero a la lista       
        let ListCounter = localStorage.getItem('Lists').length
        if (ListCounter == null) {
                let ListCounter = 0
        } else {
                let ListCounter = localStorage.getItem('Lists').length
        }

        //asignarle propiedades al objeto lista
        let listname = 'Lista #' + ListCounter
        CurrentLists.innerHTML += `  
                <option class="listNumber">${listname}</option>
                <br>       
                `
        let List = {
                Id: ListCounter,
                ListName: listname,
                Tareas: ""
        }
        AddToLists(List)
}

/**********************AGREGAR LISTA AL OBJETO LISTAS**********************/
const AddToLists = (List) => {
        if (localStorage.getItem('Lists') == null) {
                //Agregar ojeto a la lista de usuarios
                MyLists.push(List)
                // alamacena los datos del artista en un string & Enviar string al localStorage
                localStorage.setItem('Lists', (JSON.stringify(MyLists)))


        } else {
                //Formatear string del localStorage
                let Lists_info = JSON.parse(localStorage.getItem('Lists'))
                //Agregar ojeto a la lista de usuarios
                MyLists.push(List)
                // alamacena los datos del artista en un string & Enviar string al localStorage
                localStorage.setItem('Lists', (JSON.stringify(MyLists)))
        }
}
