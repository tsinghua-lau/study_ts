"use strict";
//使用class关键字定义一个类
//对象中主要包含两个部分
//属性、方法
//属性或方法前加static 就是类方法，可以直接通过类去调用
class Person {
    constructor() {
        //直接定义的属性是示例的属性
        this.name = "孙悟空";
    }
    static seyHellow() {
        console.log('大家好');
    }
}
Person.age = 18;
const per = new Person();
console.log(per.name);
// per.seyHellow();
Person.seyHellow();
