const table =document.getElementById('ArtistTable')

const stgArtists =()=>{
        const currentArtists =JSON.parse(localStorage.getItem('Artistas'))
  console.log(currentArtists)
  
  for(let c=0;c<currentArtists.length; c+=1){
        table.innerHTML+=`
                <tr>
                  <th>${c+1}</th>
                  <td>${currentArtists[c].Nombre}</td>
                  <td>${currentArtists[c].Band}</td>
                  <td>${currentArtists[c].Género}</td>
                  <td>${currentArtists[c].Mail}</td>
                </tr>          
        `
  }               
} 

stgArtists()

document.getElementById('clean').addEventListener('click',()=>{
        localStorage.clear()
        table.innerHTML=""
})