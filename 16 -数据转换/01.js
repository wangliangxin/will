var data = [
    { num: 12, brand: '品牌1' },
    { num: 12, brand: '品牌1' },
    { num: 12, brand: '品牌1' },
    { num: 12, brand: '品牌2' }
]



var arr2 = [];


for (var i = 0; i < data.length; i++) {
    var arr3 = [];
    arr3.push(data[i].num)
    arr3.push(data[i].brand)
    arr2.push(arr3)
}


console.log(arr2)