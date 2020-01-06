module.exports = string => {
  if (typeof string !== "string") {
    throw new TypeError('tiny expects a string!')
  }

  return string.replace(/\s/g, '')
}
