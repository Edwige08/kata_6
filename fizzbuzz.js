const fizzBuzz = (n) => {
    let answer = [];
    for (x = 1; x <= n; x++) {
        if ((x % 3 === 0) && (x % 5 === 0)) {
            answer.push("FizzBuzz");
        } else if (x % 3 === 0) {
            answer.push("Fizz");
        } else if (x % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(x);
        }
    }
    return answer;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));