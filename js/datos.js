window.onload = traerDatos();
let tablas = document.getElementById('datosTablas');


async function traerDatos(){
    
    let recurso = document.getElementById('archivo').value;

    console.log(recurso)
    fetch('json/'+recurso+'.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datos =>{   /*traemos los datos para procesar*/
         for (let i in datos) {
            tablas.innerHTML +=`
                        <tr>
                            <td>${datos[i].id}</td>
                            <td>${datos[i].name}</td>
                            <td class="visible" >${datos[i].direccion}</td>
                            <td><a href="${datos[i].instagram}"><img class="icono" src="ico/instagram.png"></a></td>
                            <td><a href="${datos[i].facebook}"><img class="icono" src="ico/facebook.png"></a></td>
                        </tr>
                
               
                `
        }  
    })
}