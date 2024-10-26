const http = require('http');
const server = http.createServer((req,res) => {
    // console.log('Connected successssfully');
    // res.write('Do you know Armstrong number? ' );
    
    var a = 153;
    if(armstrong(a)){
        res.write(`Given number ${a} is an Armstrong Number  `);
    }
    else{
        res.write('Given number is not an Armstrong Number  ');
    }
    
    res.end();
});

const armstrong = (a) => {
    let num = a;
    let ans = 0;
    while(num > 0){
        num1 = num%10;
        ans += num1*num1*num1;
        num = Math.floor(num / 10);
    }
    return ans === a ;
}

server.listen(4700,() =>{
    console.log(`This server is listening on 4700`);
});