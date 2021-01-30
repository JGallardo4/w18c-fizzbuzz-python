function fizzbuzz(number) {
  process.stdout.write(number + " ");

  if (number % 15 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log("Number is not divisible by 3 or 5");
  }
}

[3, 15, 20, 30, 2, 4, 11, 12, 18, 25, 7, 10, 77, 55, 47, 42, 29].forEach(
  (n) => {
    fizzbuzz(n);
  }
);
