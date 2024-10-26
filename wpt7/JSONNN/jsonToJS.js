var Person = `{"name":"Omen","age":31,"gender":"male","hobbies":["actor", " killing people"]}`
console.log('connected')

var btn = document.querySelector('#inf');

var jsinfo = JSON.parse(Person);

btn.addEventListener('click', () =>{
    console.log('connected')
    var address = document.querySelector('.c');
    var childern = document.createElement('h2');
    address.innerHTML = ' ';
    childern.innerHTML = `${jsinfo.name}   ${jsinfo.age}  ${jsinfo.gender}  ${jsinfo.hobbies}`
    address.appendChild(childern);  
})