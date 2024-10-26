var array = 
    [
        '{"name":"breach", "game":"valo", "hairs":"brown", "role":"Initiator"}', 
        '{"name":"brimStone", "game":"valo", "hairs":"white", "role":"Controller"}',
        '{"name":"Omen", "game":"valo", "hairs":"black", "role":"Controller"}',
        '{"name":"Sova", "game":"valo", "hairs":"blonde", "role":"Initiator"}', 
        '{"name":"Sage", "game":"valo", "hairs":"black", "role":"Sentinel"}',
        '{"name":"Phoenix", "game":"valo", "hairs":"red", "role":"Duelist"}'
    ];

var jsinfo = array.map(e => JSON.parse(e));

var n = array.length

for(let i =0; i < n; i++ ){
    console.log(jsinfo[i].name,jsinfo[i].game,jsinfo[i].hairs);
}

var fun = document.querySelector('#btn');

fun.addEventListener('click',()=>{

    var address = document.querySelector('#c');
    var childe = document.createElement('h2');

    for(let i =0; i < n; i++ ){
        childe.innerHTML += `${i+1}. name is :${jsinfo[i].name}, in game :${jsinfo[i].game}, eye Color : ${jsinfo[i].hairs}, Role : ${jsinfo[i].role} <br>`;
    }
    
    address.appendChild(childe);
})