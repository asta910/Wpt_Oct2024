import express from 'express';

const app = express();

app.get('/login', (req,res)=> {
    console.log("Connected");
    res.send("This folder belong to me ");
});

app.get('/',(req,res) => {
    console.log('Nothing');
    res.send("Without any info after /")
})

app.listen(6800,()=>{
    console.log('Server is started ');
})