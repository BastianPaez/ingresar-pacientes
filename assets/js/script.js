// importaciones
import{Mascota} from './mascota.js';
import {Especie} from './especie.js';
import {Propietario} from './propietario.js';

//variables
const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario input')

eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', recopilarDatos)
}


// funciones

// tomar los datos del formulario y guardarlos en objetos
function recopilarDatos(e){
    e.preventDefault();
    
    validacion();
    if (document.querySelector('.is-invalid')) {
        return;
    }
    
    const mascota = rellenarMascota();
    mascota.getmotivoConsulta
    const propietario = rellenarPropietario(mascota)
    console.log(propietario)
    propietario.datosPropietarios();
}


function validacion(){
    inputs.forEach( input =>{
        input.classList.remove('is-invalid', 'is-valid')
        if (input.value === ''){
            input.classList.add('is-invalid')
            return
        }
    })
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


