class University{
  
     constructor(name , location , numberOfDep = ''){
        this.name = name,
        this.location = location,
        this.numberOfDep = numberOfDep
     }

     cafe(){
        return `The cafe of ${this.name} is amazing`
     }
}

class Departments extends University{
     
    constructor( name ,Rooms , Labs , Teachers){
        super(name)
        this.Rooms = Rooms ,
        this.Labs = Labs ,
        this.Teachers = Teachers
    }

    checkdata(){
        console.log(`${this.name} department have ${this.Rooms} and ${this.Labs} and ${this.Teachers}`);
    }
// static function or method can not be called using an instace it can called direclty
    static Gpa(){
        console.log("your Gpa is 3.8");
    }
}


//const uni = new University('Computer Science' , 'peshawar' , 20)
//console.log(uni.cafe());

 const Dep = new Departments("Computer Science" , 15 , 8 , 17)
 console.log(Dep.cafe());
 Dep.checkdata()
  //  Dep.Gpa() this cannot work we can call it directly without an instance

  Departments.Gpa() // now this will work fine