import { informacion } from "./Informacion";

export class infromacion_response {
    recordsets: informacion[][];
    recordset: informacion[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: informacion[][], recordset: informacion[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}