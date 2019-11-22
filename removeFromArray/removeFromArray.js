const removeFromArray = function ([...arr],...args) {
    let search = Array.from(args)
    for (let i = 0; i < search.length; i++) {
        if (arr.includes(search[i])) {
            arr.splice(arr.indexOf(search[i]), 1)
        }
    }
    return arr
}

module.exports = removeFromArray
