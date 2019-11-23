const snakeCase = function(str) {
    return str.replace(/(\.{2,}[A-Z])/g, "_$1").replace(/(^(?!\w*_)\w*(?=[A-Z]))/g, "$1_").toLowerCase().replace(/\../g, "_").replace(/[\s\-]/g,"_").replace(/\W/g, "").replace(/\_{2,}/g, "_").replace(/(^\_|\_$)/g, "");
}

module.exports = snakeCase
