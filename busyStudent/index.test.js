const busyStudent = require("./index");
describe("busyStudent", () => {
    it("should return a number of students doing homework at a given time", () => {
        expect(busyStudent([1, 2, 3], [3, 2, 7], 4)).toBe(1);
        expect(busyStudent([4], [4], 4)).toBe(1);
        expect(busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5)).toBe(5);
    });
});