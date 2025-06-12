export class respondeC {
    Cnombre:string;
	Cid:number;
	NumC:number;
	Pcorreo:string;
	respuesta:string;
	estadoRC:string;

    constructor(Cnombre:string, Cid:number, NumC:number, Pcorreo:string, respuesta:string, estadoRC:string) {
        this.Cnombre = Cnombre;
        this.Cid = Cid;
        this.NumC = NumC;
        this.Pcorreo = Pcorreo;
        this.respuesta = respuesta;
        this.estadoRC = estadoRC
    }
}