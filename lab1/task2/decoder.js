import fs from 'fs';
import { decodeCaesar } from '../algorithms.js';

export const decodeXorHex = (input, key) => {
    let output = [];
    for (let i = 0; i < input.length; i += 2) {
        const b = parseInt(input.slice(i, i + 2), 16) ^ key;
        output.push(b);
    }
    return String.fromCharCode(...output);
}

const inputFileName = 'lab1/task2/input.txt';
const outputFileName = 'lab1/task2/output.txt';
let input = fs.readFileSync(inputFileName).toString();

const { result } = decodeCaesar(input, decodeXorHex);
fs.writeFileSync(outputFileName, result);
