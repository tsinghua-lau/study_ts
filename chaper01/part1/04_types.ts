//Object表示一个js对象
let a: Object;
a = {};
// a = function(){

// };
//

//{}用来指定对象中可以包含哪些属性
//语法 {属性名:属性值,属性名:属性值}
//在属性名后加？，表示该属性是可选的
let b: {name:string,age?:number}
b = {name:'孙悟空',age:18}

//propName:string]:any 表示任意类型的属性
let c: {name:string,[propName:string]:any}
c = {name:'猪八戒',age:15,sex:'男'}
/*
*设置函数结构类型的声明
*语法（形参：类型，形参：类型...）
*/
let d:(a:number,b:number) =>number
d = function(n1:number,n2:number):number{
    return 10
}

/*数组的声明
*  类型[]
* Array<类型>
*/

//string[] 表示字符串数组
let e: string[];
e = ['1','2','3']

//number表示数值
let f:number[];
f = [1,2,3]

let g:Array<number>;
g = [1,2,3]

/*
*  元组
*  就是固定长度的数组
*/

let h:[string,string];
h = ['hellow','123']

/*
*  enum枚举,问了存储字节小一点
*  
*/

enum Gender{
    Male = 0,
    Female = 1
}

let i: {name:string,gender:Gender};
i = {
    name:'孙悟空',
    gender:Gender.Male//'male'
}

console.log(i.gender === Gender.Male);

//&表示同时
// let j:string & number;
let j:{name:string} & {age:number};
j = {name:'zs',age:18}

//类型别名
type Mytype = string;
type Mytype2 = 1|2|3|4|5;
let k :1|2|3|4|5;
let l :1|2|3|4|5;
let m:Mytype2;//m:string/1|2|3|4|5;
m = 2;








