const { count } = require("console")

const input = require("fs")
  .readFileSync("day4_input.txt")
  .toString()
  .split(/\r?\n?\s+/)
console.log(input)
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

let sectorIdSum = 0

input.forEach((room) => {
  sectorIdSum += verifyRoom(room)
})

console.log(sectorIdSum)

function verifyRoom(roomCode) {
  let code = roomCode.match(/^(.*?)\[/)[1]
  //console.log(code)
  let checkSum = roomCode.match(/\[(.*?)\]/)[1]
  let sectorId = roomCode.match(/(.{3}?)\[/)[1]
  //console.log(checkSum, sectorId)
  let letters = printUniqueLetters(code)
  let arrangedList = letterCount(letters, code)
  //console.log(arrangedList)
  if (checkSum === arrangedList) {
    return parseInt(sectorId)
  } else {
    return 0
  }
}

function printUniqueLetters(code) {
  let uniqueLetters = []
  Array.from(code).forEach((x) => {
    if (x === "-" || parseInt(x) || x === "0") {
      //do nothing
    } else if (uniqueLetters.indexOf(x) > -1) {
      //do noting
    } else {
      uniqueLetters.push(x)
    }
  })
  return uniqueLetters
}
//return arranged list of letters
function letterCount(letters, code) {
  let counts = []
  letters.forEach((letter) => {
    let letterCount = 0
    Array.from(code).forEach((y) => {
      if (y === letter) {
        letterCount++
      }
    })
    let letterObj = { name: letter, count: letterCount }
    counts.push(letterObj)
  })

  let arrangedObjArray = counts.sort((a, b) => {
    if (b.count === a.count) {
      return alphabet.indexOf(a.name) - alphabet.indexOf(b.name)
    } else {
      return b.count - a.count
    }
  })
  let arrangedList = arrangedObjArray.map((x) => {
    return x.name
  })
  return arrangedList.slice(0, 5).join("")
}
