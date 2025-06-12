import { respondeC } from "./RespondeC";

export class respondeC_response {
    recordsets: respondeC[][];
    recordset: respondeC[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: respondeC[][], recordset: respondeC[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}