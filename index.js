const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";

const datos = new FormData(document.getElementById("formulario"));

const body = { item: datos };

const fetchParams = {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-API-KEY": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
    },
    body: JSON.stringify(body)
};


async function enviarFormulario() {
    try {
        let response = await fetch(url, fetchParams);
        if (response.ok) {
            let result = await response.json();
            console.log(result);
            result.innerHTML = "El formulario se ha enviado correctamente";
            datos.reset();
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        err.innerHTML = "Error al enviar el formulario";
        console.log(err);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#submit').addEventListener('click', enviarFormulario);
    });