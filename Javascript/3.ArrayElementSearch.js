const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ':'
})

let size;
let arr = [];

// Helper functions
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log('Press Ctrl + \'C\' to exit at any time');


function askElementNumber() {
    if (arr.length >= size) {
        
        let max = Math.max(...arr);

        let character = max;

        character = "^";
        
        let count = 0;
        for(let i = 0; i<size; i++){
            if(arr[i] == max){
                for(let j =i; j<(size-1); j++){
                    arr[j] = arr[j + 1];
                }
                count++;
                break;
            }
        }
        let newArr = [];
        let pushNewArr = [];
        if(count == 0 ){
            console.log("Element Not Found...!!");
        }else{
            for(var i=0; i<(size-1); i++){
                newArr.push(parseInt(arr[i]));
            }
            pushNewArr.push(...newArr, max, character);
        }
        console.log(`The array is: ${pushNewArr.join(' ')}`)
        rl.close()
    } else {
        rl.question(`Please enter element number : `, (answer) => {

            arr.push(answer);

            askElementNumber();
        });
    }
}

(function askIndexOfArray() {
    rl.question('Please enter your index number? ', (answer) => {

        size = parseInt(answer);

        if (isNumeric(size)) {
            askElementNumber()
        } else {
            console.log('Your input was not recognized as a number. Please try again.')
            askIndexOfArray();
        }
    });
}());