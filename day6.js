const input = require("fs")
  .readFileSync("day6_input.txt")
  .toString()
  .split(/\r?\n?\s+/)
// making column data stores

var columns = new Map()
for (let i = 0; i < input[0].length; i++) {
  columns[i] = []
  input.map((x) => {
    columns[i].push(x[i])
  })
}
let solution = new Array()
for (column in columns) {
  console.log(columns[column])
  //count the letter in a column
  let letterCounts = new Object()
  columns[column].forEach((letter) => {
    if (!letterCounts[letter]) {
      letterCounts[letter] = 1
    } else {
      letterCounts[letter] += 1
    }
  })
  solution.push(returnMostFrequentLetter(letterCounts))
}
console.log(solution.join(""))

function returnMostFrequentLetter(letterCounts) {
  let mostFrquentLetter = ""
  for (letterCount in letterCounts) {
    if (!mostFrquentLetter) {
      mostFrquentLetter = letterCount
    } else {
      if (letterCounts[letterCount] > letterCounts[mostFrquentLetter]) {
        mostFrquentLetter = letterCount
      }
    }
  }
  return mostFrquentLetter
}
