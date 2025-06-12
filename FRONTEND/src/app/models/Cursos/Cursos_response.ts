import { cursos } from "./Cursos";

export class cursos_response {
    recordsets: cursos[][];
    recordset: cursos[];
    output:string;
    rowsAffected: number[];

    constructor(recordsets: cursos[][], recordset: cursos[], output:string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected

    }
}
    