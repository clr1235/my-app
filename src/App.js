import React, {Component, useState } from 'react';
import { Input, Button } from 'antd'
import { debounce } from 'lodash'
import Moment from 'moment'

import './app.scss'

// function Person(){

// }
// var person = new Person();
// person.name = 'kevin';
// console.log(person.name);
// console.log(Person.prototype === person.__proto__);
// console.log(Person === Person.prototype.constructor);
// console.log(Object.getPrototypeOf(person) = Person.prototype);
/**
 * prototype 是函数才会有的属性
 * 
 * 函数的prototype属性指向了一个对象，这个对象正是调用该构造函数而创建的实例对象的原型。
 * Person.prototype = person.__proto__
 * 
 * constructor  每个原型都有一个constructor属性指向关联的构造函数
 * Person = Person.prototype.constructor
 * 
 * Object.getPrototypeOf(person) = Person.prototype
 * 
 * 当读取实例的属性时，如果找不到就会查找与对象关联的原型中的属性，如果还找不到就去找原型的原型，一直到最顶层为止。
 */

/**
 * js 可执行代码
 * 全局代码    函数代码   eval代码
 * 当执行到一个函数的时候，就会进行一个准备工作，这里的准备工作也就是执行上下文
 * 
 * 每个执行上下文，都有三个重要属性
 * 1.变量对象(Variable object，VO)   2.作用域链(Scope chain)  3.this
 * 变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明
 * 
 * 函数上下文
 * 在函数上下文中用活动对象AO来表示变量对象
 * 活动对象是在进入函数上下文时刻被创建的，它通过函数的arguments属性初始化.arguments属性值是Arguments对象
 * 
 * 变量对象包括:
 * 1.函数的所有形参   2.函数声明   3.变量声明
 * 
 * 
 */

/**
 * 作用域
 * 是指程序源代码中定义变量的区域
 * 规定了如何查找变量，也就是确定当前代码对变量的访问权限
 * js 采用词法作用域 也就是静态作用域
 */




class App extends Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this);
    this.onChange = debounce(this.onChange, 1000);
  }

  onChange(e){
    console.log(e.target.value)
  }

  render(){
    return (
      <div>
        
      </div>
    )
  }
}

// function App() {
//   const [state, setState] = useState(0)
  
//   return (
//     <div>
//       <Button 
//         onClick={() => {
//           setState(state + 1)
//         }}
//       >点击</Button>
//     </div>
//   );
// }

export default App;



// 防抖函数 是一个高阶函数，使用了闭包，此处闭包保存的是setTimeout返回的timer，
// 用于在后续持续触发之前及时取消定时器
// function debounce(fn, delay) {
//   // fn是我们需要包装的事件回调, delay是每次推迟执行的等待时间
//   //定时器
//   let timer = null;
//   // 将debounce处理结果当作函数返回
//   return function () {
//     // 保留调用时的this上下文
//     let context = this;
//     // 保留调用时传入的参数
//     let args = arguments
//      // 每次事件被触发时，都去清除之前的旧定时器
//     if(timer){
//       clearTimeout(timer);
//     }
//     // 设立新定时器
//     timer = setTimeout(function () {
//       fn.apply(context, args)
//     }, delay)

//   }
// }

/**
 * 节流函数  是一个高阶函数，使用闭包保存上一次触发回调的时间last，执行函数fn，时间阀值inerval，
 * 在要执行fn时，当前时间与上一次触发事件进行比较，如果时间间隔大于interval(now - last >= interval)
 * 执行函数fn.apply(context, args)
 */

//  Function.prototype.throttle = (fn, interval) => {
//   // fn是我们需要包装的事件回调, interval是时间间隔的阈值
//   // last 为上一次触发回调的时间
//   let last = 0;

//   // 将throttle处理结果当作函数返回
//   return function () {
//     // 保留调用时的this上下文
//     let context = this
//     // 保留调用时传入的参数
//     let args = arguments
//     // 记录本次触发回调的时间
//     let now = +new Date()
//     // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
//     if (now - last >= interval) {
//       // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
//           last = now;
//           fn.apply(context, args);
//       }
//   }
//  }


/**
 * setState本身的执行过程是同步的，只是因为在react的合成事件与钩子函数中执行顺序在更新之前，所以不能直接拿到更新后的值，
 * 形成了所谓的异步
 * 
 * 可以同步，在原生事件与setTimeout中是同步的
 * 
 */