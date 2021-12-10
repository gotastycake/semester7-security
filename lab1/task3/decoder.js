import fs from 'fs';
import { decodeVigenere } from '../algorithms.js';

const getPeaks = input => {
    const coincidencePeaks = new Array(input.length).fill(0);

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] === input[(i + j) % input.length]) {
                coincidencePeaks[i]++;
            }
        }
    }
    return coincidencePeaks;
}

const inputFileName = 'lab1/task3/input.txt';
const outputFileName = 'lab1/task3/output.txt';

const input = fs.readFileSync(inputFileName).toString();

const buff = Buffer.from(input, 'base64');
let text = buff.toString('utf-8');

const peaks = getPeaks(text);

// console.log(peaks);
const keyLength = 3;

const { key, decoded } = decodeVigenere(text, keyLength);

fs.writeFileSync(outputFileName, `${key}\n${decoded}`);