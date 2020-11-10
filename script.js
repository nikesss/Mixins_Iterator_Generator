let rnd_sybl = randomSymbol();
let count = 31;
document.getElementById('circle').addEventListener('click', circleClick);
document.getElementById('show').addEventListener('click', showClick);
document.getElementById('factorial').addEventListener('click', showFactorial);
document.getElementById('show_char').addEventListener('click', charArray);

function circleClick() {
    if (count < 127) rnd_sybl.next();
    else count = 31
}

function showClick() {
    let p = document.getElementById('symbol');
    p.innerHTML = String.fromCharCode(count);
}

function* randomSymbol(action = true) {
    while (true) {
        yield count++;
    }
}

function showFactorial() {
    let value_input = document.getElementById('number').value;

    let factorial = {
        from: 1,
        to: value_input,
    }
    factorial[Symbol.iterator] = function() {
        let current = this.from;
        let last = this.to;

        return {
            next() {
                if (current <= last) {
                    return {
                        done: false,
                        value: current++
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        }
    }
    let p = document.getElementById('fctr');
    let fctr = 1;
    for (let key of factorial) {
        fctr *= +key;
    }
    if (value_input !== '')
        p.innerHTML = fctr;
}

function charArray() {
    let value_input = document.getElementById('char_arr').value;
    let iterator = value_input[Symbol.iterator]();
    let p = document.getElementById('char');
    while (true) {
        let result = iterator.next();
        if (result.done) break;
        p.innerHTML += result.value;
        p.innerHTML += ' ';
    }
}

class Person {
    Show() {
        console.log('the end');
    }
}
let FirstMixin = (superclass) => class extends superclass {
    FirstShow() {
        console.log('start');
    }
}
let SecondtMixin = (superclass) => class extends superclass {
    MiddleShow() {
        console.log('middle');
    }
}

class End extends FirstMixin(SecondtMixin(Person)) {
    ShowAll() {
        this.FirstShow();
        this.MiddleShow();
        this.Show();
    }
}

let my_calss = new End();
my_calss.ShowAll();