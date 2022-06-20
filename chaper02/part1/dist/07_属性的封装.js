"use strict";
(function () {
    //属性封装，让属性更加安全
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //get set 属性存取器,方法可以有控制权满足条件再修改属性
        //定义一个方法，用来获取name
        getName() {
            return this.name;
        }
        //定义一个方法，用来设置name
        setName(value) {
            this.name = value;
        }
        //名字不可以和私有属性重复
        get names() {
            return this.name;
        }
        set names(value) {
            this.name = value;
        }
    }
    const per = new Person('孙悟空', 18);
    //现在属性是在对象中设置的，属性可以任意被修改
    //属性可以任意被修改将会导致对象中的数据变得非常不安全
    // per.name = "猪拔戒";
    // per.age = 38;
    console.log(per.setName('张三'));
    console.log(per.getName());
    per.names = '大表哥';
    console.log(per.names);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    b.test();
    //快捷写法--语法糖
    class C {
        //可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('老夫子', 19);
    console.log(c);
})();
