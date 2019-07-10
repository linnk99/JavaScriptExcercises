//This program asks for your

function ageMessage() {
  var age = prompt('What\'s your age?')
  var yearsToOneHundred = 100 - age

  var copies = prompt('How many copies of the message do you want?')
  for(var i = 0; i < copies; i++ ) {
    console.log('You\'re ' + age + ' years old and you\'ll turn 100 in ' + yearsToOneHundred + ' years.\n')
  }
}