(function(){
    //描述一个对象的类型
    type myType = {
        name :string;
        age:number;
    }

    //接口就是用来定义一个类的结构,用来定义一个类中应该包含哪些属性和方法
    //同时接口也可以当成类型声明去使用
    
    interface myInterface{
        name:string;
        age:number;
    }

    //接口可以重复使用
    interface myInterface{
       gender:string;
    }

    const obj:myInterface={
        name:'zs',
        age:19,
        gender:'男'
    }

    //接口可以定义类的时候去限制累的结构
    //接口中的所有属性都不能有实际值
    //接口只定义对象的结构，而不考虑实际值
    //在接口中的方法都是抽象方法
    interface myInter{
        name:string;
        sayHellow():void;
    }


    //定义类时，可以使用类去实现一个接口
    //实现接口就是使用类满足接口的需求
    //implements实现
    class MyClass implements myInter{
        name: string;
        constructor(name:string){
            this.name = name;
        }
        sayHellow(): void {
           console.log("大家好~");
           
        }

    }

})