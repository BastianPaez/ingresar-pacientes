// importaciones
import{Mascota} from './mascota.js';
import {Especie} from './especie.js';
import {Propietario} from './propietario.js';

//variables
const formulario = document.querySelector('#formulario');
const tipos = document.querySelectorAll('#tipo option')



eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', recopilarDatos)
}


// funciones

// tomar los datos del formulario y guardarlos en objetos
function recopilarDatos(e){
    e.preventDefault();
    
    const mascota = rellenarMascota();
    const propietario = rellenarPropietario(mascota)
    console.log(propietario)
}


//tomamos los datos de la mascota en el form e instanciamos los objetos
function rellenarMascota(){
    const mascota = new Mascota();
    const tipo = new Especie;
    mascota.setNombre = document.querySelector('#nombreMascota').value;
    mascota.setmotivoConsulta = document.querySelector('#enfermedad').value;
    tipo.setTipo = document.querySelector('#tipo').value;
    mascota.setTipo = tipo.getTipo;
    return mascota;
}

function rellenarPropietario(mascota){
    const propietario = new Propietario();
    propietario.setNombre = document.querySelector('#propietario').value;
    propietario.setDireccion = document.querySelector('#direccion').value;
    propietario.setTelefono = document.querySelector('#telefono').value;
    propietario.setMascota = mascota;
    return propietario
}

