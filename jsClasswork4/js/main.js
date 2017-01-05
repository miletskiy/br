
// Task 1
// Сумма свойств
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
// Например:

// "use strict";

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

//... ваш код выведет 650

function getSum(salaries) {
    let sum = 0;
    for (s in salaries) {
        sum += salaries[s]
    }
    document.write(sum);
}

// var salaries = {};
// getSum(salaries);

// <----------------------------->

// Task 2
// Свойство с наибольшим значением
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

// Если объект пустой, то пусть он выводит «нет сотрудников».
// Например:
"use strict";

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};
// var salaries = {};


function getMaxSalary(salaries) {
    let max = 0, rich, message;
    if (Object.keys(salaries).length === 0 && salaries.constructor === Object) {
        message = "Нет сотрудников";
    }else {
        for(s in salaries) {
            if (max < salaries[s]) {
                max = salaries[s];
                rich = s;
            }
        }
        message = "Самая большая зарплата у сотрудника с именем "+rich;
    }
    document.write(message);
}

// getMaxSalary(salaries);

//... ваш код выведет Петя


// <----------------------------->

// Task 3

// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:


// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []

// Обрати внимание: функция не должна изменять переданный ей массив:


// var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]

function map(fn, array) {
    let result = [];
    for (a in array){
        result.push(fn(array[a]));
    }
    return result;
}


function square(number) {
    return number*number;
};


document.write(map(square, [11, 22, 32, 24]));

