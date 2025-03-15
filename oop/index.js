// Objects => collection of properties and methods
// objects Literal

const user = {
    name:"Muhammad Atif khan",
    age:"21",

    locations: function(){
    // this will show an error     console.log(`${name} live at uet peshawar`);
    console.log(`${this.name} live at uet peshawar`); // this will work fine
   // console.log(this); // this will give full object 
    }
}

//   console.log(user.name); this will print my name 
console.log(user.locations());
 // console.log(this ); // this will give an empty object
 // this will print location but if i write inside in function clg(`${name}`) then this will give an error becuase it does not know error then we need to used this keyword this keywoard is used for current value inentify


 // suppose i have multiple user and added one by one make the code complexity and diffcult to handle it and does not clean our code so we need to used the concept of constructor