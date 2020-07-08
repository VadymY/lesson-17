/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

let upMaxDelay = 0;
let downMaxDelay = 0;

let postpone = function(start, end, delay){
    if(typeof start !== "number" || typeof end !== 'number' || typeof delay !== 'number' || delay < 0){
        throw new Error('All parameters and delay must be numbers and more then zero');
    }

    if (start < end){
            for (let i = start; i <= end; i++) {
                let calcDelay  = (i - start ) * delay;
                upMaxDelay = calcDelay;
                 setTimeout(function() {
                    console.log(i);
                }, calcDelay + downMaxDelay);
            }
    }
    else{
        for (let i = start; i >= end; i--) {
            let calcDelay  = (start - i ) * delay;
            downMaxDelay = (calcDelay > downMaxDelay) ? calcDelay : downMaxDelay;
            setTimeout(function() {
                console.log(i);
            }, calcDelay + upMaxDelay);
        }
    }

}

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
