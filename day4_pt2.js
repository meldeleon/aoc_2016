const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]
const input = require("fs")
  .readFileSync("day4_input.txt")
  .toString()
  .split(/\r?\n?\s+/)

let solutions = input.map((roomCode) => {
  let code = roomCode.match(/^(.*?)[0-9]/)[1]
  let codeArray = Array.from(code)
  let sectorId = roomCode.match(/(.{3}?)\[/)[1]
  let decodedRoom = codeArray
    .map((x) => {
      return shiftCipher(x, parseInt(sectorId))
    })
    .join("")
  return decodedRoom.concat(", " + sectorId)
})

solutions.forEach((x) => {
  if (x.includes("north")) {
    console.log(x)
  }
})

function shiftCipher(letter, shiftNumber) {
  if (letter === "-") {
    return " "
  } else {
    let startingIndex = alphabet.indexOf(letter)
    let offset = (startingIndex + shiftNumber) % 26
    return alphabet[offset]
  }
}
