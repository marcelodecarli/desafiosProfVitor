"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lista = "";
for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(i + ' ' + 'FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log(i + ' ' + 'Fizz');
    }
    else if (i % 5 == 0) {
        console.log(i + ' ' + 'Buzz');
    }
    else {
        console.log(i);
    }
    lista = lista + i;
}