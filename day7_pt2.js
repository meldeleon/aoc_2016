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
    //console.log(group)
    let patterns = findPattern(group)
    if (group.startsWith("[")) {
      bab.push(patterns)
    } else {
      aba.push(findPattern(group))
    }
  })
  let abaFlat = aba.flat()
  let babFlat = bab.flat()
  for (let i = 0; i < abaFlat.length; i++) {
    for (let j = 0; j < babFlat.length; j++) {
      //console.log(`comparing ${abaFlat[i]} and ${babFlat[j]}`)
      if (checkInverse(abaFlat[i], babFlat[j])) {
        console.log(
          `inverse strings found: ${abaFlat[i]} ${babFlat[j]} in ${str}`
        )
        stringPassedTest = true
      }
    }
  }
  if (stringPassedTest) {
    passedCases.push(str)
  }

  function findPattern(str) {
    let results = []
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === str[i + 1] && str[i] !== str[i - 1]) {
        let result = str.substring(i - 1, i + 2)
        //console.log(`found aba pattern: ${result}`)
        results.push(result)
      }
    }
    if (results) {
      return results
    }
  }
})

console.log(passedCases.length)

// the problem is here, it doesn't evaluate both zaz abd zbz in the string zazbz
function findPattern(str) {
  let results = []
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i + 1] && str[i] !== str[i - 1]) {
      let result = str.substring(i - 1, i + 2)
      console.log(`found aba pattern: ${result}`)
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
