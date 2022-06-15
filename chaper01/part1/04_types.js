//Object表示一个js对象
var a;
a = {};
// a = function(){
// };
//
//{}用来指定对象中可以包含哪些属性
//语法 {属性名:属性值,属性名:属性值}
//在属性名后加？，表示该属性是可选的
var b;
b = { name: '孙悟空', age: 18 };
//propName:string]:any 表示任意类型的属性
var c;
c = { name: '猪八戒', age: 15, sex: '男' };
/*
*设置函数结构类型的声明
*语法（形参：类型，形参：类型...）
*/
var d;
d = function (n1, n2) {
    return 10;
};
/*数组的声明
*  类型[]
* Array<类型>
*/
//string[] 表示字符串数组
var e;
e = ['1', '2', '3'];
//number表示数值
var f;
f = [1, 2, 3];
var g;
g = [1, 2, 3];
/*
*  元组
*  就是固定长度的数组
*/
var h;
h = ['hellow', '123'];
/*
*  enum枚举,问了存储字节小一点
*
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male //'male'
};
console.log(i.gender === Gender.Male);
