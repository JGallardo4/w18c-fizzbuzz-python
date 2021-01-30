def fizzbuzz(number):
	print(number, " ", end="")
	
	if (number % 15 == 0):
		print("FizzBuzz")
	elif (number % 3 == 0):
		print("Fizz")
	elif (number % 5 == 0):
		print("Buzz")
	else:
		print("Number is not divisible by 3 or 5")		

for number in [3, 15, 20, 30, 2, 4, 11, 12, 18, 25, 7, 10, 77, 55, 47, 42, 29]:
	fizzbuzz(number)