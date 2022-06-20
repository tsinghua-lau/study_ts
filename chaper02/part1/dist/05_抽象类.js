"use strict";
(function () {
    //abstract开头的类就是抽象类
    //抽象类和其他的类区别不大，只是不能用来创建对象
    //抽象类就是专门用来被继承的类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        //子类必须重写abstract 方法
        sayHello() {
            console.log('汪汪汪~');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
})();
