//Ejercicio 1: Calculadora simple
//Crea una función llamada calculadora que acepte
// tres parámetros: dos números y un operador (+, -, *, /)
// y devuelva el resultado de la operación.

function calculadora(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
        return "Operación no válida"
  }
}
console.log(calculadora(20,16,'-'))
