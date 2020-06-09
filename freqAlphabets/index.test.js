const freqAlphabets = require('./index');


describe('freqAlphabets', () => {
    test('10#11#12', () => {
        expect(freqAlphabets('10#11#12')).toBe("jkab")
    })
})