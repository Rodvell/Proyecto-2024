import { clases } from "./Clases";

export class clases_response {
    recordsets: clases[][];
    recordset: clases[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: clases[][], recordset: clases[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected

    }
}