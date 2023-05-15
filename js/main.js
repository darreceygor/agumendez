window.onload = datos();

async function datos(){
    fetch('json/fichas.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datos =>{   /*traemos los datos para procesar*/
        let carta = document.getElementById("ficha");

        for (let i in datos) {
            carta.innerHTML +=`
                <div class="ficha" >
                    <div class="carta">
                        <img src="${datos[i].image}" />
                        
                    </div>
                    <h3>${datos[i].category}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero corporis incidunt saepe qui commodi quasi neque veniam quam, aspernatur est beatae maxime animi sed reiciendis mollitia ducimus veritatis repellendus?</p>
                    <button type="click" id="tipo" name="${datos[i].category}">+ Info</button>
                    
                </div>
                `
        }  
    })
}


document.addEventListener("click", async e => {

    let data=document.getElementById("investigacion");
    let tipo=document.getElementById("tipo");

    console.log(data)
    console.log(tipo)

    await fetch ('json/info.json')
    .then (res => res.json())
    .then (datos => {
        for (let i in datos){
            if (tipo === datos[i].category){
                console.log(datos[i].category)
                data.innerHTML+=`
                <div>
                <h1>${datos[i].name}</h1><br>
                <h2>${datos[i].instagram}</h2><br>
                <h2>${datos[i].facebook}</h2>
                </div>
                `
            }
        }
    })
})