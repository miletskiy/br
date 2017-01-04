
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
// Повторять цикл, пока ввод неверен


// Task 3
// Напишите функцию в которой цикл предлагает prompt ввести число, большее заданного аргумента функции (например 100). Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).

// Предполагается, что посетитель вводит только числа. Предусмотреть обработку нечисловых строк в этой задаче


// Task 4
// Вывести простые числа

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

// Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.
