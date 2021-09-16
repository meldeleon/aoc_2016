const input = require("fs")
  .readFileSync("day1_input.txt")
  .toString()
  .split(", ")
console.log(input)

let marker = {
  position: [0, 0],
  facing: "N",
}

let cardinals = ["N", "E", "S", "W"]

input.forEach((instruction) => {
  let direction = instruction[0]
  let distance = parseInt(instruction.substring(1))
  moveMarker(marker, direction, distance)
})

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
  console.log(distanceTraveled([0, 0], marker.position))
}

function distanceTraveled(coords1, coords2) {
  let [x1, y1] = [coords1[0], coords1[1]]
  let [x2, y2] = [coords2[0], coords2[1]]
  let distanceX = Math.sqrt(Math.pow(x2 - x1, 2))
  let distanceY = Math.sqrt(Math.pow(y2 - y1, 2))
  let distance = distanceX + distanceY
  return distance
}
