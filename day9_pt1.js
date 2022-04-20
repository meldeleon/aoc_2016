const input = require("fs")
  .readFileSync("day9_input.txt")
  .toString()
  .split(/\r\n/)
//console.log(input)
let solutionArray = []
input.forEach((line) => {
  //split each line into chunks
  let splitLine = line.split(/(\([^)]+\))/g)
  splitLine = splitLine.filter((y) => y)
  console.log(splitLine)
  let decompressedLine = []
  //iterate over each chunk
  splitLine.forEach((chunk, index) => {
    let previousChunk = splitLine[index - 1]
    if (
      (index === 0 && chunk.includes("(")) ||
      (chunk.includes("(") && !previousChunk.includes("("))
    ) {
      let [throwAway, characterNumber, repetitions] =
        chunk.match(/\(([^x]+)x([^)]+)\)/)
      console.log(characterNumber, repetitions)
      for (i = 0; i < repetitions - 1; i++) {
        let repeatedString = followingChunk.substring(0, characterNumber)
        decompressedLine.push(repeatedString)
      }
    } else {
      decompressedLine.push(chunk)
    }
  })
  console.log(decompressedLine.join(""))
  solutionArray.push(decompressedLine.join("").length)
})

console.log(solutionArray)
