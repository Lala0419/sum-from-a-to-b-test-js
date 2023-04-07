function sum(fromN, toN) {
	//recursive way
	if (fromN === toN) {
		return fromN;
	} else {
		return fromN + sum(fromN + 1, toN);
	}
	/*
  //regular way
	let result = 0;
	for (let i = fromN; i <= toN; i++) {
		result += i;
	}
	return result;
  */
}

module.exports = sum;

//gpt
//https://chat.openai.com/chat/dc3abb24-cd13-4c75-9ca2-51290e438150
