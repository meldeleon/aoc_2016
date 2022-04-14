const input = require("fs")
  .readFileSync("day8_input.txt")
  .toString()
  .split(/\r\n/)

input.forEach((instruction) => {
  let splitInstruction = instruction.split(/\s/)
  if (splitInstruction[0] === "rect") {
    let [dimension1, dimension2] = splitInstruction[1].split("x")
    console.log(dimension1, dimension2)
  } else {
    let [method, type, ref, throwaway, pixels] = splitInstruction
    console.log(method, type, ref, pixels)
  }
})
