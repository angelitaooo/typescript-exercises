// 7. Change to bark() and meow() functions to return the argument along with 
// the woof! and meow! suffix respectively 

class Animal {
    public age: number;
    public breed: boolean;
}

class Dog extends Animal{

    constructor(public name: string){}

    bark(sound: string) {
        return return sound + "woof!";
    }
}
class Cat extends Animal{

    constructor(public name: string){}
    meow (sound: string) {
        return return sound + "meow!";
    }
}