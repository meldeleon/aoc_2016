const { inspect } = require("util")

const input = require("fs")
  .readFileSync("day8_input.txt")
  .toString()
  .split(/\r\n/)
console.log(input)

const width = 7
const height = 3

//Define the board, which is row, column.
let board = new Array(height)
for (let i = 0; i < height; i++) {
  board[i] = new Array(width)
}

//Initialize values of the board as all off.
for (let r = 0; r < height; r++) {
  for (let c = 0; c < width; c++) {
    board[r][c] = false
  }
}

input.forEach((instruction) => {
  if (instruction.startsWith(rect)){
    
  } else {
  let split = instruction.split("/\s/")
  let [method, ]
  }
})

//METHODS BELOW

//rect, turns on a rectangle of pixels takes column, row
function rect(column, row) {
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      board[r][c] = true
    }
  }
}
// rotate column,  pushes a column down by x number of pixels. returns a new board.
function rotateCol(column, pixels, board) {
  let outputBoard = board.map((x) => {
    return [...x]
  })
  for (let r = 0; r < height; r++) {
    let valueToBeShifted = board[r][column]
    let destinationRow = (r + pixels) % height
    outputBoard[destinationRow][column] = valueToBeShifted
  }
  return outputBoard
}
function rotateRow(row, pixels, board) {
  let outputBoard = board.map((x) => {
    return [...x]
  })
  for (let c = 0; c < width; c++) {
    let valueToBeShifted = board[row][c]
    let destinationColumn = (c + pixels) % width
    outputBoard[row][destinationColumn] = valueToBeShifted
  }
  return outputBoard
}
