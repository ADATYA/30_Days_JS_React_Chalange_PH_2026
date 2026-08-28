let name1 = ['Bireswer','Nomita','Sporsho','Ankita','Bikrom'];
console.log(name1);
name1.push("Singha","Roy");
console.log(name1);

name1.pop("Roy");
console.log(name1);

name1.unshift("Adatya"); //array first e value add hobe.
console.log(name1);

name1.shift("Adatya"); //First theke array remove hoye jabe.
console.log(name1);

/*
| Method      | কী করে?                    | কোথায় কাজ করে?        | Value নেয়?          | Return করে               |
| ----------- | -------------------------- | --------------------- | ------------------- | ------------------------ |
| `push()`    | নতুন element **যোগ করে**   | Array-এর **শেষে**     | হ্যাঁ, এক বা একাধিক | নতুন array-এর **length** |
| `pop()`     | শেষের element **মুছে দেয়** | Array-এর **শেষ থেকে** | না                  | মুছে ফেলা **element**    |
| `unshift()` | নতুন element **যোগ করে**   | Array-এর **শুরুতে**   | হ্যাঁ, এক বা একাধিক | নতুন array-এর **length** |


*/

//Splice
name1.splice(2,0,"Java Script");  //array index, delete index value, new added value.
console.log(name1);