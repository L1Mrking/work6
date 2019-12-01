let myPow = (x,n) => {
    if(n > 0){
        let number = x;
        for(let i = 2;i<=n;i++){
            number = number * x;
        }
        return number
    } else if(n == 0){
        return 1
    } else{
        let number = 1/x;
        for(let i = 2;i <= -n;i++){
            number = number * 1/x;
        }
        return number
    }
};
let result1 = myPow(2,10)
console.log(result1)
console.log(myPow(2,-2))