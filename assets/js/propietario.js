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

    }
}