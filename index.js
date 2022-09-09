const url = document.querySelector("form.action");

const datos = new FormData(document.getElementById('formulario'));

const body = { item: datos };

const fetchParams = {
    method: 'POST',
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
    },
    body: JSON.stringify(body)
};

fetch(url, fetchParams)
    .then(response => {
        if (response.ok) return response.json();
    })
    .then(json => {
        console.log(json);
    });

// async function enviarFormulario() {
//     try {
//         let response = await fetch(url, fetchParams);
//         if (response.ok) {
//             let respuesta = await response.json();
//             console.log(respuesta);
//             result.innerHTML = "El formulario se ha enviado correctamente";
//             datos.reset();
//         } else {
//             throw new Error(response.statusText);
//         }
//     } catch (err) {
//         result.innerHTML = "Error al enviar el formulario";
//         console.log("Error");
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('#submit').addEventListener('click', enviarFormulario);
//     });