export class Especie{
    constructor(Tipo){
        this.Tipo = Tipo;
    }

    get getTipo(){
        return `El tipo de animal es un ${this.Tipo}`;
    }

    set setTipo(value){
        this.Tipo = value;
    }
}