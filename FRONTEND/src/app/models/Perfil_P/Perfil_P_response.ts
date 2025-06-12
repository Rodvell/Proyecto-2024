import { perfil_p } from "./Perfil_P";

export class perfil_p_response {
    recordsets: perfil_p[][];
    recordset: perfil_p[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: perfil_p[][], recordset: perfil_p[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}