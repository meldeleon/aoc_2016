const { truncate } = require("fs")

let locationsVisited = [
  [0, 0],
  [0, 1],
]
let duplicateLocations = []
checkForDuplicates([0, 1])

function checkForDuplicates(currentLocation) {
  for (let i = 0; i < locationsVisited.length; i++) {
    console.log("evaluating " + currentLocation + "and " + locationsVisited[i])
    if (currentLocation.toString() === locationsVisited[i].toString()) {
      duplicateLocations.push(currentLocation)
      console.log("found duplicate: " + currentLocation)
      break
    } else {
    }
  }
}

// function checkForDuplicates(currentLocation) {
//   locationsVisited.forEach((x) => {
//     console.log("checking" + x + " for duplicates")
//     if (x === currentLocation) {
//       duplicateLocations.push(x)
//       console.log("found duplicate: " + x)
//       return true
//     } else {
//       return false
//     }
//   })
// }
