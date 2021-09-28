import readlineSync from 'readline-sync';

let day2dayOfWeek = (nDay) => {
        let aDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday"
        ]
        return aDays[nDay - 1];
    }
    //input
let nDayOfWeek = readlineSync.question("Enter a day of the week ... 1 for Sunday: ")
    //processing
let sDayOfWeek = day2dayOfWeek(nDayOfWeek);
//output
console.log(`The ${nDayOfWeek} day of the week is ${sDayOfWeek}`);