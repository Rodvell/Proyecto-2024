import { propuestas } from "./Propuestas";

export class propuestas_response {
    recordsets: propuestas[][];
    recordset: propuestas[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: propuestas[][], recordset: propuestas[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}