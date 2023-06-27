let firstNumber = prompt ('Please enter the first number?');
let secondNumber = prompt ('Please enter the second number?');
let minus = (+firstNumber) - (+secondNumber);
let plus = (+firstNumber) + (+secondNumber);
let multiplication = (+firstNumber) * (+secondNumber);
let divide = (+firstNumber) / (+secondNumber);

alert (`Your result:
     ${firstNumber} - ${secondNumber} =  ${minus} 
     ${firstNumber} + ${secondNumber} =  ${plus} 
     ${firstNumber} * ${secondNumber} =  ${multiplication} 
     ${firstNumber} /  ${secondNumber} =  ${divide} `); 