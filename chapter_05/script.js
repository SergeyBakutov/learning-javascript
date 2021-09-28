// Задача: ввод числового значения
function readNumber() {
  let num
  while (typeof num == 'undefined' && typeof num == null) {
    num = +prompt('Введите число:')
    if (typeof num === 'number') break
  }
  return num
}

// Задача: случайное число от min до max
function random(min, max) {
  return Math.random() * (max - min) + min
}

// Задача: случайное целое число от min до max
function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

//Задача: усечение строки
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 1) + '…'
  }
  return str
}

// Задача: Сумма введенных чисел
function sumInput() {
  let arr = []
  let sum = 0

  while (true) {
    let num = prompt('Введите число для суммирования:')
    if (num !== null && num !== '') {
      arr.push(+num)
      continue
    }
    break
  }
  for (let el of arr) {
    sum += el
  }
  return sum
}

// Задача: подмассив наибольшей суммы
function getMaxSubSum(arr) {
  let sum1 = 0,
    sum2 = 0
  for (let i = 0; i < arr.length; i++) {
    sum2 = 0
    for (let j = i; j < arr.length; j++) {
      sum2 += arr[j]
      if (sum2 > sum1) {
        sum1 = sum2
      }
    }
  }
  return sum1
}