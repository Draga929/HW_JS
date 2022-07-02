// Напишите валидационный скрипт используя функции 
//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке 
//  4. Максимум 64 символа в строке 
//  5. В строке должны быть буквы 
//  6. Должна быть хотя бы одна буква в верхнем регистре 
//  7. Должна быть хотя бы одна цифра 
//  8. Должна быть хотя бы одна @ 
//  9. Строка не должна быть пустой 

// Программа с коментариями:

 let text = "Введите текст"
 typeof text == "string"
 if (text.length >= 5) {
     // console.log("Верно >=5")
 } else {
     console.log("Неверно, введите больше пяти символов")
 }
 if (text.length < 64) {
         // console.log("Верно <64")
 } else {
     console.log("Неверно, введите меньше 64 символов")
 }
 if (/[a-zа-яё]/i.test(text)){
         // console.log("Верно, есть буквы")
 } else {
     console.log("Неверно, введите хотя бы одну букву")
 }
 if (/[A-ZА-ЯЁ]/.test(text)) {
        // console.log("Верно, есть одна и боллее большой буквы")
 } else {
     console.log("Неверно, введите хотя бы одну большую букву")
 }
 if (/[0-9]/.test(text)) {
         // console.log("Верно, есть хотя бы одна цифра")
 } else {
     console.log("Неверно, введите хотя бы одну цифру")
 }
 if (/@/.test(text)) {
         // console.log("Верно, есть хотя бы одна @")
 } else {
     console.log("Неверно, введите хотя бы одну @")
 }
 if (text != "") {
        // console.log("Верно, строка не пустая")
 } else {
     console.log("Неверно, пустая строка, введите что-нибудь")
 }

//  Функция:

let text = "Введите текст"
function Line() {
    if (typeof text == "string") {
        return true
    } else {
        return false
    }
}
function Empty() {
    if (text.length != 0) {
        return true
    } else {
        console.log("Неверно, пустая строка, введите что-нибудь")
        }
}
function Min() {
    if (text.length >= 5) {
        return true
    } else {
        console.log("Неверно, введите больше 5 символов")
    }
}
function Max() {
    if (text.length < 64) {  
        return true
    } else {
        console.log("Неверно, введите меньше 64 символов")
    }
} 
function Letters() {
    if (/[a-zа-яё]/i.test(text)) {
        return true 
    } else {
        console.log("Неверно, введите хотя бы одну букву")
    }
}
function Large_Letter() {
    if (/[A-ZА-ЯЁ]/.test(text)) {
        return true
    } else {
        console.log("Неверно, введите хотя бы одну большую букву")
    }
}
function Numbers() {
    if (/[0-9]/.test(text)) {
        return true
    } else {
        console.log("Неверно, введите хотя бы одну цифру")
    }
}
function At() {
    if (/@/.test(text)) {
        return true;
    } else {
        console.log("Неверно, введите хотя бы одну @")
    }
}
function Empty() {
    if (text.length != 0) {
        return true
    } else {
        console.log("Неверно, пустая строка, введите что-нибудь")
        }
}
if (Line() && Empty() && Min() && Max() && Letters() && Large_Letter() && Numbers() && At()) {
    console.log("Поздравляю текст введен верно")
} else {
        }

===============================================END============================================================






