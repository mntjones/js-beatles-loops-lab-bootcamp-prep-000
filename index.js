function theBeatlesPlay(musician, instrument) {
  var arr = []
  
  if (musician.length !== instrument.length) {
    console.log("Input arrays are of unequal length")
    return
  }
  
  for (var i = 0; i < musician.length; i++) {
    arr[i] = musician[i] + " plays " + instrument[i]
  }
  
  return arr
}

function johnLennonFacts (facts) {
  var i = 0
  var arr = []
  
  while (i < facts.length) {
    var j = 0
    arr[j] = facts[j] + "!!!"
    i++
    j++
  }
  return arr
}