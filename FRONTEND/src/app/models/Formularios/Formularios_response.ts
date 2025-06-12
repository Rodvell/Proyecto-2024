import { formularios } from "./Formularios";

export class formularios_response {
    recordsets: formularios[][];
    recordset: formularios[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: formularios[][], recordset: formularios[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}