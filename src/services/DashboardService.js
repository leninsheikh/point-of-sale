export const totalSell = (sells) => {
    let total = 0;
    sells.map(sell => {
        total += sell.totalPrice;
    })
    console.log('total sell',total)
    return total;
}