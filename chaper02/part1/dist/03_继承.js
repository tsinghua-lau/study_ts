"use strict";
(function () {
    //定义一个Animal类
    class Animal {
        constructor(name, age) {
            console.log("constructor执行了");
            this.name = name;
            this.age = age;
            console.log(this);
        }
        sayHello() {
            console.log("动物在叫");
        }
    }
    //Animal为父类，Dog为子类
    //继承后，子类将拥有父类的所有属性和方法
    //通过继承可以讲多个类中的共有代码写在一个父类总
    //这样只需要写一次杰即可让所有的子类同时拥有父类的方法和属性
    //如果子类中的方法和父类中的方法一样，则子类覆盖父类的方法--称为“重写”
    //定义一个类-dog
    class Dog extends Animal {
        sayHello() {
            console.log("123213");
        }
        run() {
            console.log(`${this.name}在跑~~`);
        }
    }
    //定义一个类-cat
    class Cat extends Animal {
    }
    const dog = new Dog('旺财', 5);
    const cat = new Dog('仙仙', 5);
    console.log(dog);
    console.log(cat);
    dog.sayHello();
    cat.sayHello();
    cat.run();
})();
