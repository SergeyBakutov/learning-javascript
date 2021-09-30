// Задача: Проверка объекта на пустоту
function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

// Задача: суммирование зарплат
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(obj) {
  let sum = 0
  for (let key in obj) {
    sum += obj[key]
  }
  return sum
}

// Второй вариант решения задачи (выше)
function sumSalariesTwo(obj) {
  return Object.values(obj).reduce((acum, cur) => acum += cur, 0)
}

//Задача: умножение числовых свойств
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
}

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] == 'number') {
      obj[prop] *= 2
    }
  }
}

// Задача: создать объект калькулятор
let calc = {
  read() {
    this.a = +prompt('Введите первое значение:')
    this.b = +prompt('Введите второе значение:')
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
}

// Задача: создать функцию-конструктор Accumulator
function Accumulator(startingValue) {
  this.value = startingValue
  this.read = function () {
    this.value += +prompt('Введите число для прибавления:')
  }
}