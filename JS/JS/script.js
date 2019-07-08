'use strict';

let money;



// 1 задание
let start = function(){
    do{
        money = prompt('Ваш месячный доход', 1000);
        console.log(money); 
    }
    while((isNaN(money) || money == ' ' || money == ''));


}
start();




let deposit = confirm('Есть ли у вас депозит в банке?');


let showTypeof = function(item){
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(deposit);







// 2 задание
let expenses1;
let expenses2;

let getExpensesMonth = function() {
    let sum = 0; 

    for (let i = 0; i < 2; i++) {   
        if (i === 0){
        expenses1 = prompt('Напишите обязательную статью расходов', 'Школа');
        console.log(expenses1);
    }   else if (i === 1) {
        expenses2 = prompt('Напишите обязательную статью расходов2', 'Школа2');
        console.log(expenses2);
    }

        sum += +prompt('Во сколько это обойдется', 100);
        while (isNaN(sum) || sum == ' ' || sum == '') {
            sum = prompt('Во сколько это обойдется Валидация', 100);
            console.log(sum);
        }
        
    } 

    return sum; 
};
let expensesAmount = getExpensesMonth(); 



let accumulatedMonth; 
function getAccumulatedMonth() {
    accumulatedMonth = (money - expensesAmount); 
    return accumulatedMonth;
};
console.log(getAccumulatedMonth());


// 3 задание
let mission = 100000;
function getTargetMonth() {
    
    let purpose = Math.floor(mission / getAccumulatedMonth());
    console.log (Math.floor(purpose));

    if(purpose >= 0) {
        console.log('Цель будет достигнута');
    }
    else if(purpose < 0) {
    console.log('Цель не будет достигнута');
}
};
getTargetMonth();

//4 задание
let budgetDay = getAccumulatedMonth() / 30;
console.log(Math.floor(budgetDay));

function getStatusIncome() {
    if (budgetDay >= 800){
        return 'Высокий уровень дохода';
    } else if (budgetDay >= 300 && budgetDay < 800){
        return('Среднй  уровень дохода')
    } else if (budgetDay >= 0 && budgetDay < 300){
        return('Низкий уровень дохода')
    } else if (budgetDay < 0){
        return('Что-то пошлоне так')
    }
}
console.log('getStatusIncome(): ', getStatusIncome());












/* вызов функции с помощью рекурсии
function changeTires(snowTires){
    snowTires--;
    console.log(snowTires);

    if(snowTires > 0){
        changeTires(snowTires);
    }
}
changeTires(4); */






/*реализация цикла while*/

/* пока условие n < 5 будет истиной, год в нутри {} будет выполняться */
/* let n = 0;

while(n < 5){
    console.log(n);
    n++;
} */



/*реализация цикла do-while*/
/* do-while выполнит код хоть один раз, даже если условие false
while при условии false ниразу не выполнить код */

/* let n = 0;
do{
    console.log(n);
    n++;
}
while(n < 5); */




/* Цикл for */
/* Используется чаще всего, он самый универсальный и удобный */


/* в () задаем условие из трех аргументов. Сначла задаем переменную,
затем условие при котором цикл будет остановлен,
затем условие, что будет происходить кажду операцию цикла (обычно это инкримент) */

/* в{} пишем тело цикла, те действия , 
которые будут происходить во время одной итерации цикла */

/* с помощью break можно дострочно прервать цикл */

/* с помощью continue можно пропустить один шаг в цикле */


/* let n = 0;
for(let i = 0; i < 5; i++){
    if(i === 3){
        continue;
    }
console.log(i);
}  */