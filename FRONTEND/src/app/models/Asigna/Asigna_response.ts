import { asigna } from "./Asigna";

export class asigna_response {
    recordsets: asigna[][];
    recordset: asigna[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: asigna[][], recordset: asigna[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected

    }
}