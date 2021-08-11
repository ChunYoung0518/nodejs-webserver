const countLetters = (char, str) => str.split("").filter(l => char ===l).length;

describe("TDD sample", () => {
    it(`count letters correctly`, () => {
        const count = countLetters("p", "happy")
        expect(count).toEqual(2);
    })
})




//sample test suite

// describe("my test suite", () => {

//     it("true equals true", () => {
//         expect(true).toEqual(true);
//     });

//     it("String Daniel equals Daniel", () => {
//         expect("Daniel").toEqual("Daniel");
//     });
// });

