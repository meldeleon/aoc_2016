const input = require("fs")
  .readFileSync("day2_input.txt")
  .toString()
  .split(/\r?\n/)
console.log(input)

const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
let x = 1
let y = 1
let solution = []

input.forEach((buttonInstruction) => {
  Array.from(buttonInstruction).forEach((instruction) => {
    moveDial(instruction)
  })
  let dialPosition = keypad[y][x]
  solution.push(dialPosition)
})

console.log(solution)

function moveDial(instruction) {
  switch (instruction) {
    case "U":
      if (y > 0) {
        y = y - 1
        console.log(keypad[y][x])
      } else {
        console.log("cannot move up")
      }
      break
    case "D":
      if (y < 2) {
        y = y + 1
        console.log(keypad[y][x])
      } else {
        console.log("cannot move down")
      }
      break
    case "R":
      if (x < 2) {
        x = x + 1
        console.log(keypad[y][x])
      } else {
        console.log("cannot move right")
      }
      break
    case "L":
      if (x > 0) {
        x = x - 1
        console.log(keypad[y][x])
      } else {
        console.log("cannot move left")
      }
      break
    default:
      console.log("none of the cases were met")
  }
}
