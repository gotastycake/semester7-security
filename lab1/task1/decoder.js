import fs from 'fs';

const inputFileName = 'lab1/task1/input.txt';
const outputFileName = 'lab1/task1/output.txt';

const input = fs.readFileSync(inputFileName);
let decoded = '';
for (let i = 0; i < input.length; i += 8) {
    decoded += String.fromCharCode(parseInt(input.slice(i, i+8), 2));
}

const buff = Buffer.from(decoded, 'base64');
let text = buff.toString('ascii');

fs.writeFileSync(outputFileName, text);
