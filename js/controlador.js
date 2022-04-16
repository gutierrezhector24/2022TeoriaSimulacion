var Empleados = [];
var Ordenes = [];

//no se estan usando estas funciones
/*
function abrirOrden(){
 document.getElementById('containerEmploye').style.display = 'none';
 document.getElementById('containerPrincipal').style.display = 'none';
 document.getElementById('containerOrden').style.display = 'block';
}

function abrirEmpleado(){
    document.getElementById('containerEmploye').style.display = 'block';
    document.getElementById('containerPrincipal').style.display = 'none';
    document.getElementById('containerOrden').style.display = 'none';
}

function abrirIniciales(){
    document.getElementById('containerEmploye').style.display = 'none';
    document.getElementById('containerPrincipal').style.display = 'block';
    document.getElementById('containerOrden').style.display = 'none';
}
*/

function agregarEmpleado(){
    var Empleado = {
        nombres: document.getElementById('nombresEmpleado').value,
        apellidos: document.getElementById('apellidosEmpleado').value,
        fechaIngreso: document.getElementById('fechaIngreso').value      
    }

    Empleados.push(Empleado);
    console.log(Empleados);
}

function agregarOrden(){
    var Orden = {
        id: document.getElementById('idOrden').value,
        tipo: document.getElementById('tipoOrden').value
    };
    Ordenes.push(Orden);
    console.log(Ordenes);
}