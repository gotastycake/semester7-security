export const decodeCaesar = (input, decodeXor) => {
    const results = [];
    const scores = [];
    for (let key = 0; key < 255; key++) {
        const result = decodeXor(input, key);
        results.push(result);
        const score = getTextScore(result);
        scores.push(score);
    }

    const max = Math.max(...scores);
    const index = scores.lastIndexOf(max);
    return { index, result: results[index] };
};

const getTextScore = input => {
    let sum = 0;
    for (const char of input) {
        const charCode = char.charCodeAt(0);
        sum += charCode >= 32 && charCode <= 90 || charCode >= 97 && charCode <= 122 ? 1 : -1;
        // sum += ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || ['.,\x20:-"/'].indexOf(char) !== -1) ? 1 : -1;
    }
    return sum;
};

export const decodeVigenere = (input, keyLength) => {
    let key = [];
    const blocksToDecode = divideIntoBlocks(input, keyLength);
    const decodedBlocks = [];
    for (const block of blocksToDecode) {
        const { index, result } = decodeCaesar(block, decodeXor);
        decodedBlocks.push(result);
        key.push(index);
    }
    const decoded = mergeBlocks(decodedBlocks);
    return { key: String.fromCharCode(...key), decoded };
};

const decodeXor = (input, key) => {
    let output = [];
    for (let i = 0; i < input.length; i ++) {
        const b = input.charCodeAt(i) ^ key;
        output.push(b);
    }
    return String.fromCharCode(...output);
}

const divideIntoBlocks = (input, len) => {
    const blocks = new Array(len).fill('');
    for (let i = 0; i < input.length; i += len) {
        for (let j = 0; j < len; j++) {
            blocks[j] += input[(i + j) % input.length];
        }
    }
    return blocks;
};

const mergeBlocks = blocks => {
    const merged = [];
    for (let i = 0; i < blocks[0].length; i++) {
        for (let j = 0; j < blocks.length; j++) {
            merged.push(blocks[j][i]);
        }
    }
    return merged.join('');
};
