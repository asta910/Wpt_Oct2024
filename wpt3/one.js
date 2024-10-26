function functionn() {
    var x = document.getElementById('int1').value;
    var y = document.getElementById('int2').value;

    var sum = parseFloat(x) + parseFloat(y);

    document.getElementById('total').value = `Ans : ${sum}`;
}
