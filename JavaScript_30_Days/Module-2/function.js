J//we will build a  order processing system to understand dry and how important a function is.

function isValidPrice(price){
    return typeof price == "number" && price>0;
}
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}
function calculateDiscount(price,discoutnPercent){
    if(!isValidPrice(price)){
        return 0;
    }
    let discoutnAmount = (price * discoutnPercent)/ 100;
    return price - discoutnAmount;
}

function calculateFinalBill (price, vatParcentage = 15){
    let vat = (price * vatParcentage) / 100;
    return price + vat;
}
function formatBDT (amount){
    return `${amount.toFixed(2)} BDT`;
}
function capitalized(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function processOrder (user, itemPrice, discountCode){
    console.log(`---Processing order for ${capitalized(user.name)} ---`);
    if(!isValidEmail(user.email)){
        console.log("Wrong email address. Please try again");
    }
    let currentPrice  = itemPrice;

    if(discountCode == "Next Level Bootcamp"){
        currentPrice = calculateDiscount(itemPrice, 20);
        console.log("20% discoutn in applied for registration;")
    }

    let totalBill = calculateFinalBill(currentPrice);
     console.log("Final amount to pay : ",formatBDT(totalBill));
     console.log("Order Completed Successfully!!");
}

let user1 = {name:"Bikrom Adatya Roy", email:"bikromroy1234@gmail.com"};

processOrder(user1, 3700, "Next Level Bootcamp");