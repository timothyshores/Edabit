const isIdentical = s =>
	[...s].filter((char, index) => char === s[index + 1]).join("").length + 1 ===
	s.length;
