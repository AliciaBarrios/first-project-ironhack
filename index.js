let form = document.getElementById("formulario");
const url = form.action;

let name = document.querySelector("input[type=text]");
let email = document.querySelector("input[type=email]");
let phone = document.querySelector("input[type=tel]");
let message = document.querySelector("textarea");


async function enviarFormulario(event) {
    event.preventDefault();

    const datos = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value  
    };
    
    const fetchParams = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
        },
        body: JSON.stringify({ item: datos })
    };
    
    try {
        let response = await fetch(url, fetchParams);
        if (response.ok) {
            let result = await response.json();
            console.log("El formulario se ha enviado correctamente");
            alert("El formulario se ha enviado correctamente");
            form.reset();
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        console.log("Error al enviar el formulario");
        alert("Error al enviar el formulario");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', enviarFormulario);
    });
