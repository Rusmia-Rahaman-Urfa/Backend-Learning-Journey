// Given array with prices of items -> [351, 564, 400, 789, 33]. 
// All items have an offer of 10% OFF on them. Change the array to store the final price after applying for an offer


const prices = [351, 564, 400, 789, 33];
for(let i = 0; i < prices.length; i++){
    /*prices[i] = prices[i] - (prices[i] * 0.1);*/
    prices[i] = prices[i] * 0.9;
}
console.log(prices);