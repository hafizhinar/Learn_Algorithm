const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function BonusCoklat(Jumlah){
    let Nilai = Math.floor(Jumlah);
    let bonusTukar = Nilai / 5;
    let totalAll, tukarBaru;
    
    if(Math.floor(bonusTukar) > 5){
        tukarBaru = bonusTukar / 5;
    }else{
        tukarBaru = 0;
    }

    totalAll = Nilai + bonusTukar + tukarBaru;

    return Math.floor(totalAll);
}

rl.question('Jumlah Bungkus Coklat yang ditukar: ', (answer) => {
    let result = BonusCoklat(answer);
    console.log(`Thank you for your valuable feedback: ${result} `);
    BonusCoklat(answer);
    rl.close();
});
