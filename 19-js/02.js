function formatter(number) {
    const numbers = number.toString().split('').reverse()
    const segs = []

    while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

    return segs.join(',').split('').reverse().join('')
}

var conf = [123456]

console.log(formatter(conf))