import readlineSync from 'readline-sync';

let nRows = readlineSync.question("No.of Rows? ");

for (let n = nRows; n > 0; n = n - 1) {
    // console.log("I love Vivas ... please buy some");
    console.log("#".repeat(n));
}