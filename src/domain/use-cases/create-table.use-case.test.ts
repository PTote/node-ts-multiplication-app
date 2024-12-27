import { CreateTable } from "./create-table.use-case";

describe('CreateTableUseCase', () => {
    
    test('should create table with default values', () => {

       const createTable = new CreateTable();

       const table = createTable.execute(3);
     
       expect(createTable).toBeInstanceOf(CreateTable);
       expect(table).toContain('3 x 1 = 3');
       expect(table).toContain('3 x 10 = 30');
       expect(typeof table).toBe('string');

    });

    test('should create table with custom values', () => {

        const limit = 20;
        const base = 3;

        const createTable = new CreateTable();
        const table = createTable.execute(base, limit);

        const rows = table.split('\n').length;

        expect(rows).toBe(limit);
        

    });

});