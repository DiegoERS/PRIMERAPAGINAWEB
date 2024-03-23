document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const { correo, contrasenia } = obtenerDatosFormulario();

        const esValido = validarContrasenia(contrasenia) && validarCorreo(correo);

        esValido ? manejarExito() : manejarError();

    });




}); //para que escuche a todo el documento y el metodo con la flecha es una funcion flecha que sea anonima

const obtenerDatosFormulario = () => {

    const correo = document.getElementById("correo").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();

    return { correo, contrasenia };


};

const validarContrasenia = (contrasenia) =>
 /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,11}$/.test(contrasenia);


const validarCorreo=(correo)=>
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

const manejarExito=()=>{
    alert("inicio de sesión exitoso");
    limpiarCamposTexto();
};

const manejarError=()=>{
    alert("datos inválidos");
};

const limpiarCamposTexto=()=>{
    const campos=document.querySelectorAll("#formulario input[type='password'],#formulario input[type='email']" );
    campos.forEach((campo)=>campo.value="");

};





