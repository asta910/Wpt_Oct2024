const http = require('http');

const server = http.createServer((req,res) => {
    res.write("hello ");
    var x=50;
    var y = 67;
    var z = sum(x,y);
    res.write(`Sum of ${x} and ${y} is ${z}`);
    res.end();
}
);


function sum(a,b){
    return a + b;
}

server.listen(4600,()=>{
    console.log('Server is listening on port 4600');
});