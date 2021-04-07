document.addEventListener('DOMContentLoaded', e => { llamadajson() });

const list = document.getElementById('list')
const list1 = document.getElementById('list1')
list.addEventListener('click', e => { leer(e) })


//ATRAPAR JSON
const llamadajson = async () => {
   const data = await fetch('listado.json')
   const leerjson = await data.json()
   //console.log(leerjson)
   jsontem(leerjson)
}

const jsontem = leerjson => {
   //----------- LLAMANDO AL JSON POR CADA ELEMENTO, SE PUEDE OBVIAR, PERO SE LLAMARIA COMO OBJETO

   leerjson.forEach(element => {

      //----------CREANDO UNA TABLA CON LOS ELEMENTOS EN EL HTML
       list.insertRow();
      list1.insertRow();
   })

   //----------ITERANDO CON EL =+`` PARA QUE RECORRA EL JSON
   for (let item of leerjson) {
      console.log(item.Url)
      list.innerHTML += `
   <td><b>${item.author}</b></td>
   <td><b>${item.tema}</b></td> 
   <td><audio controls>
   <source src="${item.Url}"></audio></td>
  `

   }

  
}





