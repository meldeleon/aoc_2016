const input = require("fs")
  .readFileSync("day9_input.txt")
  .toString()
  .split(/\r\n/)

//console.log(input)
let solutionArray = []
input.forEach((line) => {
  let markerIndices = returnMarkerIndicies(line)
  if (markerIndices) {
    let strArray = []
    for (let i = 0; i < markerIndices.length; i++) {
      let characterNumber = line[markerIndices[i].start + 1]
      let repetitions = line[markerIndices[i].end - 1]
      //grab everything ahead of the first marker and push
      if (i === 0) {
        strArray.push(line.substring(0, markerIndices[i].start))
      } else {
        let startOfSubstring = markerIndices[i].end + 1
        let repeatedString = line.substring(
          startOfSubstring,
          startOfSubstring + characterNumber
        )
        for (j = 0, j < repetitions-1; j++)
        strArray.push(repeatedString)
      }
    }
  } else {
    solutionArray.push(line.length)
  }
})

// apply the transformation for following characters based on valid key value pairs

function returnMarkerIndicies(line) {
  // find the index each open parentheses, and each subsequent closing paren, store them as start/end in obj
  let possibleMarkers = []
  line.split("").forEach((character, index) => {
    if (character === "(" || character === ")") {
      possibleMarkers.push(index)
    }
  })

  let objPossibleMarkers = []
  for (let i = 0; i < possibleMarkers.length; i += 2) {
    let objPair = {}
    objPair.start = possibleMarkers[i]
    objPair.end = possibleMarkers[i + 1]
    objPossibleMarkers.push(objPair)
  }
  //console.log(line, objPossibleMarkers)
  // if an opening paren is preceded by a closing paren from another key, throw it away
  let finalMarkers = []
  if (objPossibleMarkers.length > 1) {
    objPossibleMarkers.forEach((marker) => {
      if (line[marker.start - 1] !== ")") {
        finalMarkers.push(marker)
      }
    })
  } else {
    finalMarkers = [...objPossibleMarkers]
  }
  return finalMarkers
}
