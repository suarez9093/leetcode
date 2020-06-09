var freqAlphabets = function (s) {
    let array = [];
    if (s.indexOf("#")) {
        s = s.split("#")
        console.log("s split #", s)
    }
    else s = s.split("")
    console.log("s not split", s)

    for (let i = 0; i < s.length; i++) {
        if (s[i].length > 2) {
            if (s[i][i - 2] === 1) {

                s[i].splice([i - 2])
            }
            s[i] = s[i].split("")
            array.push(s[i])
        }
        else array.push(s[i])
    }
    const obj = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z'
    }

    console.log(array)
};
// console.log(freqAlphabets('10#11#12'))
console.log(freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#'))

module.exports = freqAlphabets