//也可以直接使用字面量进行类型声明
let a:10;
a = 10;

//也可以使用|来连接多个类型(联合类型)

let b: "male"|"female";
b = "male";
b = "female";

let c:boolean | string;
c = true;
c = 'hello'

//any 表示是任意类型，一个变量为any时，相当于对该变量关闭ts的类型检测
let d:any;
d = 10;
d = true;

//如果声明变量时不指定类型，则ts解析器自动判断变量类型为any

let p;
p = 10;
p = true;


//unknow 表示未知类型的值

let e:unknown;
e = 10;
e = true;
e = true;


let s: string;

//unknown实际上就是一个类型安全的any
//unknown类型的变量，不能直接赋值给其他变量
if(typeof e === 'string'){
    s = e;
}
e = 'hello';
s = e;

//类型断言 （判断的语言）:可以用来高速解析器变量的实际类型
/*
*语法:
 *  变量 as 类型
 *  <类型>变量
*/

//尽量不用any

s = e as string;
s = <string>e;

//void 用来表示为空，以函数为例，就表示没有返回值的函数
function fn(): void{
    //可以返回null
    //return null
    //不会报错
}

//never 表示永远不会有返回结构
function fn2(): never{
    //连null也不会返回
}