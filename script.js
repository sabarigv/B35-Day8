//circle
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get calc(){
        console.log("The properties of the Circle are below");
        console.log(this.circleradius());
        console.log(this.circlecircumference());
        console.log(this.circlearea());
    }
    circleradius(){
        return `The radius is ${this.radius}`;
    }
    circlecircumference(){
        return `The circumference is ${(this.radius*2*Math.PI).toFixed(2)}`;
    }
    circlearea(){
        return `The area is ${(Math.pow(this.radius,3)*4*Math.PI/3).toFixed(2)}`;
    }
}
var rad1=new Circle(1.0,"red");
console.log(rad1);
console.log(rad1.calc);
var rad2=new Circle(5,"blue");
console.log(rad2);
console.log(rad2.calc);

//movie
class Movie{
    constructor(movie,studio,rating){
        this.Name=movie;
        this.Studio=studio;
        this.Rating=rating;
    }
    get rate(){
        return this.getPG();
    }
    getPG(){
        if(this.Rating=="PG")
        return this.Name;
    }
}
//Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
var movie1=new Movie("PoniyanSelvan","Lyca","9.9");
console.log(movie1.Name);
console.log(movie1.Studio);
console.log(movie1.Rating);

//Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
var movie2=new Movie("NaaneVaruvean","SunPictures","9.1");
console.log(movie2);
console.log(movie2.getPG());

//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var movie3=new Movie("Casino Rolaye","Eon Productions","PG18");
console.log(movie3);

//person
class person{
    constructor(name,age,address,Ph){
        this.name=name;
        this.age=age;
        this.adress=address;
        this.Ph=Ph;
    }
}
let person1=new person("Giri",25,"Bangalore",1234567890);
let person2=new person("Vasan",23,"Ambur",0987654321);
console.log(person1);
console.log(person2);

//uber
class Uber{
    constructor(name,car,Distance){
        this.Customer_Name=name;
        this.Car=car;
        this.Distance=Distance;
    }
    get cost(){
        return this.fare();
    }
fare(){
    if(this.Distance<3)
    return "The fare is 80 rupees";
    else
    return "The fare is "+(this.Distance*25)+" rupees";
}
}
let price1=new Uber("Sabari","BMW",16);
console.log(price1,price1.cost);
let price2=new Uber("Ramya","Audi",20);
console.log(price2,price2.cost);