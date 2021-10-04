// Задача: Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function (ms) {
  setTimeout(this, ms)
}

function f() {
  console.log('Hello!')
}

f.defer(1000)

//Задача: Добавьте функциям декорирующий метод "deferDec()"
Function.prototype.deferDec = function (ms) {
  return (...args) => { setTimeout(this.bind(null, ...args), ms) }
}

function func(a, b) {
  console.log(a + b)
}

func.deferDec(2000)(1, 2)

// Задача: Добавьте toString() в словарь (метод должен быть неперечисляемым)
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).split('')
    }
  }
})

dictionary.apple = 'Apple'
dictionary.__proto__ = 'test'

for (let key in dictionary) {
  console.log(key)
}

console.log(dictionary)