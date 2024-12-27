export class CreateTable{

    constructor(){}

    execute(base: number, limit: number = 10): string{
        let textValue = '';
        for (let index = 1; index <= limit; index++) {
            textValue += `${base} x ${index} = ${base * index}`;
            if(index < limit) textValue += '\n';
        }

        return textValue;
    }

}