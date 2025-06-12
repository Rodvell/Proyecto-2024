export class cursos {
    Cnombre:string;
	Cdescripcion:string;
	requisitos:string;
	categoria:string;
	duracion:string;
	dificultad:string;
	coste:number;

    constructor(Cnombre:string, Cdescripcion:string, requisitos:string, categoria:string, duracion:string, dificultad:string, coste:number) {
        this.Cnombre = Cnombre;
        this.Cdescripcion = Cdescripcion;
        this.requisitos = requisitos;
        this.categoria = categoria;
        this.duracion = duracion;
        this.dificultad = dificultad;
        this.coste = coste
    }
}