numbers = [3, 15, 20, 30, 2, 4, 11, 12, 18, 25, 7, 10, 77, 55, 47, 42, 29]

def fizzbuzz(number):
	resultArray = []

	if (number % 3 == 0):
		resultArray.append(3)

	if (number % 5 == 0):
		resultArray.append(5)

	if (number % 3 == 0 and number % 5 == 0):
		resultArray.append(35)
	
	print(number, " ", end="")

	if (35 in resultArray):
		print("FizzBuzz")
	elif (3 in resultArray and not 5 in resultArray):
		print("Fizz")
	elif (5 in resultArray and not 3 in resultArray):
		print("Buzz")
	else:
		print("Number is not divisible by 3 or 5") 

for number in numbers:
	fizzbuzz(number)

