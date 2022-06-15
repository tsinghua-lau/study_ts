//声明一个变量a，且a的类型为number

let a:number;

a = 10;

//a='hellow' 不能将类型“string”分配给类型“number”

// let b:boolean = true;

let b:number;

//如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型监测

let c = false;

c = true;

//js中的函数是不参考参数的类型和个数的

function sum(a: number,b: number): number{
    return a + b;
}

let result  = sum(123,456)

console.log(result)
