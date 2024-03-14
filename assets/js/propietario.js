export class Propietario {
    constructor(nombre, direccion, telefono){
        this.nombre    = nombre;
        this.direccion = direccion;
        this.telefono  = telefono;
        this.mascota;
    }

    set setNombre(nombre){
        this.nombre = nombre
    }
    set setDireccion(direccion){
        this.direccion = direccion
    }
    set setTelefono(telefono){
        this.telefono = telefono
    }
    set setMascota(mascota){
        this.mascota = mascota
    }

    datosPropietarios(){
        const divLista = document.createElement('div');
        divLista.classList.add('list-group-item', 'bg-success', 'text-start');
        const li1 = document.createElement('li');
        li1.classList.add('text-start')
        li1.textContent = `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
        const li2 = document.createElement('li');
        li2.classList.add('text-start')
        li2.textContent = `El tipo de animal es un: ${this.mascota.getTipo}, mientras que el nombre de la mascota es: ${this.mascota.getNombre} y la enfermedad es: ${this.mascota.getMotivoConsulta}`
        divLista.appendChild(li1)
        divLista.appendChild(li2)
        document.querySelector('#resultado ul').appendChild(divLista)
    }
}