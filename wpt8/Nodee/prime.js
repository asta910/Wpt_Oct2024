const http = require('http');
const server = http.createServer((req,res) => {
    // console.log('Connected successssfully');
    // res.write('Do you know Armstrong number? ' );
    
    var a = 11;
    if(isPrime(a)){
        res.write(`Given number ${a} is an Prime Number  `);
    }
    else{
        res.write(`Given number ${a}is not a prime Number  `);
    }
    res.end();
});

function isPrime(a) {
    if (a < 2) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true; 
}

server.listen(4700,() =>{
    console.log(`This server is listening on 4700`);
});