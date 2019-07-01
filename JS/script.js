'use strict';




let money = prompt('Ваш месячный доход');
console.log(money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(','));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

console.log(typeof money, typeof income, typeof deposit);

let expenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(typeof expenses);
let dollar1 = +prompt('Во сколько это обойдется');
console.log(dollar1);
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log(expenses2);
let dollar2 = +prompt('Во сколько это обойдется');
console.log(dollar2);

let budgetMonth = (money - dollar1 - dollar2);
console.log(budgetMonth);

let mission = 100000.5;
let purpose = (mission / budgetMonth);
console.log(Math.ceil(purpose));

let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));


if (budgetDay >= 800){
    console.log('Высокий уровень дохода')
}
if (budgetDay >= 300 && budgetDay < 800){
    console.log('Среднй  уровень дохода')
}
if (budgetDay >= 0 && budgetDay < 300){
    console.log('Низкий уровень дохода')
}
if (budgetDay < 0){
    console.log('Что-то пошлоне так')
}



//if (true) console.log('Истина');
//if (false) console.log('Этот год не вполнится');
/* let n = 10;
 if (n === 5){
   console.log('команда1');
} else if(n === 4){
    console.log('команда2');
}else {
    console.log('команда3');
} */

/* switch (n){
    case 3:
        console.log(3);
        break;
     case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;
    case 6:
        console.log(6);
        break;
    default:
        console.log('не верно');

}

let result = n === 10 ? 'верно' : 'не верно';
console.log('result: ', result); */



