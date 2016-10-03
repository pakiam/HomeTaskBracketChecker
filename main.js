//Loginov Maksim

function checkBrakets(str) {

    var arr = []; //stack
    var curr;
    var prev;
    var i;

    if (typeof str === 'string') { // First type check
        console.log('ok');

        for (i = 0; i < str.length; i++) {
            curr = str[i];
            if (curr == '(' || curr == '[' || curr == '{') { // check for open bracket
                arr.push(curr);
            } else if (curr == ')' || curr == ']' || curr == '}') { //check for close bracket
                if (arr.length == 0) { // if it is a 1st char in string
                    return console.log('Bad string ' + str.indexOf(curr) + ' ' + curr);
                } else {
                    prev = arr.pop(); //take previous from 'stack' and compare with current
                    if ((curr == ')' && prev == '(') || (curr == ']' && prev == '[') || (curr == '}' && prev == '{')) {

                    } else {
                        return console.log('Bad string ' + str.indexOf(curr) + ' ' + curr);
                    }
                }
            }
        }
    } else {
        console.log('not a string!');
    }
    return console.log('Good String'); //answer
}

checkBrakets('({}[])');