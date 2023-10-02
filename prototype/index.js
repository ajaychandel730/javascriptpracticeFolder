 function Animal(name) {
     this.name = name;
    this.getName = ()=>{
        console.log("Animal class " + this.name);
    }
};

 function Feature(speed){
    this.speed = speed;
    this.getSpeed = ()=> {
       return console.log("Feature class " + this.speed);
    }
};


function Bird(){
  Feature.call(this, 90);
 this.isBird = true; 
 this.getSpeed = ()=>{console.log("bird", 50)};
}

Bird.prototype = Object.create(Animal.prototype);

let dog = new Animal("puppy");
let dog_Feature = new Bird(60);

