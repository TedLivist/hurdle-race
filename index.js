function hurdleRace(arr, initHeight) {
  let maxHeight = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i]
    }
  }
  if ((maxHeight - initHeight) >= 0) {
      return maxHeight - initHeight
  } else {
      return 0
  }
}
