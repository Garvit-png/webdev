/*
 * ============================================================
 *                  JAVASCRIPT - ARRAYS
 * ============================================================
 */


/* ============================================================
 * 1. ARRAY BASICS — Access & Update
 * ============================================================ */

let marks = [10, 40, 54, 32, 75];

console.log(marks[2]); // 54 — index 2 ki value (0 se start hota hai)

marks[2] = 100; // index 2 ki value update karo
console.log(marks); // [10, 40, 100, 32, 75]


/* ============================================================
 * 2. ARRAY METHODS — Add / Remove
 * ============================================================ */

let array = [1, 2, 3, 4, 5];

// ---- push() — end mein add karo ----
array.push(7000);
console.log(array); // [1, 2, 3, 4, 5, 7000]

// ---- pop() — end se hatao ----
array.pop();
console.log(array); // [1, 2, 3, 4, 5]

// ---- shift() — shuru se hatao ----
array.shift();
console.log(array); // [2, 3, 4, 5]

// ---- unshift() — shuru mein add karo ----
array.unshift("pehli value");
console.log(array); // ["pehli value", 2, 3, 4, 5]

// ---- splice() — kisi bhi index se hatao ya add karo ----
// splice(startIndex, deleteCount)
array.splice(2, 1); // index 2 se 1 element hatao
console.log(array);

// splice sirf hatane ke liye nahi — ADD bhi kar sakta hai:
// array.splice(2, 0, "naya") // index 2 pe "naya" daalo, kuch hatao mat

// ---- slice() — portion nikaalo, NAYA array milega ----
// original array change NAHI hota (splice karta hai, slice nahi)
let newArray = array.slice(0, 3); // index 0 se 3 tak (3 exclude)
console.log(newArray);


/* ============================================================
 * 3. ARRAY METHODS — Order
 * ============================================================ */

// ---- reverse() — ulta kar do ----
// NOTE: original array change hota hai, copy nahi banta
array.reverse();

// ---- sort() — ascending order ----
// sort() akela strings ke liye kaam karta hai
// numbers ke liye comparator function dena padta hai
let sr = array.sort(function (a, b) {
    return a - b; // a-b = ascending (chhota pehle)
});
console.log(sr);

// ---- sort() — descending order ----
let rs = array.sort(function (a, b) {
    return b - a; // b-a = descending (bada pehle)
});
console.log(rs);

/*
 * Sort trick yaad karne ka tarika:
 *   a - b -> A pehle -> Ascending
 *   b - a -> B pehle -> Descending
 */


/* ============================================================
 * 4. forEach() — Har element pe kuch karo
 * ============================================================ */

/*
 * forEach = loop ki tarah hai, har element pe ek baar chalta hai
 * NAYA array nahi banta — sirf side effects ke liye (print, update etc.)
 */

let arr1 = [11, 62, 3, 4, 25];

arr1.forEach(function (val) {
    console.log(val + 5); // har value mein 5 add karke print karo
});


/* ============================================================
 * 5. map() — Naya array banao
 * ============================================================ */

/*
 * map() = purane array ke basis pe NAYA array banana
 * map() dekhte hi dimag mein -> "ek blank array ban raha hai"
 *
 * forEach vs map:
 *   forEach -> sirf kaam karo, return nahi karna
 *   map     -> har element transform karo, naya array milega
 */

let MapArr = arr1.map(function (val) {
    return val * 2; // har value double karke naye array mein daalo
});
console.log(MapArr);


/* ============================================================
 * 6. filter() — Condition ke basis pe chhaano
 * ============================================================ */

/*
 * filter() = jo elements condition pass karein sirf woh naye array mein aayenge
 * true return karo -> element raho
 * false return karo -> element hato
 */

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Example: sirf even numbers chahiye
let evenArr = arr2.filter(function (val) {
    return val % 2 === 0; // true aaya toh naye array mein jayega
});
console.log(evenArr); // [2, 4, 6, 8]


/* ============================================================
 * 7. reduce() — Poori array ko ek value mein laao
 * ============================================================ */

