function add() {

}



var arr = [1, 2, 3]
console.log(typeof(add)) //function
console.log(typeof(undefined)) // undefined
console.log(typeof(1)) // number
console.log(typeof('abc')) //  string
console.log(typeof(true)) //  boolean
console.log(typeof(arr)) // object
console.log(typeof(null)) // object


console.log('------------------------')


var x = 2

function test() {
    this.x = 1
}

var obj = new test()
console.log(obj.x) // 1, thi代表这新对象的实例，而不是全局对象