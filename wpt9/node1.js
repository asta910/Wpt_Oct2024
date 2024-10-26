const fs = require('fs');
fs.writeFile('one.txt','new text is available ',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file changed");
    }
})

//printing
fs.readFile('one.txt',(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
})

fs.appendFile('one.txt','daku is back  ',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file edited");
    }
})

//print
fs.readFile('one.txt',(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
})

fs.unlink('data2.txt',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('deleted unsuccessfully');
    }
})

fs.rename('data.txt','dataaaaaaaaaaaa.txt',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('deleted unsuccessfully');
    }
})