var numbers = [3, 15, 20, 30, 2, 4, 11, 12, 18, 25, 7, 10, 77, 55, 47, 42, 29];

function fizzbuzz(number) {
  var result = [];
  if (number % 3 == 0) {
    result.push(3);
  }
  if (number % 5 == 0) {
    result.push(5);
  }
  if (number % 3 == 0 && number % 5 == 0) {
    result.push(35);
  }

  //   console.log(result);

  if (result.includes(35)) {
    console.log("FizzBuzz");
  } else if (result.includes(3) && !result.includes(5)) {
    console.log("Fizz");
  } else if (!result.includes(3) && result.includes(5)) {
    console.log("Buzz");
  }
}

numbers.forEach((n) => {
  fizzbuzz(n);
});
