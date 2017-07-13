// 5. Create the cat class with the same parameters as 
// the Dog class but with the meow() function 

class Cat {
    private age: number;
    private breed: string;

    constructor(public name: string){}
    meow (sound: string) {
        console.log(sound);
    }
}