let value1 = parseInt(document.getElementById('valueA').value)
let value2 = parseInt(document.getElementById('valueB2').value)
let result = document.getElementById('result')
console.log(typeof parseInt(value2.value));
console.log( typeof parseInt(value1.value));

// result.value= value1.value + value2.value
// result.value= parseInt(value1.value) + parseInt(value2.value)
result.value= value1 + value2

function getResult(){
    let value1 = parseInt(document.getElementById('valueA').value)
let value2 = parseInt(document.getElementById('valueB2').value)
    console.log('I am clicked');
    result.value= value1 + value2
}
