import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugins';


let textValue = '';
let contentForFile = `
=====================
    TABLA DEL 5
=====================    
`;


for (let index = 1; index <= yarg.l; index++) {
    textValue += `${yarg.b} x ${index} = ${yarg.b * index}\n`;
}

contentForFile = contentForFile + textValue;

if(yarg.s){
    console.log(contentForFile);
} 


fs.mkdirSync('outputs',{recursive: true})
fs.writeFile('outputs/tabla-5.txt', 
 contentForFile,
    () => {
    console.log('document created successfully');
});
