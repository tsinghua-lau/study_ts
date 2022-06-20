"use strict";
class Dog {
    //constructor 被成为构造函数
    //构造函数会在对象创建时调用
    constructor(name, age) {
        console.log("constructor执行了");
        //在实例方法中，this就表示当前的实例
        //在构造函数中当前对象就是当前新建的那个对象
        this.name = name;
        this.age = age;
        console.log(this);
    }
    break() {
        console.log("wang wang ~");
        //在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}
const dog = new Dog('小黑', 18);
dog.break();
