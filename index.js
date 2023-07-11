let firstLoad = true;

function promptNumber(message) {
   let result;
   do {
      if (firstLoad) {
         result = prompt('Будемо знаходити рішення квадратного рівняння виду:\nax^2 + bx + c = 0\n' + message);
         firstLoad = false;
      } else {
         result = prompt(message);
      }
      if (result === null) {
         alert('Жаль. Сподіваюсь ще побачитись');
         return null;
      }
      result = parseFloat(result);
   } while (isNaN(result));
   return result;
}

function ifInvalid() {
   alert('a = 0. Функція не має рішень');
}

function calculateQuadraticEquation(a, b, c, invalidCallback) {
   if (a === 0) {
      invalidCallback();
      return null;
   }
   const discriminant = b ** 2 - 4 * a * c;
   if (discriminant < 0) {
      return { d: discriminant, x1: null, x2: null };
   } else if (discriminant === 0) {
      const x = -b / (2 * a);
      return { d: discriminant, x1: x, x2: null };
   } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { d: discriminant, x1: x1, x2: x2 };
   }
}

function solveQuadraticEquation() {
   const a = promptNumber('Введіть a');
   if (a === null) return;

   const b = promptNumber(`a = ${a}\nВведіть b`);
   if (b === null) return;

   const c = promptNumber(`a = ${a}, b = ${b}\nВведіть c`);
   if (c === null) return;

   const result = calculateQuadraticEquation(a, b, c, ifInvalid);
   if (result === null) {
      return;
   }

   const discriminant = b ** 2 - 4 * a * c;

   if (result.d < 0) {
      alert(`D < 0. Рівняння не має рішень`);
   } else if (result.d === 0) {
      alert(`D = 0. Єдиний корінь рівняння: x = ${result.x1}`);
   } else {
      alert(`D > 0. Корені рівняння: x1 = ${result.x1}, x2 = ${result.x2}`);
   }
}

solveQuadraticEquation();
