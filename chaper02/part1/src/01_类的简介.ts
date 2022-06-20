//使用class关键字定义一个类

//对象中主要包含两个部分
//属性、方法
//属性或方法前加static 就是类方法，可以直接通过类去调用
class Person{
    //直接定义的属性是示例的属性
    readonly name:string = "孙悟空";
   static age:number = 18

  static seyHellow(){
    console.log('大家好');
    
   }
}

const per = new Person();
console.log(per.name)
// per.seyHellow();
Person.seyHellow() 
