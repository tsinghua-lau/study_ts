(function(){
    //abstract开头的类就是抽象类
    //抽象类和其他的类区别不大，只是不能用来创建对象
    //抽象类就是专门用来被继承的类
   abstract class Animal{
        name:string;

        constructor(name:string){
            this.name = name;

        }

        //定义一个抽象方法
        //抽象方方法使用abstract开头，没有方法体
        //抽象方法只能定义在抽象类中，子类必须对抽象方法进行重新
       abstract sayHello():void;
    }

    class Dog extends Animal{
        
        //子类必须重写abstract 方法
        sayHello(): void {
          console.log('汪汪汪~');
        }
    }

    const dog = new Dog('旺财')
    dog.sayHello()
    
})()