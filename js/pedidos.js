function ValidarDatos() {

    let codigo = document.getElementById("codigo").value.trim();
    let producto = document.getElementById("producto").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let metodo = document.getElementById("metodo").value;
    let valor = document.getElementById("valor").value.trim();
    let telefono = document.getElementById("telefono").value.trim();

    if (
        codigo == "" ||
        producto == "" ||
        direccion == "" ||
        usuario == "" ||
        cantidad == "" ||
        metodo == "" ||
        valor == "" ||
        telefono == ""
    ) {

        Swal.fire(
            "Error",
            "Todos los campos son obligatorios.",
            "error"
        );

        return;
    }

    if (isNaN(codigo)) {

        Swal.fire(
            "Error",
            "El código del producto solo puede contener números.",
            "error"
        );

        return;
    }

    if (/\d/.test(producto)) {

        Swal.fire(
            "Error",
            "El nombre del producto no puede contener números.",
            "error"
        );

        return;
    }

    if (/\d/.test(usuario)) {

        Swal.fire(
            "Error",
            "El nombre del usuario no puede contener números.",
            "error"
        );

        return;
    }

    if (isNaN(cantidad)) {

        Swal.fire(
            "Error",
            "La cantidad solo puede contener números.",
            "error"
        );

        return;
    }

    if (isNaN(valor)) {

        Swal.fire(
            "Error",
            "El valor a cancelar solo puede contener números.",
            "error"
        );

        return;
    }

    if (isNaN(telefono)) {

        Swal.fire(
            "Error",
            "El teléfono solo puede contener números.",
            "error"
        );

        return;
    }

    console.log("===== PEDIDO =====");

    console.log("Código:", codigo);
    console.log("Producto:", producto);
    console.log("Dirección:", direccion);
    console.log("Usuario:", usuario);
    console.log("Cantidad:", cantidad);
    console.log("Método:", metodo);
    console.log("Valor:", valor);
    console.log("Teléfono:", telefono);

    Swal.fire({

        icon: "success",
        title: "Pedido registrado",
        text: "El pedido fue registrado correctamente."

    }).then(() => {

        document.querySelector("form").reset();

    });

}