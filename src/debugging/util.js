function objectToString(obj, depth, spacesToIndent = 0){
  if(depth < 1 || typeof obj === 'string' || obj == null) return "";
  const list = Object.keys(obj).map(key => {
    return " ".repeat(spacesToIndent)
      + key
      + ": "
      + obj[key]
      + '\n'
      + objectToString(obj[key], depth - 1, spacesToIndent + 2);
  })
  return list.join("\n");
}

module.exports = {
  objectToString: objectToString
}
