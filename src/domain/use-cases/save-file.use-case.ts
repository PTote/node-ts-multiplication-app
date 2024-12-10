import fs from 'fs';
export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}


export class SaveFile implements SaveFileUseCase {

    constructor() { }

    execute(options: Options): boolean {

        const outputPath = options?.destination ?? 'output';
        const fileName = options?.fileName ?? `Document-file`;

        try {
            fs.mkdirSync(outputPath, { recursive: true })
            fs.writeFileSync(`${outputPath}/${fileName}.txt`, options.fileContent);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }





    }

}