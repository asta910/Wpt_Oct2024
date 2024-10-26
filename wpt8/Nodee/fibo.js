const http = require('http');
const server = http.createServer((req,res) => {
    console.log('Connected successssfully');
    res.write('OMG  ' );
    
    var a = 10;
    res.write(`fibo series till ${a} is :    `)
    for( index = 0; index <= a ; index++){
        let ans = fibo(index);
        res.write(` ${ans}       `);
    }
    res.end();

    
});

fibo = (a) => {
    var dp = new Array(a+1);
    dp[0] = 0;
    dp[1] = 1;
    for(i = 2; i <= a ; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[a];
}



server.listen(4700,() =>{
    console.log(`This server is listening on 4700`);
});