const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Oscillated(N) {
    // Base case (When n becomes 0 or  
      // negative) 

    if (N == 0 || N < 0) { 
        console.table(N + " "); 
        return N ; 
    } 

    // First print decreasing order
    console.table(N + " "); 
    Oscillated(N - 5); 

    // Then print increasing order 
    console.table(N + " "); 

    return N;
}


rl.question('Input your Number: ', (answer) => {
    console.log(`Thank you for your valuable feedback: `);
    Oscillated(answer);
    rl.close();
});
