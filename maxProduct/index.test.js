const maxProduct = require('./index');

describe('maxProduct', () => {
    test('[3,4,5,2]', () => {
        expect(maxProduct([3, 4, 5, 2])).toBe(12)
    })
    test('[1,5,4,5]', () => {
        expect(maxProduct([1, 5, 4, 5])).toBe(16)
    })
    test('[3,7]', () => {
        expect(maxProduct([3, 7])).toBe(12)
    })
})