function ValidarDatos() {

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let tipoDocumento = document.getElementById("tipo_documento").value;
    let documento = document.getElementById("numero_documento").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let genero = document.getElementById("genero").value;
    let cargo = document.getElementById("cargo").value.trim();
    let fecha = document.getElementById("fecha_nacimiento").value;
    let contrasena = document.getElementById("contrasena").value;

    if (
        nombre == "" ||
        apellido == "" ||
        tipoDocumento == "" ||
        documento == "" ||
        telefono == "" ||
        correo == "" ||
        genero == "" ||
        cargo == "" ||
        fecha == "" ||
        contrasena == ""
    ) {

        Swal.fire(
            "Error",
            "Todos los campos son obligatorios.",
            "error"
        );

        return;
    }

    if (/\d/.test(nombre)) {

        Swal.fire(
            "Error",
            "El nombre no puede contener números.",
            "error"
        );

        return;
    }

    if (/\d/.test(apellido)) {

        Swal.fire(
            "Error",
            "El apellido no puede contener números.",
            "error"
        );

        return;
    }

    if (isNaN(documento)) {

        Swal.fire(
            "Error",
            "El documento solo debe contener números.",
            "error"
        );

        return;
    }

    if (isNaN(telefono) || telefono.length != 10) {

        Swal.fire(
            "Error",
            "El teléfono debe tener exactamente 10 dígitos.",
            "error"
        );

        return;
    }

    if (!correo.includes("@")) {

        Swal.fire(
            "Error",
            "Correo electrónico inválido.",
            "error"
        );

        return;
    }

    if (contrasena.length < 8) {

        Swal.fire(
            "Error",
            "La contraseña debe tener mínimo 8 caracteres.",
            "error"
        );

        return;
    }

    console.log("===== USUARIO =====");

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Tipo Documento:", tipoDocumento);
    console.log("Documento:", documento);
    console.log("Teléfono:", telefono);
    console.log("Correo:", correo);
    console.log("Género:", genero);
    console.log("Cargo:", cargo);
    console.log("Fecha:", fecha);
    console.log("Contraseña:", contrasena);

    Swal.fire({

        icon: "success",
        title: "Registro exitoso",
        text: "Usuario registrado correctamente."

    }).then(() => {

        document.querySelector("form").reset();

    });

}