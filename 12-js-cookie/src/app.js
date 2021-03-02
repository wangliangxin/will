import cookies from 'js-cookie'

cookies.set('username', 'will')
cookies.set('password', '123456')
var obj = { age: 10 }
cookies.set('obj', obj, { expires: 7 })