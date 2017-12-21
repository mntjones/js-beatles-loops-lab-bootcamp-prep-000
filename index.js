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