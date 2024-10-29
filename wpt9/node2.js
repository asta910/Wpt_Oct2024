const fs = require('fs')
fs.open('one.txt','w',(e,file)=>{
    if(e)
    {
        console.log(e)
    }else{
        console.log("new file created");
        console.log(file);
    }
})


fs.writeFile('one.txt','Sureeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',(e)=>{
    if(e)
    {
        console.log(e)
    }else{
        console.log('File changed');
    }
})

fs.readFileSync('one.txt',(e,data)=>{
    if(e)
    {
        console.log(e)
    }else{
        console.log(data.toString());
    }
})


fs.open('one.txt','r',(e,file)=>{
    if(e)
    {
        console.log(e)
    }else{
        console.log("File made with r ");
        console.log(file);
    }
})

