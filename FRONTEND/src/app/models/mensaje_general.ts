export class mensaje_general {
    recordsets: string[];
    output: string;
    rowsAffected: number[];

    constructor(recordsets: string[], output: string, rowsAffected: number[]) {
        this.recordsets = recordsets;
        this.output = output;
        this.rowsAffected = rowsAffected
    }

}