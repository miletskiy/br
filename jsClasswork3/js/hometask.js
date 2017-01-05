
// Task 1
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
// ucFirst("вася") == "Вася";
// ucFirst("") == ""; // нет ошибок при пустой строке
// P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().

function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

ucFirst("вася");
ucFirst("");

// <----------------------------->

// Task 2
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
    return Math.min(a, b);
}

// min(2, 5) == 2
// min(3, -1) == -1

// <----------------------------->

// Task 3

// Повторять цикл, пока ввод неверен
// Напишите функцию в которой цикл предлагает prompt ввести число, большее заданного аргумента функции (например 100). Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).

// Предполагается, что посетитель вводит только числа. Предусмотреть обработку нечисловых строк в этой задаче

function checkInput(number) {
    let flag = true;

    while(flag) {
        userInput = +prompt("Введите число больше " + number);

        if (isNaN(userInput)) {
            alert("Пожалуйста введите число");
        }

        if (userInput > number || userInput === 0) {
            flag = false;
            document.write("Спасибо!");
        }
    }
}

// checkInput(100);


// <----------------------------->


// Task 4
// Вывести простые числа

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

// Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.


// helper function to determine number
function isPrime(number) {
    if (number==1) return false;
    for (var i = 2; i*i <= number; i++) {
        if (number%i==0) {
            return false;
        }
    }
    return true;
};

// main function
function simpleNumbers() {
    userInput1 = +prompt("Введите число - начало интервала (больше 1)");
    userInput2 = +prompt("Введите число - конец интервала (больше предыдущего)");
    let result = [];

    for(var i = userInput1; i <= userInput2; i++) {
        if (isPrime(i)) {
            result.push(" " + i);
        }
    }

    document.write("Все простые числа из интервала от "+userInput1+" до "+userInput2+": " + result);
}

simpleNumbers();
