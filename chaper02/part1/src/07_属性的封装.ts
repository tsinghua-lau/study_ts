(function (){
    //属性封装，让属性更加安全
    class Person{
        //TS中可以在属性前添加属性的修饰符
        //public 修改时的属性可以在任意位置进行访问修改
        //private 私有属性，只能在类内部进行访问修改
        //通过在类中添加方法使得私有属性可以被外部访问
        //protected 受包含的属性，只能在当前类和当前类的子类中访问
        private name:string;
        private age:number;

        constructor(name:string,age:number){
            this.name = name;
            this.age = age;
        }

        //get set 属性存取器,方法可以有控制权满足条件再修改属性
        //定义一个方法，用来获取name
        getName(){
            return this.name;
        }

         //定义一个方法，用来设置name
         setName(value:string){
           this.name = value;
        }

        //名字不可以和私有属性重复
        get names(){
            return this.name;
        }

        set names(value:string){
            this.name = value;
        }


    }

    const per = new Person('孙悟空',18);

    //现在属性是在对象中设置的，属性可以任意被修改
    //属性可以任意被修改将会导致对象中的数据变得非常不安全
    // per.name = "猪拔戒";
    // per.age = 38;
    console.log(per.setName('张三'));
    console.log(per.getName());


    per.names = '大表哥';
    console.log(per.names);


    class A{
        //不加修饰符,默认是public,可以在子类中访问
        num:number;
        constructor(num:number){
            this.num  = num;
        }
    }

    class B extends A{
        test(){
            console.log(this.num);
            
        }
    }

    const b = new B(123);
    b.test()


    //快捷写法--语法糖
    class C{
        //可以直接将属性定义在构造函数中
        constructor(public name:string,public age:number){
        }
    }

    const c = new C('老夫子',19)
    console.log(c);
    
})()