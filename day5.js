const md5 = require("md5")
input = "abc"
let solution = []

let int = 0
while (solution.length < 8) {
  let check = `${input}${int.toString()}`
  let hash = md5(check)
  if (hash.startsWith("00000")) {
    solution.push(hash[5])
  }
  int++
}
console.log(solution)
