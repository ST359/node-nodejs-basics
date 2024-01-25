import process from 'node:process'

const parseArgs = () => {
    let argRaw = process.argv;
    let processedArgs = [];
    for(let i = 2; i<argRaw.length; i+=2){
        processedArgs.push(`${argRaw[i].slice(2)} is ${argRaw[i+1]}`);
    }
    console.log(processedArgs.join(', '));
};

parseArgs();