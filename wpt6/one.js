// function fun(){
//     let info = document.getElementsByClassName('name');
//     document.write(`${info} class is `)
// }
// function fun(){
//     let info = document.getElementsByClassName('divf');
//     document.write(`${info} class is `)
// }
// function fun(){
//     let info = document.getElementById('okay');
//     document.write(`${info} class is `)
// }
// function fun(){
//         let info = document.body;
//         document.write(`${info} class is `)
// }
// function fun(){
//     let info = document.head;
//     document.write(`${info} class is `)
// }
// function fun(){
//     let info = document.getElementsByClassName('samee');
//     document.write(`${info} class is `)
// }
// function fun(){
//     let info = document.getElementsByClassName('last');
//     document.write(`${info}`)
// }
// function fun(){
//     let info = document.title;
//     document.write(`${info}`)
// }

function fun1() {
    const img1 = document.getElementById('img1');
    const add = document.getElementsByClassName('co')[0];

    const newele = document.createElement('img');
    newele.src = img1.src;

    add.appendChild(newele);
}

function fun2() {
    const img2 = document.getElementById('img2');
    const add = document.getElementsByClassName('co')[0];


    const newe = document.createElement('img');
    newe.src = img2.src;
    
    add.appendChild(newe);
}


function fun3() {
    let img3 = document.getElementById('img3');
    let contain = document.getElementsByClassName('co')[0];

    let create = document.createElement('img');
    create.src=img3.src;

    contain.appendChild(create);

}