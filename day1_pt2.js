const input = require("fs")
  .readFileSync("day1_input.txt")
  .toString()
  .split(", ")

let marker = {
  position: [0, 0],
  facing: "N",
}

let cardinals = ["N", "E", "S", "W"]
let locationsStopped = [[0, 0]]
let locationsVisited = []
input.forEach((instruction) => {
  let direction = instruction[0]
  let distance = parseInt(instruction.substring(1))
  moveMarker(marker, direction, distance)
})
//console.log(locationsStopped)

for (i = 1; i < locationsStopped.length; i++) {
  let xDelta = locationsStopped[i][0] - locationsStopped[i - 1][0]
  let yDelta = locationsStopped[i][1] - locationsStopped[i - 1][1]
  //console.log(xDelta, yDelta)
  if (xDelta > 0) {
    for (j = 1; j < Math.abs(xDelta); j++) {
      // console.log("moving + x")
      locationsVisited.push([
        locationsStopped[i - 1][0] + j,
        locationsStopped[i][1],
      ])
    }
  } else if (xDelta < 0) {
    for (k = 1; k < Math.abs(xDelta); k++) {
      //console.log("moving - x")
      locationsVisited.push([
        locationsStopped[i - 1][0] - k,
        locationsStopped[i][1],
      ])
    }
  } else if (yDelta > 0) {
    for (l = 0; l < Math.abs(yDelta); l++) {
      //console.log("moving + y")
      locationsVisited.push([
        locationsStopped[i][0],
        locationsStopped[i - 1][1] + l,
      ])
    }
  } else if (yDelta < 0) {
    for (l = 0; l < Math.abs(yDelta); l++) {
      //console.log("moving + y")
      locationsVisited.push([
        locationsStopped[i][0],
        locationsStopped[i - 1][1] - l,
      ])
    }
  }
}
console.log(locationsVisited)
stringLocationsVisited = []
locationsVisited.forEach((x) => {
  stringLocationsVisited.push(x.toString())
})
let duplicates = []
stringLocationsVisited.forEach((x, index) => {
  stringLocationsVisited.forEach((y) => {
    if (x === y && stringLocationsVisited.indexOf(y) !== index) {
      duplicates.push(x)
    }
  })
})

// console.log(duplicates)

const firstDupe = duplicates[0].split(",")
// console.log(firstDupe)
const soltuion = distanceTraveled([0, 0], firstDupe)

console.log(soltuion)

function moveMarker(marker, direction, distance) {
  let currentIndex = cardinals.indexOf(marker.facing)
  let currentPostion = marker.position
  let x = parseInt(currentPostion[0])
  let y = parseInt(currentPostion[1])
  if (direction === "R") {
    marker.facing = cardinals[(currentIndex + 1) % cardinals.length]
  } else {
    marker.facing =
      cardinals[(currentIndex + cardinals.length - 1) % cardinals.length]
  }
  switch (marker.facing) {
    case "N":
      marker.position = [x, y + distance]
      break
    case "E":
      marker.position = [x + distance, y]
      break
    case "S":
      marker.position = [x, y - distance]
      break
    case "W":
      marker.position = [x - distance, y]
      break
    default:
      console.log("no cases met")
  }
  locationsStopped.push(marker.position)
  return marker.position
}

function distanceTraveled(coords1, coords2) {
  let [x1, y1] = [coords1[0], coords1[1]]
  let [x2, y2] = [coords2[0], coords2[1]]
  let distanceX = Math.sqrt(Math.pow(x2 - x1, 2))
  let distanceY = Math.sqrt(Math.pow(y2 - y1, 2))
  let distance = distanceX + distanceY
  return distance
}
