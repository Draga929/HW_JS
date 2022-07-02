// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.
====================================================================================================================
    
// Задание 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61  
//Решение:
    
function CheckAge(age) {
 let age_2 = 18
 let age_3 = 60
 if (age < age_2) {
     console.log("You don’t have access cause your age is " + age + " It’s less then ")
  } else if (age >= age_2 && age < age_3) {
     console.log("Welcome !")
  } else if (age > age_3) {
      console.log("Keep calm and look Culture channel")
  } else {
      console.log("Technical work")
  }
 }
 CheckAge(17)
 CheckAge(18)
 CheckAge(61)

===================================================================================================================================
     
// Задание 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
//Решение:
     
let age = 17
 function CheckAge(age) {
 let age_2 = 18
 let age_3 = 60
 if (typeof age == "number") {
     if (age < age_2) {
     console.log("You don’t have access cause your age is " + age + " It’s less then ")
  } else if (age >= age_2 && age < age_3) {
     console.log("Welcome !")
  } else if (age > age_3) {
      console.log("Keep calm and look Culture channel")
  } else {
      console.log("Technical work")
  }
  } else {
     console.log("Enter a number")
  }
 }
 CheckAge(age)

==================================================================================================================================

// Задание 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number.
//Решение:
     
 let age = "2"
 function CheckAge(age) {
     let age_2 = 18
     let age_3 = 60
     if (/^\d+$/.test(age)) {
     age = +age
      if (age < age_2) {
                 console.log("You don’t have access cause your age is " + age + " It’s less then ") 
             } else if (age >= age_2 && age < age_3) {
                 console.log("Welcome !")
             } else if (age > age_3) {
                 console.log("Keep calm and look Culture channel")
             } else {
                 console.log("Technical work")
             } 
         } else {
           console.log("Enter a number")  
         }
  } 
 CheckAge(age)

====================================================================================================================================
     
// Задание 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
//Решение:
     
Создал файл prompt.html

 <script>
    let age = prompt("Specify your age");
    let age_2 = 18;
    let age_3 = 60;
    if (/^\d+$/.test(age)) {
    age = +age
     if (age < age_2) {
        alert("You don’t have access cause your age is " + age + " It’s less then ") 
            } else if (age >= age_2 && age < age_3) {
                alert("Welcome !")
            } else if (age > age_3) {
                alert("Keep calm and look Culture channel")
            } else {
                alert("Technical work")
            } 
        } else {
            alert("Enter a number")  
        }
 </script> 
 
// Открыть файл prompt.html в любом браузере.
       
======================================END=================================================================================================


