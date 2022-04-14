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

//parsing each instruction
input.forEach((instruction) => {
  let splitInstruction = instruction.split(/\s/)
  if (splitInstruction[0] === "rect") {
    let [dimension1, dimension2] = splitInstruction[1].split("x")
    board = rect(dimension1, dimension2, board)
  } else {
    let [method, type, ref, throwaway, pixels] = splitInstruction
    let rowOrCol = ref.match(/[^\=]*$/)[0]
    if (type === "row") {
      console.log(
        `rotating row ${rowOrCol} by ${pixels} px for ${splitInstruction}`
      )
      board = rotateRow(rowOrCol, pixels, board)
    } else {
      console.log(
        `rotating col ${rowOrCol} by ${pixels} px ${splitInstruction}`
      )
      board = rotateCol(rowOrCol, pixels, board)
    }
  }
  console.table(board)
})

//METHODS BELOW

//rect, turns on a rectangle of pixels takes column, row
function rect(column, row, board) {
  let outputBoard = board.map((x) => {
    return [...x]
  })
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      outputBoard[r][c] = true
    }
  }
  return outputBoard
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
