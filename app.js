// Trip Calculator
// IN: Distance, gas cost, gas tank size, listed MPG, speed, car/truck
// OUT: real mpg, total gas cost, how many times to stop and fill
//
var prompt = require('sync-prompt').prompt;

var distance = prompt('How many miles are you driving? ')
distance = parseInt(distance)

var gasCost = prompt('How much does gas cost per gallon? ')
gasCost = parseFloat(gasCost)

var listedMPG = prompt('What is the listed MPG of your vehicle? ')
listedMPG = parseInt(listedMPG)

var tankSize = prompt('How many gallons is your gas tank? ')
tankSize = parseInt(tankSize)

var speed = prompt('How fast do you drive in MPH? ')
speed = parseInt(speed)

var type = prompt('Do you drive a car or a truck? ')

if(type != 'car' && type != 'truck'){console.log('Sorry, your vehicle must be a car or a truck. Please try again')
var type = prompt('Do you drive a car or a truck? ')}

var trueMPG

if(speed > 55 && type === 'car'){
  trueMPG = listedMPG-(speed-55)
  }else if(speed > 55 && type === 'truck'){
  trueMPG = listedMPG - (3*(speed-55))
  }else{trueMPG = listedMPG}

console.log('Your true MPG is ' + trueMPG + ' miles per gallon')

var totalCost = distance*(1/trueMPG)*(gasCost)
  totalCost = totalCost.toFixed(2)
console.log('Your total cost will be ' + totalCost + '$')

var breaks = distance/(trueMPG * tankSize)
breaks = breaks.toFixed(0)
console.log('During your ' + distance + ' mile trip, you have ' + breaks + ' stops for gas. Use them wisely!')
