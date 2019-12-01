let arr = [2,3,7,5,2,6,9,7,0];
let s = new Set(arr);
let max = arr.reduce((a,b) =>{
    return b>a ?b:a;
});
s.delete(max)
console.log(s)
const promise = new Promise((resolve,reject) => {
    if (s.size == 6){
        resolve("9已被删除成功！")
    } else{
        reject("删除数据时出现错误！")
    }
})
promise.then(res1 =>{
    console.log(res1);
}).catch(err => {
    console.log(err);
})