let arr = [-4,-1,0,3,10]
let newarr = arr.map((item) => {
return item*item;
});
function arrAsc(a,b) {
    if(a > b){
        return 1;
    } else if(a < b){
        return -1
    } else{
        return 0;
    }
}
newarr.sort(arrAsc)
console.log(newarr)