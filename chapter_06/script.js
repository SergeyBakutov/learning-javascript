// Задача: Вычислить сумму чисел до данного (3-мя способами)
// 1-й способ - с использованием цикла
function sumToFirstWay(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}
// 2-й способ - через рекурсию
function sumToSecondWay(n) {
  return n === 1 ? 1 : n + sumToSecondWay(n - 1)
}
// 3-й способ - с использованием формулы арифметической прогрессии
function sumToThirdWay(n) {
  return n * (n + 1) * 0.5
}

// Задача: Числа Фибоначчи
function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

function fibNew(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Задача: Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printList(list) {
  console.log(list.value)
  if (list.next !== null) {
    printList(list.next)
  }
}

function printListSecondWay(list) {
  let curList = list
  while (curList) {
    console.log(curList.value)
    curList = curList.next
  }
}

// Задача: Вывод односвязного списка в обратном порядке
let newList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next)
  }
  console.log(list.value)
}