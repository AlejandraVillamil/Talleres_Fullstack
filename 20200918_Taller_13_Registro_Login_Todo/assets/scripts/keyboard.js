const letters = document.querySelectorAll('.key')
const msg = document.getElementById('TskName')
const TaskTable = document.getElementById('Task_Table')
let TheTasklist = []

/***************************ESCRIBIR TEXTO*******************************/
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        targetText = event.target.innerText

        if (targetText == "Espacio") {
            msg.innerHTML += "&nbsp"
        } else if (targetText == "<--") {
            msg.innerHTML = msg.innerText.slice(0, -1)
        } else {
            //Adicionar letras al mensaje
            msg.innerText += targetText
        }
    })
})

/***************************GRABAR TEXTO*******************************/
document.querySelectorAll('.Sendkey').forEach(item => {
    item.addEventListener('click', event => {
        targetText = event.target.innerText
        if (targetText == "Agregar") {
            AddNewTask()


        }
    })
})

/****Crear lista de tareas */
function AddNewTask() {
    let NewTask = {
        Nombre: msg.innerHTML
    }
    //El objeto se envia a la función AddToStorage
    AddNewTaskToStorage(NewTask)
}

/***********************AGREGAR TAREAS AL OBJETO LISTA****************************/
const AddNewTaskToStorage = (NewTask) => {
    if (TheTasklist.length == null) {
        //Agregar ojeto a la lista de usuarios
        TheTasklist.push(NewTask)
        // alamacena los datos del artista en un string & Enviar string al localStorage
        localStorage.setItem('AllTasks', (JSON.stringify(TheTasklist)))
    } else {
        //Formatear string del localStorage
        let artist_info = JSON.parse(localStorage.getItem('AllTasks'))
        //Agregar ojeto a la lista de usuarios
        TheTasklist.push(NewTask)
        // alamacena los datos del artista en un string & Enviar string al localStorage
        localStorage.setItem('AllTasks', (JSON.stringify(TheTasklist)))
    }
    
    msg.innerHTML = null
    swal("Muy bien!", "Tarea creada", "success");
//
const current_tsk = JSON.parse(localStorage.getItem('AllTasks')) 
console.log(current_tsk) 

for (let c = 0; c < current_tsk.length; c += 1) {

TaskTable.innerHTML += `
<tr>
  <th>${c+1}</th>
  <td>${current_tsk[c].Nombre}</td>
</tr>          
`
}

}
