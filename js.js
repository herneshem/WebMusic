document.addEventListener('DOMContentLoaded', e => { llamadajson() });

const list = document.getElementById('list')
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
      const crear = list.insertRow();
   })

   //----------ITERANDO CON EL =+`` PARA QUE RECORRA EL JSON
   for (let item of leerjson) {
      //console.log(item)
      list.innerHTML += `
   <td><b>${item.author}</b></td>
   <td><b>${item.tema}</b><button style="margin-left:30px"></button></td> 
  `
   }
}





