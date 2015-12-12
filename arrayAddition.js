function sumArray(array){
	var total = 0;

	if(array === 0){
		return "This array has no values"
	}
	for (var i = 0; i < array.length; i += 1){
		total += array[i];
	}

	return total
}

var numbers = [3, 7, 8, 3]

console.log(sumArray(numbers));