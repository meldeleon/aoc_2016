const input = require("fs")
  .readFileSync("day3_input.txt")
  .toString()
  .split(/\r?\n/)

let solution = []
const mappedTriangles = input.map((triangleString) => {
  let triArray = triangleString.split(/\s+/)
  let a = parseInt(triArray[0])
  let b = parseInt(triArray[1])
  let c = parseInt(triArray[2])
  console.log(a, b, c)
  if (a + b > c && a + c > b && b + c > a) {
    solution.push(triArray)
  }
})
console.log(solution)
console.log("the answer is: " + solution.length)
