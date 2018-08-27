const text = 'aaa-xxx-bbb-xxx-ccc-xxx-ddd-xxx-eee'
const [head, tail] = text.split(/xxx(.*)/)

console.log(head)
console.log(tail)
