/* 
**Template Literals** হলো JavaScript-এ string লেখার একটি সহজ পদ্ধতি, যেখানে **backtick (`)** ব্যবহার করা হয়।

```js
let name = "Bikrom";
console.log(`Hello ${name}`);
```

Output:

```text
Hello Bikrom
```

### 🧠 মনে রাখো:

* `" "` / `' '` → সাধারণ string
* `` ` ` `` → **Template Literal**
* `${variable}` → string-এর মধ্যে variable/value বসাতে ব্যবহার হয়।

**Short formula:**

```js
`Text ${variable}`
```

এটাই Template Literal।
 
*/

let price = 500;
let quantity = 3;

console.log(
    `Total price: ${price * quantity} take\npay the price to bet it as your own products`,
); //  multiple new line created.

//Call the function 

function getDiscount (price){
    return price *0.1;

}
console.log(`You saved : ${getDiscount(price)} bdt\nif you use your DBBL card`);
console.log(`You saved : ${getDiscount(price)} bdt\nYour total bill is now ${price * quantity - getDiscount(price)} BDT`);

let stock = 0;
console.log(`Status: ${stock >0? "In Stock:"+ " " +stock : "Out of Stock:" + " " +stock}`);