/*
  ======================================== Random Item ====================================================
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(arr) {
  return arr[getRandomInt(0, arr.length - 1)]
}

// getRandomInt(1, 10)
// > 2

// const arr = [1, 2, 3, 'a','b','c']
// getRandomItem(arr)
// > b
