import { aplica } from "./Aplica";

export class aplica_response {
    recordsets: aplica[][];
    recordset: aplica[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: aplica[][], recordset: aplica[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}