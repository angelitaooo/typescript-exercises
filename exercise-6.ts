// 6. Create a class named Animal with age and breed variables.
//  Make Dog and cat inherit from it 

class Animal {
    public age: number;
    public breed: boolean;
}

class Dog extends Animal{

    constructor(public name: string){}

    bark(sound: string) {
        console.log(sound);
    }
}
class Cat extends Animal{

    constructor(public name: string){}
    meow (sound: string) {
        console.log(sound);
    }
}