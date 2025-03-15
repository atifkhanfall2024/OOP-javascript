 function User(name , age , islogin){
    this.name = name ,
    this.age = age ,
    this.islogin = islogin

    this.greet = function(){
        console.log(`Welcome ${this.name}`);
    }

    // we use this.name , age ,islogin with this keywoard mean that we indentify that its our own current variable
    // when we use new keywoard for instances then we donnot by default our values is return 
  //  return this
}

 //const user1 = User("Atif" , 21 , true)
 // const user2 = User("ali" , 19 , false)

// now this will override the second one  , on console the second one will be printed
// so here the concept of constructor function is come we use new keyward to creating instances foe every function


const user1 =  new User("Atif" , 21 , true)
const user2 = new User("ali" , 19 , false)

console.log(user1);
console.log(user2);
user1.greet()