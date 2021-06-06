function welcoming(){
  alert('welcome to Car website')
}
function passwordKey(y){
  let password = '0101'
  while(y !==password){

    y= prompt("enter your password?")
  }
}
function choosingCar(car){
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
}

function carNum(x){
  while(x>5){
    x = prompt('how many car do you want? please less than five')
  }
 for(var i=0;i<x;i++){

   document.write('<img src ="https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg" height="100px" width="100px"/>')
   console.log(i)

 }
}

welcoming();

let p= prompt("enter your password?")
passwordKey(p);

let carCh = prompt("which type of car do you like?")
choosingCar(carCh);

let num = prompt('how many car do you want? please less than 5')
carNum(num);