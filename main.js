const arr = []

function registro() {
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.getElementById("fm").value;
    let numDocumento = document.getElementById("numDocumento").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let fecNacimiento = document.getElementById("fecNacimiento").value;

    
    let datosUsuario = {
        nombre: nombre,
        apellido: apellido,
        tipoDocumento: tipoDocumento,
        numDocumento: numDocumento,
        genero: genero,
        telefono: telefono,
        correo: correo,
        fecNacimiento: fecNacimiento
    };

    arr.push(datosUsuario)
   
    console.log(datosUsuario);

    swal("¡Registro Exitoso!", "Tu registro se ha completado con éxito.", "success");
}

function validacion() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.getElementById("fm").value;
    let numDocumento = document.getElementById("numDocumento").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let fecNacimiento = document.getElementById("fecNacimiento").value;

    const fechaNacimiento = new Date(fecNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (nombre == "")
        swal("Error", "Por favor, llena el campo de nombre.", "error");
    else if (apellido == "")
        swal("Error", "Por favor, llena el campo de apellido.", "error");
    else if (numDocumento == "")
        swal("Error", "Por favor, ingresa tu número de documento.", "error");
    else if (isNaN(numDocumento))
        swal("Error", "Por favor, ingresa un número de documento válido (solo números).", "error");
    else if (numDocumento.length <= 7 || numDocumento.length >= 11)
        swal("Error", "El número de documento debe tener entre 8 y 10 dígitos.", "error");
    else if (genero == null)
        swal("Error", "Por favor, selecciona un género.", "error");
    else if (telefono == "")
        swal("Error", "Por favor, ingresa tu número de teléfono.", "error");
    else if (isNaN(telefono))
        swal("Error", "Por favor, ingresa un número de teléfono válido (solo números).", "error");
    else if (telefono.length <= 9 || telefono.length >= 11)
        swal("Error", "El número de teléfono debe tener entre 10 y 11 dígitos.", "error");
    else if (correo == "")
        swal("Error", "Por favor, ingresa tu dirección de correo electrónico.", "error");
    else if (!/^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/.test(correo))
        swal("Error", "Por favor, ingresa una dirección de correo electrónico válida.", "error");
    else if (fecNacimiento == "")
        swal("Error", "Por favor, ingresa tu fecha de nacimiento.", "error");
    else if (edad < 18)
        swal("Error", "No puedes registrarte en este momento, debes tener autorización de tus padres.", "error");
    else 
       registro()
}

