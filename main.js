let datos = [];
let operacion = null;
let indice = null;

function registro() {
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.getElementById("fm").value;
    let numDocumento = document.getElementById("numDocumento").value;
    let genero = document.getElementById("genr").value;
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

    if (operacion === true) {
        datos[indice].nombre = document.getElementById("nombre").value;
        datos[indice].apellido = document.getElementById("apellido").value;
        datos[indice].tipoDocumento = document.getElementById("fm").value;
        datos[indice].numDocumento = document.getElementById("numDocumento").value;
        datos[indice].genero = document.getElementById("genr").value;
        datos[indice].telefono = document.getElementById("telefono").value;
        datos[indice].correo = document.getElementById("correo").value;
        datos[indice].fecNacimiento = document.getElementById("fecNacimiento").value;
    } else {
        datos.push(datosUsuario);
    }
    
    document.querySelector("#ac").value = "Aceptar";

    console.log(datosUsuario);

    swal("¡Registro Exitoso!", "Tu registro se ha completado con éxito.", "success");

    operacion = false;

    document.getElementById("tablaa").innerHTML = "";

    pintar();
    limpiar()
}

function validacion() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    // let tipoDocumento = document.getElementById("fm").value;
    let numDocumento = document.getElementById("numDocumento").value;
    // let genero = document.getElementById("genr").value;
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
    else {
        registro();
    }
    
}

function pintar() {
    let frag = document.createDocumentFragment()

    datos.forEach((item, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");
        let editar = document.createElement("button");
        let eliminar = document.createElement("button");

        editar.textContent = "📝";
        editar.classList.add('botonEditar');
        editar.addEventListener("click", () => {
            document.querySelector("#ac").value = "Actualizar";
            edit(item, index);
        });
        eliminar.textContent = "❌";
        eliminar.classList.add('botonEliminar');
        eliminar.addEventListener("click", () => {
            delet(index);
        })
        td1.textContent = item.nombre;
        td2.textContent = item.apellido;
        td3.textContent = item.tipoDocumento;
        td4.textContent = item.numDocumento;
        td5.textContent = item.genero;
        td6.textContent = item.telefono;
        td7.textContent = item.correo;
        td8.textContent = item.fecNacimiento;

        td9.appendChild(editar);
        td9.appendChild(eliminar);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        frag.appendChild(tr);

        document.getElementById("tablaa").appendChild(frag);
    })
}

function edit(item, i) {
    operacion = true;
    indice = i;
    console.log(item);
    document.getElementById("nombre").value = item.nombre;
    document.getElementById("apellido").value = item.apellido;
    document.getElementById("fm").value = item.tipoDocumento;
    document.getElementById("numDocumento").value = item.numDocumento;
    document.getElementById("genr").value = item.genero;
    document.getElementById("telefono").value = item.telefono;
    document.getElementById("correo").value = item.correo;
    document.getElementById("fecNacimiento").value = item.fecNacimiento;
}

function limpiar() {

    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("fm").value = '';
    document.getElementById("numDocumento").value = '';
    document.getElementById("genr").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("correo").value = '';
    document.getElementById("fecNacimiento").value = '';
}

function delet(i) {
    indice = i;
    datos.splice(indice, 1);
    document.getElementById("tablaa").innerHTML = "";
    pintar();
}
