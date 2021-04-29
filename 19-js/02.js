function formatter(number) {
    const numbers = number.toString().split('').reverse()
    const segs = []

    while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

    return segs.join(',').split('').reverse().join('')
}

var conf = [123456]

console.log(formatter(conf))



function newGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}

var token = newGuid()

console.log('token=======', token)



for (let i = 0; i < 26; i++) {
    console.log(i, String.fromCharCode(65 + i))
}