const getCase = str =>
	str === str.toUpperCase() ? "upper"
		: str === str.toLowerCase() ? "lower"
		: "mixed";
