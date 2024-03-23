document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();


       const {correo, contrasenia,nombre,fecha,cedula,genero} = obtenerDatosRegistro();
       console.log(correo, contrasenia,nombre,fecha,cedula,genero);
        
        const esValido = validarContrasenia(contrasenia) && validarCorreo(correo)
             && validarNombre(nombre) && validadFecha(fecha) && validadGenero(genero);
        esValido ? manejarExito(): manejarError();



    });


});



//REGISTRO

const obtenerDatosRegistro = () => {

    const correo = document.getElementById("correo").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();
    const nombre=document.getElementById("Nombre").value.trim();
    const fecha=document.getElementById("fecha").value.trim();
    const cedula=document.getElementById("cedula").value.trim();
    const genero=document.getElementById("genero").value.trim();
    return { correo, contrasenia,nombre,fecha,cedula,genero};


};

const manejarExito=()=>{
    alert("Registro exitoso");
    //limpiarCamposTexto();
};

const manejarError=()=>{
    alert("datos inválidos");
};

const limpiarCamposTexto=()=>{
    const campos=document.querySelectorAll("#formulario input[type='password'],#formulario input[type='email'], #formulario input[type='text'], #formulario input[type='number']" );
    campos.forEach((campo)=>campo.value="");

};

const validarNombre = (Nombre) =>{
    console.log("entra");
  const x=/^[a-zA-Z\s']+$/;
  if (x.test(Nombre)){
    console.log("true en nombre");
  }else{
    console.log("false en nombre");
  }
  return x.test(Nombre);
};

const validarContrasenia = (contrasenia)=>
/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*()_+[\]{};':"\\|,.<>\/?]).{8,}$/.test(contrasenia);


const validarCorreo = (correo)=>
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);


  const validarCedula = (cedula) => /^\d{9}$/.test(cedula);

  const validarGenero = (genero) => /^(Masculino|Femenino)$/i.test(genero);

  const validadFecha= (fecha) => /^\d{4}-\d{2}-\d{2}$/.test(fecha);





