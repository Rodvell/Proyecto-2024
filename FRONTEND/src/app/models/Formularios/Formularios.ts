export class formularios {
    Enombre:string;
	Titulo:string;
	idF:number;
	pregunta:string;

    constructor(Enombre:string, Titulo:string, idF:number, pregunta:string) {
        this.Enombre = Enombre;
        this.Titulo = Titulo;
        this.idF = idF;
        this.pregunta = pregunta
    }
}