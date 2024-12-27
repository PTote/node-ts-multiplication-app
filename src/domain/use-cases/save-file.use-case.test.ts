import fs from 'fs';
import { Options, SaveFile } from './save-file.use-case';


describe('', () => {


    test('should save file with default values ', () => {

        const options = {
            fileContent: 'hola mundo',
        };
        const saveFile = new SaveFile();

        const executeCall = saveFile.execute(options);

        expect(executeCall).toBe(true);

        const checkFile = fs.existsSync('output/Document-file.txt');

        const fileContent = fs.readFileSync('output/Document-file.txt', { encoding: 'utf-8' });

        expect(checkFile).toBe(true);
        expect(fileContent).toEqual(options.fileContent);


    });

    test('should save file with custom values', () => {


        const options: Options = {
            fileContent: 'custom content',
            destination: 'custom-output/file-destination',
            fileName: 'custom-table-name',
        };

        const saveFile = new SaveFile();

        saveFile.execute(options);

        if (options.destination) {
            const checkFile = fs.existsSync(options.destination);
            expect(checkFile).toBe(true);
        }
        const fileContent = fs.readFileSync(`${options.destination}/${options.fileName}.txt`, { encoding: 'utf-8' });

        expect(fileContent).toEqual(options.fileContent);

    });

});