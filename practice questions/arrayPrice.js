let price=[250,645,300,900,50];
let totalPrice;
for(let x=0;x< price.length;x++){
    console.log(`value of price before discount= ${price[x]}`);
    price[x]=price[x]*90/100;
    console.log(`value of price after discount= ${price[x]}`);
}
console.log(price);
