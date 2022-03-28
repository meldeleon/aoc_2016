const input = require("fs")
  .readFileSync("day7_input.txt")
  .toString()
  .split(/\r?\n?\s+/)

let passedCases = []

input.forEach((str) => {
  let captureGroups = str.split(/(\[.*?\])/g)
  let aba = []
  let bab = []
  let stringPassedTest = false
  captureGroups.forEach((group) => {
    if (group.startsWith("[")) {
      bab = findPattern(group)
    }
  })
  captureGroups.forEach((group) => {
    if (!group.startsWith("[")) {
      aba = findPattern(group)
      if (aba) {
        for (let i = 0; i < aba.length; i++) {
          for (j = 0; j < bab.length; j++) {
            if (checkInverse(aba[i], bab[j])) {
              console.log(`inverse strings found: ${aba[i]} ${bab[j]}`)
              stringPassedTest = true
            }
          }
        }
      }
    }
  })
  if (stringPassedTest) {
    passedCases.push(str)
  }
})

console.log(passedCases.length)

// the problem is here, it doesn't evaluate both zaz abd zbz in the string zazbz
function findPattern(str) {
  let results = []
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i + 1] && str[i] !== str[i - 1]) {
      let result = str.substring(i - 1, i + 2)
      //console.log(`found aba pattern: ${result}`)
      results.push(result)
    }
  }
  return results
}

function checkInverse(str1, str2) {
  if (str1[0] === str2[1] && str1[1] === str2[0] && str1[2] === str2[1]) {
    return true
  } else {
    return false
  }
}
