class Person {
  name = 'Sergey Bakutov'
  age = 23
}

const person = new Person()

const p = document.createElement('p')
p.textContent = person.name
const root = document.querySelector('#root')
root.append(p)

const x = 32
console.log(x)

const sum = (a: number, b: number): number => {
  return a + b
}

console.log(sum(1, 41))
console.log('Возраст:', person.age)
