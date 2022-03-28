let test = "aba"

function findPattern(str) {
  let result = ""
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i + 1] && str[i] !== str[i - 1]) {
      result = str.substring(i - 1, i + 2)
      console.log(`found aba pattern: ${result}`)
      return result
    }
  }
}
