export class cuestionario {
    Cnombre:string;
	Cid:number;	
	NumC:number;
	Cpregunta:string;
	respuestaC:string;

    constructor(Cnombre:string, Cid:number, NumC:number, Cpregunta:string, respuestaC:string) {
        this.Cnombre = Cnombre;
        this.Cid = Cid;
        this.NumC = NumC;
        this.Cpregunta = Cpregunta;
        this.respuestaC = respuestaC
    }
}