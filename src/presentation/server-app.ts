import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    nameFile: string;
    destinationFile: string;
}

export class ServerApp {

    static run(options: RunOptions){
        console.log('Server running...');

        const table = new CreateTable()
        .execute(options.base, options.limit);

        if(options.showTable){
            console.log(table);
        };

        const wasCreated = new SaveFile()
        .execute({
            fileContent: table,
            destination: options?.destinationFile,
            fileName: options?.nameFile
        });

        (wasCreated) ? console.log('File created!') : console.log('Error creating a file');
        


    };
}