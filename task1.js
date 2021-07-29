let a = +prompt('Введите число')

if (typeof a == 'number' && !isNaN(a)) {
  if (a % 2 == 0) {
    console.log('Вы ввели четное число')
  } else {
    console.log('Вы ввели нечетное число')
  }
} else {
  console.log("Упс, кажется, вы ошиблись")
}
