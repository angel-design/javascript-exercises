const ftoc = function(f) {
  let c = Math.round((f - 32) * 5 / 9 * 10) / 10;
  return c;
}

const ctof = function (c) {
  let f = Math.round((9 * c / 5 + 32) * 10) / 10;
  return f;
}

module.exports = {
  ftoc,
  ctof
}
