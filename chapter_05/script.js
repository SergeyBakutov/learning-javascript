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
    sum2
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

// Задача: перевод строки в camelCase
function camelize(str) {
  let array = str.split('')
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '-') {
      array[i + 1] = array[i + 1].toUpperCase()
    }
  }
  return array.filter(item => item != '-').join('')
}

function camelizeTwo(str) {
  return str.split('-').map((el, index) => {
    if (index === 0) {
      return el
    } else {
      return el[0].toUpperCase() + el.slice(1)
    }
  }).join('')
}

// Задача: Фильтрация по диапазону
function filterRange(arr, a, b) {
  return arr.filter(el => el >= a && el <= b)
}

// Задача: Фильрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr)
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1)
      i -= 1
    }
  }
}

// Задача: Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      0
    }
  })
}

// Задача: Создать расширяемый калькулятор
function Calculator() {
  this.operations = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => a - b
  }
  this.calculate = function (str) {
    let arr = str.split(' ')
    return this.operations[arr[1]](arr[0], arr[2])
  }
  this.addMethod = function (name, func) {
    this.operations[name] = func
  }
}

// Задача: Получить средний возраст
let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 29 }

let arr = [vasya, petya, masha]

function getAverageAge(arr) {
  return Math.round(arr.reduce((sum, a) => sum + a.age, 0) / arr.length)
}

//Задача: Оставить уникальные элементы массива
function unique(arr) {
  let uniqueArr = []
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item)
    }
  }
  return uniqueArr
}

// Задача: Фильтрация уникальных элементов массива (через Set)
function uniqueTwo(arr) {
  return [...new Set(arr)]
}

// Задача: Отфильтруйте анаграммы
function aclean(array) {
  let map = new Map()

  for (let el of array) {
    map.set(el.toLowerCase().split('').sort().join(''), el)
  }

  return [...map.values()]
}

// Задача: Сумма свойств объекта (через Object.values() и цикл for..of)
let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
}

function sumSalaries(obj) {
  let sum = 0
  if (obj === null) return sum
  for (let salary of Object.values(obj)) {
    sum += salary
  }
  return sum
}

// Задача: Максимальная зарплата
let salariesTwo = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
}

function topSalary(obj) {
  let sum = 0
  let name = null

  for (let [worker, salary] of Object.entries(obj)) {
    if (salary > sum) {
      sum = salary
      name = worker
    }
  }

  return name
}

// Задача: Покажите день недели
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return days[date.getDay()]
}

// Задача: Исключить обратные ссылки
let room = {
  number: 23
}

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room
}

console.log(JSON.stringify(meetup, function replacer(key, value) {
  if (value === meetup) {
    delete this[key]
  }
  return value
}))