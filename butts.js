let test = "zazbz"

function findPattern(str) {
  let results = []
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i + 1] && str[i] !== str[i - 1]) {
      let result = str.substring(i - 1, i + 2)
      console.log(`found aba pattern: ${result}`)
      results.push(result)
    }
  }
  return results
}
console.log(findPattern(test))
