const http = require('http');
const server = http.createServer((req,res) => {
    console.log('Connected successssfully');
    res.write('OMG  ' );

    var a = 5;
    var ans = factorial(a);
    res.write(`factorial of ${a} is ${ans}`);
    res.end();
});

factorial = (a) => {
    let ans = 1;
    for(i = 1; i <= a ; i++){
        ans *= i;
    }
    return ans;
}
server.listen(4700,() =>{
    console.log(`This server is listening on 4700`);
});