/*
 * reduce() = badi array ko ek chhoti value mein compress karo
 * accumulator = bar bar apni value yaad rakhta hai
 *
 * Syntax: array.reduce(function(accumulator, val){ }, initialValue)
 *   accumulator -> running total / result
 *   val         -> current element
 *   initialValue -> accumulator ki starting value (0 rakho usually)
 */

let arr3 = [1, 2, 3, 4, 6, 7, 8, 5, 3, 2, 2, 1];

let total = arr3.reduce(function (accumulator, val) {
    return accumulator + val; // har step pe running total mein val jodta hai
}, 0); // accumulator 0 se shuru hoga

console.log(total); // 44


/* ============================================================
 * 8. find() — Pehla matching element dhundo
 * ============================================================ */

/*
 * find() = condition match karne wala PEHLA element return karta hai
 * filter() se fark: filter poora array deta hai, find ek element
 */

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let found = arr4.find(function (val) {
    return val === 5;
});
console.log(found); // 5

// Objects ke array mein find() bahut useful hai
let arr5 = [
    { id: 1, key: 1 },
    { id: 2, key: 2 },
    { id: 3, key: 1 },
];

let vay = arr5.find(function (val) {
    return val.key === 1; // key===1 wala pehla object chahiye
});
console.log(vay); // { id: 1, key: 1 } — pehla match milega


/* ============================================================
 * 9. some() — Koi ek bhi condition pass kare?
 * ============================================================ */

/*
 * some() = agar koi bhi ek element condition pass kare -> true
 * sab fail ho jaayein -> false
 */

let arr6 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let hushiyar = arr6.some(function (val) {
    return val > 60; // koi bhi value 60 se badi hai?
});
console.log(hushiyar); // true (70, 80, 90 hain)


/* ============================================================
 * 10. every() — Sab elements condition pass karein?
 * ============================================================ */

/*
 * every() = agar SABHI elements condition pass karein -> true
 * ek bhi fail ho -> false
 */

let arr7 = [10, 23, 23, 53];

let eve = arr7.every(function (val) {
    return val > 8; // kya sab 8 se bade hain?
});
console.log(eve); // true


/* ============================================================
 * 11. DESTRUCTURING — Array se directly variables mein daalo
 * ============================================================ */

/*
 * Array destructuring = array ke elements ko seedha variables mein tod do
 * Index ke hisaab se values milti hain
 * Gap chhodne ke liye comma chhod do
 */

let arr9 = [1, 2, 3, 4, 5];

let [a, b, , d] = arr9;
// a = 1, b = 2, (3 skip), d = 4
console.log(a, b, d); // 1 2 4


/* ============================================================
 * 12. SPREAD OPERATOR ( ...arr )
 * ============================================================ */

/*
 * Spread = array ke elements ko "failaata" hai
 *
 * Array mein use karo -> SPREAD (copy / merge)
 * Function parameter mein use karo -> REST (collect)
 *
 * Spread se copy karne pe REFERENCE nahi milta — REAL copy milti hai
 * (primitive values ke liye — nested objects ke liye deep copy nahi hoti)
 */

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr11 = [...arr10]; // real copy — arr10 aur arr11 ab alag hain

arr11.push(100);
console.log(arr10); // original unchanged
console.log(arr11); // copy mein 100 add hua


/* ============================================================
 * PRACTICE QUESTIONS
 * ============================================================ */

// Q1. Array banao 3 fruits, doosra fruit print karo
// NOTE: teen alag strings chahiye thi, ek string mein sab nahi
let fruits = ["apple", "banana", "dragonfruit"]; // fix: comma separated strings
console.log(fruits[1]); // "banana"

// Q2. End mein Mango, shuru mein Pineapple add karo
fruits.unshift("Pineapple");
fruits.push("Mango");
console.log(fruits); // ["Pineapple", "apple", "banana", "dragonfruit", "Mango"]

// Q3. "banana" ko "kiwi" se replace karo
fruits[2] = "kiwi"; // index 2 pe banana tha
console.log(fruits);

// Q4. map() se har number ka square nikalo
let arr12 = [1, 2, 3, 4];

let arr13 = arr12.map(function (val) {
    return val * val; // val^2
});
console.log(arr13); // [1, 4, 9, 16]