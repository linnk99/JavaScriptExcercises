//This program tells if a number is even and multiple of 4, just even or odd

function main() {
  var number = prompt('Enter a number to know if it\'s even or odd')

  function oddOrEven() {
    var result
    if (number % 2 == 0 && number % 4 == 0)
      console.log('The number ' + number + ' is even and multiple of 4.')
    else if (number % 2 == 0)
      console.log('The number ' + number + ' is even.')
    else
    console.log('The number ' + number + ' is odd')
  }

  oddOrEven(number) 
}