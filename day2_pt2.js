const input = require("fs")
  .readFileSync("day2_input.txt")
  .toString()
  .split(/\r?\n/)
console.log(input)

const keypad = [
  [null, null, 1, null, null],
  [null, 2, 3, 4, null],
  [5, 6, 7, 8, 9],
  [null, "A", "B", "C", null],
  [null, null, "D", null, null],
]

let x = 0
let y = 2
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
  let checkX, checkY
  switch (instruction) {
    case "U":
      if (y > 0) {
        checkY = y - 1
        if (keypad[checkY][x]) {
          y = checkY
          console.log(keypad[y][x])
        }
      } else {
        console.log("cannot move up")
      }
      break
    case "D":
      if (y < 4) {
        checkY = y + 1
        if (keypad[checkY][x]) {
          y = checkY
          console.log(keypad[y][x])
        }
      } else {
        console.log("cannot move down")
      }
      break
    case "R":
      if (x < 4) {
        checkX = x + 1
        if (keypad[y][checkX]) {
          x = checkX
          console.log(keypad[y][x])
        }
      } else {
        console.log("cannot move right")
      }
      break
    case "L":
      if (x > 0) {
        checkX = x - 1
        if (keypad[y][checkX]) {
          x = checkX
          console.log(keypad[y][x])
        }
      } else {
        console.log("cannot move left")
      }
      break
    default:
      console.log("none of the cases were met")
  }
}
