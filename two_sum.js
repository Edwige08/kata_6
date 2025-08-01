const numbers = [2, 7, 11, 15];
const target = 9;
const numbers2 = [3, 2, 4]
const target2 = 6
const numbers3 = [3, 3]
const target3 = 6

const twoSum = (numbers, target) => {
    for (x = 0; x < numbers.length - 1; x++) {
        for (y = x + 1; y < numbers.length; y++) {
            if (numbers[x] + numbers[y] === target) {
                return [x, y]
            }
        }
    }
}

console.log(twoSum(numbers, target));
console.log(twoSum(numbers2, target2));
console.log(twoSum(numbers3, target3));