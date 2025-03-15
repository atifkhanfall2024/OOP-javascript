// js work on prototype behaviour

function Createuser(user , login , price){
   this.user = user ,
   this.login = login ,
   this.price = price
   
   return this
}
Createuser.prototype.Increment = function(){
   return this.price++
}

Createuser.prototype.PrintMe = function(){
    console.log(`price is ${this.price}`);
}

const person1 = new Createuser("Atif" , true , 30)
const person2 = new Createuser("qasim" , false , 50)
console.log(person1.Increment());
person1.PrintMe() 