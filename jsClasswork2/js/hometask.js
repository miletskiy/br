// Задание по логическим и циклическим конструкциям:
// 1. Создайте две целочисленные переменные и присвойте им некоторые значения.
// По этим значениям, используя вложенные циклы, нарисуйте прямоугольник из звездочек.
var i, j;

// var first = 15;
// var second = 20;

// for (i = 0 ; i < first ; i++) {
//  for( j = 0; j < second; j++) {
//      document.write("*")
//  }
//  document.write("<br>")
// };

// *************************

// 2. Дано два числа A и B где (A<B).
// Выведите на экран суму всех чисел, расположенных в числовом промежутке от А до В.
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

/* var A = 1, B = 10, sum = 0, odd = "";

for( i = A; i <= B; i++) {
    sum += i
    if (i % 2 == 0) {
        odd+= i +", "
    } ;
}
document.write("Сумма всех чисел: " + sum + "<br>");
document.write("Нечетные значения от А до В:  <br>" + odd);
*/

// *************************

// 3.Напишите программу, которая будет рассчитывать и выводить на экран количество
// возможных вариантов доставки товара. Для решения задачи, используйте факториал N!,
// рассчитываемый с помощью цикла do- while.

/*
function getFactorial(number) {
    if (!number){
      number=5
    };

    var sum = 1, i = 1;
    do {
        sum *= i;
        i += 1;
    }
    while (i <= number);

    document.write( "Факториал числа " + number + " равен " + sum);
}
getFactorial();
*/
// Кому покажется мало то:
// Используя циклы нарисуйте в браузере с помощью пробелов (&nbsp) и звездочек (*):
//  Прямоугольник.
//  Прямоугольный треугольник.
//  Равносторонний треугольник.
//  Ромб.


// Задание по функциям:

// 1. Создайте метод с именем Calculate, который принимает в качестве параметров три целочисленных значения и выводит на экран среднее арифметическое этих параметров.
/*
function Calculate(num1, num2, num3) {
    var sum = (num1 + num2 + num3)/3;
    document.write( "Среднее арифметическое чисел равно " + parseInt(sum));
}
Calculate(4,6,5);

*/
// 2.Создайте четыре функции для арифметических действий:
//(Add – сложение, Sub – вычитание, Mul – умножение, Div – деление).
//Каждая функция должна принимать два параметра и выводить на экран результат
//вычисления. Функция деления должна делать проверку деления на ноль.
// Пользователь вводит значения, над которыми хочет произвести операцию и выбрать саму операцию.

var userInput, userNumber1, userNumber2, flag = true;
var result = 0;
var operations = ["Add", "Sub", "Mul", "Div"];


while (flag) {
    userInput = prompt("Введите операцию, которую хотите осуществить(Add – сложение, Sub – вычитание, Mul – умножение, Div – деление)", "");

    if (operations.includes(userInput)) {
        userNumber1 = +prompt("Введите первое число");
        userNumber2 = +prompt("Введите второе число");
        switch (userInput) {
            case "Add":
                result = userNumber1 + userNumber2;
                flag = false;
                break;
            case "Sub":
                result = userNumber1 - userNumber2;
                flag = false;
                break;
            case "Mul":
                result = userNumber1 * userNumber2;
                flag = false;
                break;
            case "Div":
                if (userNumber2 === 0) {
                    alert("Если делить на ноль - получится бесконечность. Оно вам надо?")
                    break };
                result = userNumber1 / userNumber2;
                flag = false;
                break;
        }
        document.write("Результат операции " + result + "<br>");
    } else if (userInput === null || userInput === "Exit") {
        flag = false
    }
};

document.write("До свидания!");


// 3. Напишите функцию, которая будет принимать число и определять:
// 1. Является ли введенное число положительным или отрицательным.
// 2. Является ли оно простым
// 3. Делится ли оно на 2, 5, 3, 6, 9 без остатка

/*
function defineNumber(num) {

    if (!num) {
        num = 2
    };
    var absNum = Math.abs(num);

    // is negative
    var sign = "отрицательное";
    if (num >= 0) {
        sign = "положительное"
    };

    // is prime
    function isPrime(number) {
        var start = 2;
        while (start <= Math.sqrt(number)) {
            if (number % start++ < 1) return false;
        }
        return number > 1;
    };
    var prime = isPrime(absNum);

    var simple = "составное";
    if (prime) {
        simple = "простое"
    };

    // is divide to 2, 5, 3, 6, 9
    var dividers = [2, 5, 3, 6, 9];
    var divide = "делится";

    for (d in dividers) {
        if (absNum % d !== 0) {
            divide = "не делится"
            break
        }
    };

    document.write("Число " + sign + ", " + simple + " и " + divide + " на 2, 5, 3, 6, 9 без остатка");
}

defineNumber(42);
*/
