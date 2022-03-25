const input = require("fs")
  .readFileSync("day6_input.txt")
  .toString()
  .split(/\r?\n?\s+/)

var columns = new Map()
for (let i = 0; i < input[0].length; i++) {
  columns[i] = []
  input.map((x) => {
    columns[i].push(x[i])
  })
}
let solution = new Array()
for (column in columns) {
  //console.log(columns[column])
  let letterCounts = new Object()
  columns[column].forEach((letter) => {
    if (!letterCounts[letter]) {
      letterCounts[letter] = 1
    } else {
      letterCounts[letter] += 1
    }
  })
  solution.push(returnLeastFrequentLetter(letterCounts))
}
console.log(solution.join(""))

function returnLeastFrequentLetter(letterCounts) {
  let leastFrequentLetter = ""
  for (letterCount in letterCounts) {
    if (!leastFrequentLetter) {
      leastFrequentLetter = letterCount
    } else {
      if (letterCounts[letterCount] < letterCounts[leastFrequentLetter]) {
        leastFrequentLetter = letterCount
        console.log(leastFrequentLetter)
      }
    }
  }
  return leastFrequentLetter
}
