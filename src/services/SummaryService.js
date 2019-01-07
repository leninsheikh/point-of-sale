export const getSubTotal = products => {
    let sum = 0;
    products.map( product => {
        sum += (product.rate * product.quantity);
    })
    return sum;
}

export const getPayble = (total, discount = 0) => {
    console.log(total);
    if( discount === 0) return total;
    return total - (discount / 100) * total
}

export const getReturnAmount = (paid = 0, payable=0) => {
    return paid - payable;
}