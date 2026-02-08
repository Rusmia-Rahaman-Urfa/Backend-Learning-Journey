/*function signature/sample */
function newPrice(currentPrice , discount ) {
    let discountPrice = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountPrice;
    if (typeof currentPrice != 'number' || typeof discount != 'number'){
        return "Invalid";
    }
    if (discount < 0 || discount > 100){
        return "Invalid";
    }
    return finalPrice.toFixed(3);
}

console.log(newPrice(1500, 20));      // Output: 1200.000
console.log(newPrice(2000, 15));      // Output: 1700.000
console.log(newPrice(1200, 7));       // Output: 1116.000
console.log(newPrice("1000", 10));    // Output: Invalid
console.log(newPrice(2000, 17.17));   // Output: 1656.600
console.log(newPrice(500, "5"));      // Output: Invalid
console.log(newPrice(1200, -1));      // Output: Invalid
console.log(newPrice(1200, 101));     // Output: Invalid  



