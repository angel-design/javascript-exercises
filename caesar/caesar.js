const caesar = function (str, num) {
    let result = "";
    str = str.toLowerCase().replace(/\w/g, function (u) {
        for (let i = 0; i < u.length; i++) {
            let calc = (u.charCodeAt(i) + num) % 26;
            let charCode;
            if (calc > 18) {
                charCode = calc + 78;
            } else {
                charCode = calc + 104;
            }
            result = String.fromCharCode(charCode);
        }
        return result;
    })
    return str.replace(/\b\w{1}/g, function (u) { return u.toUpperCase() });
};

module.exports = caesar
