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

let extLogic = function(start, end, delay){
    let max  = 0;
    if (start < end) {
        for (let i = start; i <= end; i++) {
            let calcDelay  = (i - start ) * delay;
            max = calcDelay;
            setTimeout(function() {
                console.log(i);
            }, calcDelay + this.lastDelay);
        }
    }
    else{
        for (let i = start; i >= end; i--) {
            let calcDelay  = (start - i ) * delay;
            max = (calcDelay > max) ? calcDelay : max;
            setTimeout(function() {
                console.log(i);
            }, calcDelay + this.lastDelay);
        }
    }
    this.lastDelay +=  max;
}

let postpone = function(start, end, delay){
    if(typeof start !== "number" || typeof end !== 'number' || typeof delay !== 'number' || delay < 0){
        throw new Error('All parameters and delay must be numbers and more then zero');
    }

    if (!this.lastDelay){
        this.lastDelay= 0;
    }

    extLogic.apply(this, arguments);
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
