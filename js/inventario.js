function ValidarDatos() {

    let codigo = document.getElementById("codigo").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let descripcion = document.getElementById("descripcion").value.trim();
    let marca = document.getElementById("marca").value.trim();
    let valor = document.getElementById("valor_unitario").value.trim();
    let categoria = document.getElementById("categoria").value.trim();
    let ubicacion = document.getElementById("ubicacion").value.trim();

    if (
        codigo === "" ||
        nombre === "" ||
        cantidad === "" ||
        descripcion === "" ||
        marca === "" ||
        valor === "" ||
        categoria === "" ||
        ubicacion === ""
    ) {
        Swal.fire("Error", "Todos los campos son obligatorios.", "error");
        return;
    }

    if (isNaN(codigo))
        return Swal.fire("Error", "El código solo debe contener números.", "error");

    if (/\d/.test(nombre))
        return Swal.fire("Error", "El nombre no puede contener números.", "error");

    if (isNaN(cantidad))
        return Swal.fire("Error", "La cantidad solo debe contener números.", "error");

    if (/\d/.test(marca))
        return Swal.fire("Error", "La marca no puede contener números.", "error");

    if (isNaN(valor))
        return Swal.fire("Error", "El valor unitario solo debe contener números.", "error");

    if (/\d/.test(categoria))
        return Swal.fire("Error", "La categoría no puede contener números.", "error");

    console.log("=== INVENTARIO ===");
    console.log({
        codigo,
        nombre,
        cantidad,
        descripcion,
        marca,
        valor,
        categoria,
        ubicacion
    });
    Swal.fire({
    icon: "success",
    title: "Registro exitoso"
    });

document.querySelector("form").reset();
}