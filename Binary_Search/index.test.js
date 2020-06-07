const binarySearch = require('./index');

describe('search', () => {
    it('should find the target in the array', () => {
        expect(binarySearch([1, 8, 3, 4, 5, 9, 11, 15], 5)).toBe(5)
    })
})