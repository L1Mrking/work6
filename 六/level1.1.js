let arr = [-4,-1,0,3,10]
let newArr = arr.map((item) =>{
    return item*item;
})
newArr.sort((a,b) =>{
    return a-b;
})
console.log(newArr)