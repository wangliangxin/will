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



var arr1 = [
    { name: '李四', block: '1' },
    { name: '赵六', block: '3' },
    { name: '王五', block: '1' },
    { name: '王到', block: '4' },
    { name: '王流', block: '6' }
]

var arrayTwo = Object.values(arr1.reduce((res, item) => {
    res[item.block] ? res[item.block].push(item) : res[item.block] = [item];
    for (let i = 0; i < 26; i++) {
        if (!res[i]) {
            res[i] = []
        }
    }
    return res;
}, {}));
console.log(arrayTwo)