const isPalindrome = n =>
	String(n) ===
	String(n)
		.split("")
		.reverse()
		.join("");
