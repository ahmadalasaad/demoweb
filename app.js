alert('welcome to Car website')
let password = 0101
let p= prompt("enter your password?")
while(p !=='0101')
{
  p= prompt("enter your password?")

}
let car = prompt("which type of car do you like?")
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
else{
  alert('please choose a car')
}
var x = prompt('how many car do you want? please less than 5')
while(x>5)
{
  x = prompt('how many car do you want? please less than five')
}
 for(var i=0;i<x;i++)
 {
   document.write('<img src ="https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg" height="100px" width="100px"/>')
   console.log(i)

 }