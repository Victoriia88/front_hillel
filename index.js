let firstLoad = true;

function promptNumber(messageNumber) {
   let result;
   do {
      if (firstLoad) {
         result = prompt('Будемо знаходити рішення квадратного рівняння виду:\nax^2 + bx + c = 0\n' + messageNumber);
         firstLoad = false;
      } else {
         result = prompt(messageNumber);
      }
      if (result === null) {
         alert('Жаль. Сподіваюсь ще побачитись');
         return null;
      }
      result = parseFloat(result);
   } while (isNaN(result));
   return result;
}

function solveQuadraticEquation() {
   const a = promptNumber('Введіть a');
   if (a === null) return;

   const b = promptNumber(`a = ${a}\nВведіть b`);
   if (b === null) return;

   const c = promptNumber(`a = ${a}, b = ${b}\nВведіть c`);
   if (c === null) return;
   const discriminant = b ** 2 - 4 * a * c;

   if (a === 0) {
      alert('a = 0. Рівняння не має рішень');
   } else if (discriminant < 0) {
      alert('D < 0. Рівняння не має рішень');
   } else if (discriminant === 0) {
      const x = -b / (2 * a);
      alert(`D = 0. Єдиний корінь рівняння: x = ${x}`);
   } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      alert(`D > 0. Корені рівняння: x1 = ${x1}, x2 = ${x2}`);
   }
}
solveQuadraticEquation();