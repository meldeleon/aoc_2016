const input = require("fs")
  .readFileSync("day7_input.txt")
  .toString()
  .split(/\r?\n?\s+/)

let count = 0
let passedCases = []
input.forEach((str) => {
  let captureGroups = str.split(/(\[.*?\])/g)
  let abbaInBrackets = false
  captureGroups.forEach((group) => {
    //console.log(group)
    if (group.startsWith("[")) {
      if (findAbba(group)) {
        //console.log("abba found in brackets")
        abbaInBrackets = true
      }
    }
  })
  captureGroups.forEach((group) => {
    if (!group.startsWith("[") && findAbba(group) && !abbaInBrackets) {
      passedCases.push(str)
      count++
    }
  })
})

function findAbba(str) {
  let result = null
  let abba = new Object()
  for (let i = 2; i < str.length; i++) {
    if (
      str[i - 1] === str[i] &&
      str[i - 2] === str[i + 1] &&
      str[i - 2] !== str[i]
    ) {
      abba.string = str.substring(i - 2, i + 2)
      abba.index = i - 2
      return true
    } else {
    }
  }
}

console.log(count)
console.log(passedCases)
