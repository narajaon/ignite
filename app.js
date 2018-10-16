const { values, validWords, test } = require('./values');

const possibleWords = [];
const CL = console.log

const stringToMorse = (input) => {
    const result = [];

    for (let i = 0; i < input.length; i++) {
        const res = values[input.charAt(i).toLowerCase()];

        result.push(res);
    }

    return result.join('');
}

function getValidCombos(morse, values) {

    values.forEach(element => {
        const converted = stringToMorse(element);

        if (!morse.includes(converted)) {
            return;
        }

        const toFind = morse.replace(converted, element + '/');

        if (!possibleWords.includes(toFind)) {
            possibleWords.push(toFind);
        }

        getValidCombos(toFind, values);

    });
}

getValidCombos(test, validWords);

const res = possibleWords.filter((elem) => !elem.match(/[-\.]/));

CL(`Values : ${res}
Combos ${res.length}`);