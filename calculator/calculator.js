function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((a, b) => a + b, 0);
}

function multiply (arr) {
  product = 1;
	for (i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  return product
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(a) {
  result = 1
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}