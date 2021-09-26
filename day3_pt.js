const input = require("fs")
  .readFileSync("day3_input.txt")
  .toString()
  .split(/\r?\n?\s+/)
// console.log(input)
let column1 = [],
  column2 = [],
  column3 = []

input.forEach((x, index) => {
  if (index % 3 === 0) {
    column1.push(x)
  } else if ((index + 1) % 3 === 0) {
    column2.push(x)
  } else {
    column3.push(x)
  }
})
//console.log(column1, column2, column3)
let column1Tri = [],
  column2Tri = [],
  column3Tri = []
// console.log(column1)
// console.log(column2)
// console.log(column3)

createTriArray(column1, column1Tri)
createTriArray(column2, column2Tri)
createTriArray(column3, column3Tri)

let solutionArray = []
findValidTriangles(column1Tri)
findValidTriangles(column2Tri)
findValidTriangles(column3Tri)

console.log("solution is: " + solutionArray.length)

function createTriArray(columnArray, destinationArray) {
  for (let i = 0; i < column1.length; i = i + 3) {
    let tempArray = [columnArray[i], columnArray[i + 1], columnArray[i + 2]]
    destinationArray.push(tempArray)
  }
}

function findValidTriangles(triArray) {
  triArray.forEach((triangle) => {
    let a = parseInt(triangle[0])
    let b = parseInt(triangle[1])
    let c = parseInt(triangle[2])
    console.log(a, b, c)
    if (a + b > c && a + c > b && b + c > a) {
      solutionArray.push(triangle)
    }
  })
}
