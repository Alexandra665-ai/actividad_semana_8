const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value
    };

    try {
        const resultado = await fetch("http://localhost:3000/contacto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const data = await resultado.json();

        respuesta.textContent = data.mensaje;
        formulario.reset();

    } catch (error) {
        respuesta.textContent = "Error al enviar el formulario";
        console.log(error);
    }
});