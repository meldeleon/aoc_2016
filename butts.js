test = "acba[mnop]baqrst"

let captureGroups = test.split(/(\[.*?\])/g)

captureGroups.forEach((group) => {
  if (group.startsWith("[")) {
    console.log(`${group} is in brackets`)
  } else {
    console.log(group)
  }
})
