// function fn(a:number):number{
//     return a;
// }


//在定义函数或是类时，如果遇到类型不明确就可以用泛型

//K类型,用any关闭了类型检查
//K在运行时会自动确定类型
function fn<K>(a:K):K{
    return a;
}

let r1 = fn(10);//不指定泛型，TS可以自动对类型进行判断

let r2 = fn<string>('hello');//指定类型为string

//多个参数
function fn2<T,K>(a:T,b:K){
    console.log(b);
    
    return a;
}

fn2<number,string>(123,'hello')

interface Inter{
    length:number;
}

// T extends Inter 表示泛型T必须是Inter实现类（子类）
//a: T 参数a的类型为T
function fn3<T extends Inter>(a: T):number{
    return a.length;
}

class MyClass<T>{
    name:T;
    constructor(name:T){
        this.name = name;
    }
}

//指定类型为string
const mc = new MyClass('孙悟空')
const mc2 = new MyClass<string>('孙悟空')

