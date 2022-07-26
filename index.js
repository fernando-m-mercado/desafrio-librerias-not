
/*

let productos = []

let formulario;
let inputNombre;
let inputPrecioVenta;
let inputPrecioCompra;
let inputCantidad;
let tabla;

class Productos {
    constructor(nombre, precioCompra, precioVenta, cantidad) {
        this.nombre = nombre
        this.precioCompra = precioCompra
        this.precioVenta = precioVenta
        this.cantidad = cantidad
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario")
    inputNombre = document.getElementById("inputNombreProducto")
    inputPrecioCompra = document.getElementById("inputPrecioCompra")
    inputPrecioVenta = document.getElementById("inputPrecioVenta")
    inputCantidad = document.getElementById("inputCantidad")
    tabla = document.getElementById("tablaProductos");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event)
}

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value
    let precioCompra = parseFloat(inputPrecioCompra.value);
    let precioVenta = parseFloat(inputPrecioVenta.value);
    let cantidad = parseInt(inputCantidad.value);

    let producto = new Productos(nombre, precioCompra, precioVenta, cantidad)

    productos.push(producto)

    formulario.reset();
    agregarProductosTabla();

}

function agregarProductosTabla(){
    productos.forEach ((producto) => {
        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML=`
        <td>${producto.nombre}</td>
        <td>${producto.precioCompra}</td>
        <td>${producto.precioVenta}</td>
        <td>${producto.cantidad}</td>`;

        tabla.tBodies[0].append(filaTabla);
    });
}

function main() {
    inicializarElementos()
    inicializarEventos()
    
}

main ()
*/

let pacientes = []

let formulario;
let inputNombre;
let inputSexo;
let inputEdad;
let inputPeso;
let inputAltura;
let inputIMC;
let tabla;

class Pacientes {
    constructor(nombre,sexo,edad,peso,altura,imc) {
        this.name = nombre;
        this.sex = sexo;
        this.age = edad;
        this.weight = peso;
        this.height = altura;
        this.imc = Math.round(peso / (altura**2))

    }
}

function inicializarElementos () {
    formulario = document.getElementById("formulario")
    inputNombre = document.getElementById("inputNombre")
    inputSexo = document.getElementById("inputSexo")
    inputEdad = document.getElementById("inputEdad")
    inputPeso = document.getElementById("inputPeso")
    inputAltura = document.getElementById("inputAltura")
    tabla = document.getElementById("tablaPacientes")

}

function inicializarEventos () {
    formulario.onsubmit = (event) => validarFormulario(event)
}

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let sexo = inputSexo.value;
    let edad = inputEdad.value;
    let peso = inputPeso.value;
    let altura = inputAltura.value;

    let paciente = new Pacientes(nombre,sexo,edad,peso,altura)

    pacientes.push(paciente)

    formulario.reset();
    limpiarTabla();
    agregarPacientesTabla();
    almacenarPacientesLocalStorage ();
}


function agregarPacientesTabla() {
    pacientes.forEach((paciente) => {
        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML=`
        <td>${paciente.name}</td>
        <td>${paciente.sex}</td>
        <td>${paciente.age}</td>
        <td>${paciente.weight}</td>
        <td>${paciente.height}</td>
        <td>${paciente.imc}</td>`;

        tabla.tBodies[0].append(filaTabla);
    }  )
}


function limpiarTabla() {
    while (tabla.rows.length >1){
        tabla.deleteRow(1)
    }
}

function almacenarPacientesLocalStorage (){
    localStorage.setItem("listaPacientes", JSON.stringify(pacientes))
}

function obtenerPacientesLocalStorage(){
    let pacientesAlmacenados = localStorage.getItem("listaPacientes")
    if ( pacientesAlmacenados !== null){
        pacientes = JSON.parse(pacientesAlmacenados)
    }
}

function main() {
    inicializarElementos()
    inicializarEventos()
    obtenerPacientesLocalStorage()
    agregarPacientesTabla();
}

main ()
