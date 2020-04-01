const greaterThanOne = numString => {
	let [numerator, denominator] = numString.split("/");
	return Number(numerator) > Number(denominator);
};
