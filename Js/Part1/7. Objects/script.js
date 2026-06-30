/*
 * ============================================================
 *                  JAVASCRIPT - OBJECTS
 * ============================================================
 */


/* ============================================================
 * 1. OBJECT BASICS — Create & Access
 * ============================================================ */

let obj = {
    name: "garvit",
    age: 19,
    khaana: "omelete"
};

// ---- DOT notation ----
console.log(obj.age); // 19 — dot ke saath access hota hai

// ---- BRACKET notation ----
console.log(obj['khaana']); // "omelete" — bracket ke saath bhi access kar sakte hain

/*
 * Dot vs Bracket — kab kya use karein:
 *   Dot     -> jab key ka naam pehle se pata ho (obj.age)
 *   Bracket -> jab key DYNAMIC ho (variable mein store ho)
 *
 * Example:
 *   let k = "age";
 *   obj[k]   -> kaam karega (dynamic key)
 *   obj.k    -> kaam NAHI karega (literally "k" naam ki key dhundega)
 */


/* ============================================================
 * 2. NESTED OBJECTS
 * ============================================================ */

const user = {
    name: "harsh",
    address: {
        city: "Bhopal",
        pin: 345200,
        location: {
            lat: 23.2,
            lng: 33.7,
        }
    }
};

// Nested value access karne ke liye chain lagana padta hai
console.log(user.address.location.lng); // 33.7


/* ============================================================
 * 3. DESTRUCTURING — Nested values seedha nikaalo
 * ============================================================ */

/*
 * Agar baar baar user.address.location.xyz likhna pade
 * toh thakk jaaoge — destructuring se seedha nikaal lo
 */

let { lat, lng } = user.address.location;
console.log(lat, lng); // 23.2 33.7


/* ============================================================
 * 4. FOR...IN LOOP — Object ke keys pe loop
 * ============================================================ */

/*
 * for...in -> object ki saari KEYS pe loop chalata hai
 * key se value nikalne ke liye obj[key] use karo (bracket zaroori hai)
 */

let obj1 = {
    name: "harsh",
    age: 25,
    email: "test@test.com"
};

for (let key in obj1) {
    console.log(key, obj1[key]);
    // name harsh
    // age 25
    // email test@test.com
}


/* ============================================================
 * 5. SPREAD OPERATOR — Object copy karna
 * ============================================================ */

let obj2 = { ...obj1 }; // obj1 ki shallow copy ban gayi

/*
 * SHALLOW COPY ka matlab:
 *   - TOP LEVEL properties ki real copy milti hai
 *     (change karo copy mein -> original safe rehta hai)
 *
 *   - NESTED objects/arrays ke liye REFERENCE milta hai
 *     (change karo copy ke nested part mein -> original mein bhi change ho jaayega)
 *
 * Example:
 *   let a = { x: 1, nested: { y: 2 } };
 *   let b = { ...a };
 *
 *   b.x = 100;        // safe — 'a.x' change nahi hoga
 *   b.nested.y = 999; // DANGER — 'a.nested.y' bhi 999 ho jayega
 *                      // kyunki 'nested' object ka reference copy hua hai
 */


/* ============================================================
 * 6. DEEP CLONE — Nested objects ko bhi safely copy karna
 * ============================================================ */

/*
 * Shallow copy ka nested problem fix karne ke liye DEEP CLONE chahiye
 * Simple tarika: JSON.stringify + JSON.parse
 *
 * Limitation: functions, undefined, Symbol jaise values lose ho jaati hain
 * (production mein structuredClone() ya lodash.cloneDeep() better hai)
 */

let obj3 = JSON.parse(JSON.stringify(obj1));
// ab obj3 obj1 se POORI tarah independent hai — nested ho ya na ho


/* ============================================================
 * 7. OPTIONAL CHAINING ( ?. )
 * ============================================================ */

/*
 * Optional chaining — agar beech mein koi property exist nahi karti
 * toh ERROR nahi aayega, seedha undefined milega
 *
 * Bahut IMPORTANT hai jab data API se aata hai aur kuch fields
 * missing ho sakte hain — crash hone se bacha leta hai
 */

console.log(user?.address?.city); // "Bhopal"

// Agar address exist na karta:
let user2 = { name: "test" };
console.log(user2?.address?.city); // undefined (error nahi aaya)
// console.log(user2.address.city); // ye ERROR deta — address hi nahi hai


/* ============================================================
 * 8. COMPUTED PROPERTY NAMES
 * ============================================================ */

/*
 * Jab object banate waqt key ka naam DYNAMIC chahiye
 * (variable se aa rahi ho), tab square brackets [ ] use karo key mein
 */

let fieldName = "score";
let dynamicObj = {
    [fieldName]: 100 // key ka naam 'fieldName' variable ki value banegi
};
console.log(dynamicObj); // { score: 100 }

// Agar [ ] nahi lagate toh key literally "fieldName" ban jaati,
// uski value nahi uthati


/* ============================================================
 * PRACTICE QUESTIONS
 * ============================================================ */

// Q1. Student object banao — name, age, isEnrolled
let student = {
    name: "garvit",
    age: 19,
    isEnrolled: true,
};
console.log(student);