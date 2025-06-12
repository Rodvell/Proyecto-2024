export class propuestas {
    Enombre:string;
	Titulo:string;
	descripcion:string;
	requisitos:string;

    constructor(Enombre:string, Titulo:string, descripcion:string, requisitos:string) {
        this.Enombre = Enombre;
        this.Titulo = Titulo;
        this.descripcion = descripcion;
        this.requisitos = requisitos;
    }
}