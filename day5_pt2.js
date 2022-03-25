const md5 = require("md5")
input = "ffykfhsq"
let solution = []
for (let i = 0; i < 8; i++) {
  solution.push(null)
}

let int = 0
while (solution.join("").length < 8) {
  let check = `${input}${int.toString()}`
  let hash = md5(check)
  if (hash.startsWith("00000") && hash[5] < 8) {
    console.log(hash)
    if (solution[hash[5]]) {
    } else {
      solution.splice(hash[5], 1, hash[6])
    }
  }
  int++
}
console.log(solution)
