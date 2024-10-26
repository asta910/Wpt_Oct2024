let string2="";
let BUttons=document.querySelectorAll('.button');
Array.from(BUttons).forEach((bt=>{
    bt.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string2=eval(string2);
            document.querySelector('input').value=string2;
        }else if(e.target.innerHTML=="AC"){
            string2="";
            document.querySelector('input').value=string2;
        }else if(e.target.innerHTML=="x2"){
            string2=string2*string2;
            document.querySelector('input').value=string2;
        }else if(e.target.innerHTML=="x3"){
            string2=string2*string2*string2;
            document.querySelector('input').value=string2;
        }else{
            string2=string2+e.target.innerHTML;
            document.querySelector('input').value=string2;
        }
    })
}))
