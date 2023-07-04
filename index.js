//1

let firstNumber = 20;
while (firstNumber <= 30){
  console.log(firstNumber);
  firstNumber += 0.5;

}

//2
let oneDollar = 27;
let i = 10;
while (i <= 100) {
  let currensyUah =  i * oneDollar;
  console.log(`${i} dollars = ${currensyUah} UAH`);
  i+= 10;
}

//3-4-5
let taskThird = parseInt(prompt('Please enter any number?'));
let n = 1;
while (n <= 100 && n*n <= taskThird){
  console.log(n);
  n++
}
let m = 2;
let isSimple = true;

while (m < taskThird) {
  if (taskThird % m === 0) {
  isSimple = false;
  }
  m++;
}

if (isSimple) {
  console.log(`${m} is a simple number`);
} else {
  console.log(`${m} is not a simple number`);
}


let taskFive = false;

while (taskThird >= 3) {
  if (taskThird % 3 === 0) {
    taskThird /= 3;
  } else {
    break;
  }
}

if (taskThird === 1) {
  taskFive = true;
}

if (taskFive) {
  console.log(`${taskThird} can be obtained `);
} else {
  console.log(`${taskThird} cannot be obtained`);
}
