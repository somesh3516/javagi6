let denom =[1,5];
let amm = 27;

function coindenom(coins,amount){
    let total=0;
    let largest;
    while(amount>0){
        largest= Math.max(...coins)
        if (largest>amount){
            coins = removeLargest(coins)
            if(!coins.length) return -1;
        }
        else{
            amount -= largest;
            total++;
    }
    return total;
}
function removeLargest(arr){

    let largest= math.max(arr)
    largest=arr.filter(arr => arr !== largest)
return largest
}

}
console.log(coindenom(denom,amm))