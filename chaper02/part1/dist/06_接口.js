"use strict";
(function () {
    const obj = {
        name: 'zs',
        age: 19,
        gender: '男'
    };
    //定义类时，可以使用类去实现一个接口
    //实现接口就是使用类满足接口的需求
    //implements实现
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHellow() {
            console.log("大家好~");
        }
    }
});
