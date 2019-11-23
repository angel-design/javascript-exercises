const palindromes = function(str) {
    let string = str.replace(/\W/ig,"").toLowerCase()
    return string === string.split("").reverse().join("")
  }

module.exports = palindromes
