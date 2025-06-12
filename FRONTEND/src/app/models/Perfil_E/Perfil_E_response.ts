import { perfil_e } from "./Perfil_E";

export class perfil_e_response {
    recordsets: perfil_e[][];
    recordset: perfil_e[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: perfil_e[][], recordset: perfil_e[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}