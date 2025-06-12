import { respondef } from "./RespondeF";

export class respondef_response {
    recordsets: respondef[][];
    recordset: respondef[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: respondef[][], recordset: respondef[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected
    }
}