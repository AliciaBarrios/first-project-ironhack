const url = document.querySelector("form.action");

const datos = {
    name:
    email:
    phone:
    message:
},

const body = { item: datos };

const fetchParams = {
    method: 'POST',
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
    },
    body: JSON.stringify(body)
}

async function enviarFormulario() {
    try {
        let response = await fetch(url, fetchParams);
        if (response.ok) {
            let respuesta = await response.json();
            result.innerHTML = "El formulario se ha enviado correctamente";
            datos.reset();
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        result.innerHTML = "Error al enviar el formulario";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", enviarFormulario);
    });