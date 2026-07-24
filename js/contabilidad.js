function ValidarDatos() {

    let ventas = document.getElementById("ventas").value.trim();
    let fecha = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value.trim();
    let egresos = document.getElementById("egresos").value.trim();
    let concepto = document.getElementById("concepto").value.trim();
    let valor = document.getElementById("valor").value.trim();

    if (
        ventas == "" ||
        fecha == "" ||
        ingresos == "" ||
        egresos == "" ||
        concepto == "" ||
        valor == ""
    ) {

        Swal.fire(
            "Error",
            "Todos los campos son obligatorios.",
            "error"
        );

        return;
    }

    if (isNaN(ventas)) {

        Swal.fire(
            "Error",
            "Las ventas solo pueden contener números.",
            "error"
        );

        return;
    }

    if (isNaN(ingresos)) {

        Swal.fire(
            "Error",
            "Los ingresos solo pueden contener números.",
            "error"
        );

        return;
    }

    if (isNaN(egresos)) {

        Swal.fire(
            "Error",
            "Los egresos solo pueden contener números.",
            "error"
        );

        return;
    }

    if (isNaN(valor)) {

        Swal.fire(
            "Error",
            "El valor solo puede contener números.",
            "error"
        );

        return;
    }

    console.log("===== CONTABILIDAD =====");

    console.log("Ventas:", ventas);
    console.log("Fecha:", fecha);
    console.log("Ingresos:", ingresos);
    console.log("Egresos:", egresos);
    console.log("Concepto:", concepto);
    console.log("Valor:", valor);

    Swal.fire({

        icon: "success",
        title: "Registro exitoso",
        text: "Datos registrados correctamente."

    }).then(() => {

        document.querySelector("form").reset();

    });

}