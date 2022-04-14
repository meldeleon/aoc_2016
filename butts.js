const input = require("fs")
  .readFileSync("day8_input.txt")
  .toString()
  .split(/\r\n/)

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

board[0][0] = true
board[0][2] = true
board[1][0] = true
board[1][1] = true
board[1][2] = true
board[2][1] = true

console.table(board)

console.table(rotateRow(0, 4, board))

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
