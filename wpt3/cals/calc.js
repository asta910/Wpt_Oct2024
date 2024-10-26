let str = "";
let Buttonss = document.querySelectorAll('.btn');

Array.from(Buttonss).forEach((bt) => {
    bt.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
                str = eval(str.replace('x', '*'));
                document.querySelector('.displayy').value = str;
        } else if (e.target.innerHTML == 'AC') {
            str = "";
            document.querySelector('.displayy').value = str;
        }else if(e.target.value=='x2'){
            str=+str*+str;
            document.querySelector('.displayy').value=str;
        }else if(e.target.value=='x'){
            str=+str*+e.target.innerHTML;
            document.querySelector('.displayy').value=str;
        }
        
        
        else {
            str += e.target.innerHTML;
            document.querySelector('.displayy').value = str; 
        }
    });
});
