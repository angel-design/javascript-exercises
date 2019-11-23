function translate(str) {
	return str.replace(/(\b[aeiou]\w*)/g, "$1ay").replace(/(\b[^aeiou\s]*qu)(\w*)/g, "$2$1ay").replace(/(\b[^aeiqou\s]+(?=[aeiou]))(\w*)/g, "$2$1ay")
}


module.exports = {
	translate
}

