alert('welcome to Car website')
var car = prompt("which type of car do you like?")
 console.log(car)
if (car == 'bmw') {
  document.write('<h3>' +"you are sporty man"+ '</h3>')
}
else if( car=='kia') {
  document.write('<h3>' + 'you live in Irbid '+ '</h3>')
}
else if (car == 'mercedes') {
  document.write('<h3>' + "you are a classic man"+ '</h3>')
}
else {
  alert('plese enter name of the car')  
}

