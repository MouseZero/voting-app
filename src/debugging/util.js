function printObject(obj, depth, spacesToIndent = 0){
  if(depth < 1 || typeof obj === 'string') return "";
  const list = Object.keys(obj).map(key => {
    return " ".repeat(spacesToIndent)
      + key
      + ": "
      + obj[key]
      + '\n'
      + printObject(obj[key], depth - 1, spacesToIndent + 2);
  })
  return list.join("\n");
}
