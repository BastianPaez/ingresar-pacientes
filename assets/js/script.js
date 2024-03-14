import{Mascota} from './mascota.js';
import {Especie} from './especie.js'






const gato = new Especie('Gato');
const perro = new Especie('Perro');
const conejo = new Especie('Conejo');


const oliver = new Mascota('olvier', 'tos');
oliver.setTipo = gato
console.log(oliver.tipo.getTipo)