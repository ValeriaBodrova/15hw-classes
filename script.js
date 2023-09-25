class SuperArray extends Array {
    constructor(...elements) {
        super(...elements);
    }

    sum() {
    return this.filter((el) => typeof el === 'number').reduce(
        (a, b) => a + b,
        0
      );
    }
}

const names = new SuperArray('Bob', 'Jane');
console.log(names); // ['Bob', 'Jane']

const nums = new SuperArray(10, 20, 30, 40, -100, 50);
const total = nums.sum();
console.log(total); // 50

