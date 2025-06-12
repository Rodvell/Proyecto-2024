import { cuestionario } from "./Cuestionario";

export class cuestionario_response {
    recordsets: cuestionario[][];
    recordset: cuestionario[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: cuestionario[][], recordset: cuestionario[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected

    }
}