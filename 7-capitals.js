import readlineSync from 'readline-sync';
let oCapitals = { "ON": "Toronto", "MB": "Winnipeg", "BC": "Victoria" }
let getCapital = (sProv) => {
    return oCapitals[sProv];
}

//input
let sProvShortForm = readlineSync.question("Enter a province abbreviation: ");
//processing
let sCapital = getCapital(sProvShortForm);
//output
console.log(`The capital of ${sProvShortForm} is ${sCapital}`);

//adding part 2
oCapitals['AB'] = 'Edmonton';
console.log(oCapitals);