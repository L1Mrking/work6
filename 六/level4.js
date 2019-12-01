const m = new Map();
m.set('张三',18).set('李四',19)
console.log(m)
let num = 0;
const promise = new Promise((resolve) => {
    m.forEach(i =>{
        num += i
    })
    resolve(num)
})
promise.then(num =>{
    console.log(num);
})