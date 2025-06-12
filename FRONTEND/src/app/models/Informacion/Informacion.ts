export class informacion {
    Cnombre:string;
	Cid:number;
	idT:number; 
	titulo:string;
	info:string;
	linkV:string;

    constructor(Cnombre:string, Cid:number, idT:number, titulo:string, info:string, linkV:string) {
        this.Cnombre = Cnombre;
        this.Cid = Cid;
        this.idT = idT;
        this.titulo = titulo;
        this.info = info;
        this.linkV = linkV
    }
}