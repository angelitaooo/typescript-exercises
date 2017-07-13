// 4. Add access modifiers to the Dog class. And add the function bark() to the Dog class

class Dog {
    private age: number;
    private breed: string;

    constructor(public name: string){}

    bark(sound: string) {
        console.log(sound);
    }
}