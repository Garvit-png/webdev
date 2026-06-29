/*
 * ============================================================
 *              JAVASCRIPT - OPERATORS
 * ============================================================
 * Operators ka kaam hai mathematical aur logical
 * operations ko execute karna
 * ============================================================
 */


/* ============================================================
 * 1. TYPES OF OPERATORS — Quick Overview
 * ============================================================

   Arithmetic   ->  + - * / % **
   Assignment   ->  =
   Comparison   ->  == === != !== < > <= >=
   Logical      ->  && ||
   Unary        ->  ! typeof
   Ternary      ->  ?:

 * ============================================================ */


/* ============================================================
 * 2. ARITHMETIC OPERATORS
 * ============================================================ */

// +   -> addition
// -   -> subtraction
// *   -> multiplication
// /   -> division
// %   -> modulus (remainder)
// **  -> exponentiation (power)


/* ============================================================
 * 3. ASSIGNMENT OPERATOR
 * ============================================================ */

// = -> right side ki value left side mein assign karta hai
// let a = 12; // 12 ko a mein assign kiya


/* ============================================================
 * 4. COMPARISON OPERATORS
 * ============================================================ */

// ==   -> sirf value compare karta hai (type ignore karta hai)
// ===  -> value AND type dono compare karta hai (strict — use this)
// !=   -> not equal (value only)
// !==  -> not equal (value + type, strict)
// <    -> less than
// >    -> greater than
// <=   -> less than or equal to
// >=   -> greater than or equal to


/* ============================================================
 * 5. LOGICAL OPERATORS
 * ============================================================ */

// &&  -> AND — dono true hone chahiye
// ||  -> OR  — ek bhi true ho toh chalega


/* ============================================================
 * 6. TERNARY OPERATOR
 * ============================================================ */

// Syntax: condition ? true hone pe yeh : false hone pe yeh

12 > 13 ? console.log(true) : console.log(false);
// 12 > 13 false hai, toh console mein false print hoga


/* ============================================================
 * 7. TYPEOF OPERATOR
 * ============================================================ */

// typeof — variable ka data type batata hai

console.log(typeof 12);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"


/* ============================================================
 * 8. TYPEOF QUIRKS — Yaad Rakhna Zaroori Hai ⚠️
 * ============================================================ */

/*
 * typeof kuch cases mein GALAT answer deta hai:
 *
 *   typeof null       -> "object"   ❌ (null object nahi hai, ye JS ka bug hai)
 *   typeof []         -> "object"   ❌ (array hai, object nahi)
 *   typeof NaN        -> "number"   ❌ (NaN "Not a Number" hai, phir bhi number batata hai)
 *
 * Ye JS ke historical bugs hain — fix nahi hue kyunki
 * bahut saara purana code inpe depend karta hai
 */


/* ============================================================
 * 9. INSTANCEOF — typeof ka solution for Reference Types
 * ============================================================ */

/*
 * instanceof check karta hai ki koi value
 * kisi specific Reference Type ka instance hai ya nahi
 *
 * IMPORTANT: instanceof sirf REFERENCE TYPES ke saath kaam karta hai
 *            (Array, Object, Function etc.)
 *            Primitives ke saath kaam NAHI karta
 */

let a = [];
console.log(a instanceof Array);   // true  ✅
console.log(a instanceof Object);  // true  ✅ (arrays objects bhi hote hain JS mein)

let b = {};
console.log(b instanceof Object);  // true  ✅
console.log(b instanceof Array);   // false ✅

// Primitive ke saath instanceof kaam nahi karta:
let c = 12;
console.log(c instanceof Number);  // false ❌
// kyunki 12 ek primitive hai, Number object nahi
// instanceof hamesha REFERENCE TYPES ke saath use hota hai