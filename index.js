let form = document.getElementById("formulario");
const url = form.action;

let name = document.querySelector("input[type=text]");
let email = document.querySelector("input[type=email]");
let phone = document.querySelector("input[type=tel]");
let message = document.querySelector("textarea");

let dialog = document.getElementById("form-message");
let resultMessage = document.getElementById("text-message");
let btnClose = document.getElementById("btn-close-msg");


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
            resultMessage.innerHTML = "El formulario se ha enviado correctamente";
            dialog.showModal();
            btnClose.addEventListener("click", () => {
                dialog.close();
            });
            form.reset();
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        resultMessage.innerHTML = "Error al enviar el formulario -\n" + err;
        dialog.showModal();
        btnClose.addEventListener("click", () => {
            dialog.close();
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', enviarFormulario);
    });
