import readlineSync from 'readline-sync';

let decodeCharacter = (nChar) => {
    let sAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return sAlphabet[nChar - 1];
}

//input
let nInput = readlineSync.question("enter your code: ");

//output
let sOutput = "";
for (let n = 0; n < String(nInput).length; n++) {
    sOutput = sOutput + decodeCharacter(String(nInput)[n]);
}

console.log(sOutput);