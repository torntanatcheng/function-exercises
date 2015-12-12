var sentence = "How are you doing today?"

function lengthString(array){
	var total = 0
	var wordCount = array.split(" ")
	total = wordCount.length
	console.log(total)
}

lengthString(sentence)