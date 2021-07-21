// First Test Content
    // let value = document.getElementById('content');
    // let points = 3;

    // function add3points(){
    //   value.textContent = points +=3;
    // };

    // function remove1point(){
    //   value.textContent = points -= 1;
    // }


    // function error(){
    //   value.textContent = "Something went wrong, Please try again!"
    //   points = 0;
    // };

// Second test content

let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;


function sum(){
  let total = num1 + num2;
  document.getElementById('sum-el').textContent = 'Sum:' + total;
}
function subtract(){
  let total = num1 - num2;
  document.getElementById('sum-el').textContent = 'Subtraction:' + total;
}
function divide(){
  let total = num1 / num2
  document.getElementById('sum-el').textContent ='Division:' +  total;
}
function multiply(){
  let total = num1 * num2
  document.getElementById('sum-el').textContent ='Multiplication:' +  total;
}





