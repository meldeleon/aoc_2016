const input = require("fs")
  .readFileSync("day9_input.txt")
  .toString()
  .split(/\r\n/)

const isolateMarkers = function (str) {
  //find the marker indices
  let markersIndices = []
  let openParens = []
  let closeParens = []
  str.split("").forEach((character, index) => {
    if (character === "(") {
      openParens.push(index)
    } else if (character === ")") {
      closeParens.push(index)
    }
  })
  for (let i = 0; i < closeParens.length; i++) {
    markersIndices.push([openParens[i], closeParens[i]])
  }
  //create marker objects
  let markers = []
  markersIndices.forEach((indices) => {
    let markerStr = str.slice(indices[0] + 1, indices[1])
    let markerObj = {
      startingIndex: indices[0],
      endingIndex: indices[1],
      markerString: markerStr,
      subsequentChar: parseInt(markerStr.split("x")[0]),
      repetitions: parseInt(markerStr.split("x")[1]),
      originalString: str,
    }
    markers.push(markerObj)
  })

  //invalidate marker objects
  if (markers.length > 1) {
    for (let j = 0; j < markers.length; j++) {
      let initialComparator =
        markers[j].startingIndex + markers[j].subsequentChar
      if (markers[j + 1]) {
        let nextComparator =
          markers[j + 1].startingIndex + markers[j + 1].subsequentChar
        if (initialComparator >= nextComparator) {
          markers.splice(j + 1, 1)
        }
      }
    }
  }
  return markers
}

//processes a single markers
const processsMarker = function (markerObj) {
  console.log(markerObj)
  let { endingIndex, subsequentChar, repetitions, originalString } = markerObj
  let insertionString = originalString.substring(
    endingIndex + 1,
    endingIndex + 1 + subsequentChar
  )
  let replicatedInsertionString = ""
  for (let i = 0; i < repetitions - 1; i++) {
    replicatedInsertionString += insertionString
  }
  let finalString = insertString(
    originalString,
    replicatedInsertionString,
    endingIndex + 1
  )
  return finalString
}
const insertString = function (str1, str2, insertIndex) {
  let firstHalf = str1.slice(0, insertIndex + 1)
  let secondHalf = str1.slice(insertIndex + 1, str1.length)
  return firstHalf.concat("", str2, secondHalf)
}

let test = "A(1x5)BC"
let testMarkers = isolateMarkers(test)
let testResult = processsMarker(testMarkers[0])
console.log(testResult)

// let finalDecompressedLengths = []
// input.forEach((str) => {
//   let strMarkers = isolateMarkers(str)
//   let decompressedLength
//   if (strMarkers.length === 0) {
//     decompressedLength = str.length
//   } else {
//     let processedString = processsMarkers(strMarkers)
//     decompressedLength =
//   }
//   console.log(strMarkers)
//   if (decompressedLength != undefined) {
//     finalDecompressedLengths.push(decompressedLength)
//   }
// })
