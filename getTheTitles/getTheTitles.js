const getTheTitles = function (arr) {
    let titles = arr.map(function (book) {
        return book.title;
    })
    return titles
};

module.exports = getTheTitles;
