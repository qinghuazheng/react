import React from 'react';
//react的一个插件，负责把元素插进DOM
import ReactDOM from 'react-dom';
//render方法是将react元素（jsx元素）渲染到一个DOM容器里面
//jsx js+jtml的混合写法

// let ele=React.createElement('div',null,[React.createElement('div',null,['hello'])]);
//1.此处写的属性名都要转成驼峰命名法
//2.有些属性是JS关键字，要变种转换class-className for-htmlFor
//let ele=React.createElement('div',{id:1.className:'red'},[React.createElement('span',null,['hello'])]);
ReactDOM.render(
    //react元素：通过js对象 来描述dom结构的一种数据结构
    //React.createElement('h1',null属性,['hello'])
    //{tagname:'h1',attr:null,children:['hello']}
    //真正的dom对象、节点
    <h1>hello</h1>,//语法糖  描述dom结构的方式

    document.querySelector('#root')
);

function render(eleObj,container){

}