export class Mascota {
    constructor(nombre, motivoConsulta){
        this.nombre         = nombre;
        this.motivoConsulta = motivoConsulta;
    }

    get getNombre(){
        return this.nombre;
    }
    get getTipo(){
        return this.tipo;
    }
    get getMotivoConsulta(){
        return this.motivoConsulta;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setmotivoConsulta(motivoConsulta){
        this.motivoConsulta = motivoConsulta;
    }
    set setTipo(tipo){
        this.tipo = tipo;
    }

}