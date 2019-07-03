'use strict';




let money = +prompt('Ваш месячный доход');
console.log(money); 


/*function getExpensesMonth(){
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
return addExpenses.split(',');
}
console.log(getExpensesMonth());*/



let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let showTypeof = function(item){
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(deposit);

// console.log(typeof money, typeof income, typeof deposit);



/*let expenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(typeof expenses);
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(expenses2);*/


let dollar1 = +prompt('Во сколько это обойдется');
console.log(dollar1);
let dollar2 = +prompt('Во сколько это обойдется');
console.log(dollar2);

let dollar3;
function getExpensesMonth(){
    dollar3 = (dollar1 + dollar2);
    return dollar3;
}
console.log(getExpensesMonth());




let accumulatedMonth; // ты уже объявил здесь переменную глбтально
function getAccumulatedMonth() {
    accumulatedMonth = (money - getExpensesMonth()); // здесь мы ей присваиваем значение
    return accumulatedMonth;
};
console.log(getAccumulatedMonth());


function getTargetMonth(){
    let mission = 100000.5;
    let purpose = (mission / getAccumulatedMonth());
    return Math.floor(purpose);
};
console.log(getTargetMonth());


let budgetDay = getAccumulatedMonth() / 30;
console.log(Math.floor(budgetDay));

function getStatusIncome() {
    if (budgetDay >= 800){
        return 'Высокий уровень дохода';
    } else if (budgetDay >= 300 && budgetDay < 800){
        return('Среднй  уровень дохода')
    } else if (budgetDay >= 0 && budgetDay < 300){
        return('Низкий уровень дохода')
    } else {
        return('Что-то пошлоне так')
    }
}
console.log('getStatusIncome(): ', getStatusIncome());



//outputMessage(); команда объявления функции
/*function outputMessage() {
    console.log('Привет vbh')
}
outputMessage();


//let res = concat('Максим');команда объявления функции
let concat = function (name){ //функциональное выражение
    console.log(arguments);
    return 'Hello ' + name;
};

let res = concat('Максим', 'иван', 'Василий');

console.log('res: ', res);*/







//Анонимная функция

/* function funcMath(a, b, plus, minus){
    let res = (a > b) ? minus(a, b) : plus (a,b);
    console.log(res);
} */

/*Функцию минус и плюс надо прописать, но писать ее будем при
вызове функции funcMath */

/* funcMath(
    5,
    4,
   function(a, b){return a + b; },
  function(a, b){return a - b; }
  ); */

  //Функцию можно передать виде колбэка
  /* Написали ф-ю, которая принимает данные пользователя
  если данные ровны admin, то выводится администратор */

  /* let logUser = function (userData){
      if(userData === 'admin'){
          return('Администратор');
      } else {
          return('Пользователь');
      }
  };

  // далее пишем фугкцию, которая присваиват пользователю user или admin

  let inputUser = function(user, callback){
      let status = 'user';
      if(user === 'Андрей' || user === 'Василий'){
          status = 'admin';
      }
      return callback(status);
  };

  console.log(inputUser('Андрей', logUser)); */






  // Область видимости

/* т.к переменной n не существует внутри функции 
(внутри текущей области видимости), то интерпритатор переместится 
в область видимости выше, в глобальную область видимости */

/* после написания функции myFunc2 интерпритатор не нашел n в myFunc2,
 поднялся в myFunc не нашел ее там, затем поднялся в глобальную
 область видимости и нашул ее - цепочка областей видимости */

 /* всякий раз вызывая функцию внутри другой функции,
  мы создаем замыкание*/

//let n = 5; // глобальная зона видимости
/*let myFunc = function(){

    let n = 10; //n не выходит за ов функции myFunc

    let myFunc2 = function(){
        console.log(n);
    };
    myFunc2();
};

myFunc(); */

/* у анонимной ф-и function() нет переменной a, это анонимная 
ф-я является замыканием и
 ей остаются доступны переменные внешней функции funcMath*/

/* После объявление переменной внутри функции 
доступ к ней возможен только внутри функции, 
такие переменные называются определенными в контексте этой функции
(или локальными). Мы не можем получить пременную a вне функции funcMath*/

/* Если вы объявляете функцию внутри другой функции, 
то внутренняя функция называется замыканием, так как она сохраняет 
доступ к переменным внешней функции*/



/*function funcMath(){
    let a = 10;
    return function(){
        console.log(a * a);
    };
}

let mathPow = funcMath();

mathPow();*/
