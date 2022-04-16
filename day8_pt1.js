const input = require("fs")
  .readFileSync("day8_input.txt")
  .toString()
  .split(/\r\n/)
console.log(input)

const width = 50
const height = 6

//Define the board, which is row, column.
let board = new Array(height)
for (let i = 0; i < height; i++) {
  board[i] = new Array(width)
}

//Initialize values of the board as all off.
for (let r = 0; r < height; r++) {
  for (let c = 0; c < width; c++) {
    board[r][c] = "."
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
    pixels = parseInt(pixels)
    if (type === "row") {
      // console.log(
      //   `rotating row ${rowOrCol} by ${pixels} px for ${splitInstruction}`
      // )
      board = rotateRow(rowOrCol, pixels, board)
    } else if (type === "column") {
      // console.log(
      //   `rotating col ${rowOrCol} by ${pixels} px ${splitInstruction}`
      // )
      board = rotateCol(rowOrCol, pixels, board)
    }
  }
  console.table(board)
})
let onCount = 0

for (let r = 0; r < height; r++) {
  for (let c = 0; c < width; c++) {
    if (board[r][c] === "#") {
      onCount++
    }
  }
}

console.log(`Total count is ${onCount}`)

//METHODS BELOW

//rect, turns on a rectangle of pixels takes column, row
function rect(column, row, board) {
  let outputBoard = board.map((x) => {
    return [...x]
  })
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      outputBoard[r][c] = "#"
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
    // console.log(
    //   `Shifting the value of ${row}, ${c} which is ${valueToBeShifted} to the destination of ${row}, ${destinationColumn}`
    // )
    outputBoard[row][destinationColumn] = valueToBeShifted
  }
  return outputBoard
}
