/*
 * ============================================================
 *         JAVASCRIPT FUNDAMENTALS - VARIABLES & DATA TYPES
 * ============================================================
 */


/* ============================================================
 * 1. VAR, LET, CONST - Comparison
 * ============================================================ */

/*
 * VAR
 * ----
 * - Window object mein add hota hai (global scope pollute karta hai)
 * - Function scoped hota hai (block scope nahi hota)
 * - Same name se dobara declare kar sakte ho — NO ERROR (bad practice)
 * - Hoisting mein undefined milta hai
 */

var a;        // sirf declaration
var a = 12;   // declaration + initialization
var a = 13;   // dobara declare — koi error nahi (ye cheez bug create karti hai)

/*
 * LET
 * ----
 * - Window object mein add NAHI hota
 * - Block scoped hota hai
 * - Same name se dobara declare karo — ERROR aayega (safer hai)
 * - Hoisting hoti hai lekin value access nahi kar sakte (Temporal Dead Zone)
 */

// let a = 12;
// let a = 13; // SyntaxError: Identifier 'a' has already been declared

/*
 * CONST
 * ------
 * - Block scoped
 * - Declare karte waqt initialize karna ZARURI hai
 * - Value reassign NAHI ho sakti
 */

const dulha = "laba";
const dulhan = "labby";
// dulha = "koi aur"; // TypeError: Assignment to constant variable


/* ============================================================
 * 2. SCOPE — Global, Block, Functional
 * ============================================================ */

var a = 12; // globally scoped — poore code mein accessible

{
    var a = 12;
    // var block scope nahi maanta
    // function nahi bana toh ye globally hi rahega
    // ISLIYE var ke saath scope issues aate hain — AVOID karo
}

{
    let b = 12;
    // let block scoped hai — is block ke bahar accessible nahi hoga
}

function abcd() {
    if (true) {
        var c = 12;
        // var yahan function scoped hai — poore abcd() mein accessible hai
        // but block ke bahar (agar function na hota) toh globally jaata
    }
}


/* ============================================================
 * 3. TEMPORAL DEAD ZONE (TDZ)
 * ============================================================ */

/*
 * TDZ = woh area jahan JS ko pata hai ki variable exist karta hai
 * lekin uski value abhi accessible nahi hai
 *
 * let aur const TDZ mein hote hain declaration se pehle
 * var mein TDZ nahi hota — undefined milta hai
 */

// console.log(naam); // ReferenceError — TDZ mein hai abhi
let naam = "garvit"; // ab accessible hai


/* ============================================================
 * 4. HOISTING
 * ============================================================ */

/*
 * Hoisting = JS code run karne se pehle variables aur functions
 * ko upar le jaati hai (mentally sochne ka tarika)
 *
 * Internally var ka sirf DECLARATION upar jaata hai, initialization nahi:
 *
 *   var a = 12;
 *   JS ise aisa padtha hai:
 *       var a = undefined;  // upar
 *       a = 12;             // niche
 *
 * Summary:
 *   var   -> hoist hota hai -> undefined milta hai
 *   let   -> hoist hota hai -> TDZ mein rehta hai (access nahi)
 *   const -> hoist hota hai -> TDZ mein rehta hai (access nahi)
 */

var a = 12;
// internally:
// var a = undefined; // declaration upar
// a = 12;            // initialization niche


/* ============================================================
 * 5. DATA TYPES — Primitive vs Reference
 * ============================================================ */

/*
 * PRIMITIVE TYPES — No brackets, direct value store hoti hai
 * ---------
 *   Number     -> 12
 *   Boolean    -> true / false
 *   String     -> "harsh"
 *   null       -> jaan boojhkar koi value nahi di
 *   undefined  -> variable banaya, value nahi di
 *   NaN        -> Not a Number (invalid math operation)
 *   Symbol     -> unique immutable value
 *   BigInt     -> bahut bade numbers ke liye
 *
 * Primitive copy karne pe REAL copy milti hai:
 *   let a = 12;
 *   let b = a;
 *   // a aur b ab alag hain — ek ko change karo, doosra nahi badlega
 *   // a ki mummy ne 12 ko PS5 dilaya, b ke 12 ko thodi dilaya 😄
 */

/*
 * REFERENCE TYPES — Brackets aate hain, memory address store hota hai
 * ---------
 *   Array  -> []
 *   Object -> {}
 *   Function -> ()
 *
 * Reference copy karne pe ORIGINAL ka address milta hai, real copy nahi:
 *   Meri gaadi aaj se tumhari bhi hai —
 *   tumne gaadi todi, meri bhi todi 😅
 */

let array1 = [1, 2, 3];
let array2 = array1;
// array2 copy nahi hai — dono same memory address point kar rahe hain
// array1[0] = 99 karo — array2[0] bhi 99 ho jayega


/* ============================================================
 * 6. STRINGS — Quote Types
 * ============================================================ */

// ''  -> Single quotes
// ""  -> Double quotes
// ``  -> Backticks (Template literals) — variables embed kar sakte ho


/* ============================================================
 * 7. NULL vs UNDEFINED
 * ============================================================ */

// NULL — jaan boojhkar koi value nahi di, baad mein dene ka plan hai
let selectedStudents = null; // abhi koi value nahi, aage milegi

// UNDEFINED — variable banaya lekin value di hi nahi
let username;
console.log(username); // undefined


/* ============================================================
 * 8. SYMBOL
 * ============================================================ */

/*
 * Symbol — unique aur immutable value create karta hai
 *
 * Use case:
 * Jab kisi library ka use karo aur uske fields ke naam tumhare
 * variable names se clash ho jayein — Symbol se unique keys banao
 * taaki original library ka koi field accidentally overwrite na ho
 *
 * Remote diya, khud ka power button chipka diya 😄
 */

let u1 = Symbol("uid");
let u2 = Symbol("uid");
console.log(u1 === u2); // false — dono alag hain, same name hone ke bawajood


/* ============================================================
 * 9. DYNAMIC TYPING
 * ============================================================ */

/*
 * JS mein static typing nahi hai — dynamic typing hai
 *
 * Static (Java/C++): int a = 12; → ab a sirf number rahega
 * Dynamic (JS):      let a = 12; → a = true bhi kar sakte ho
 *
 * Ye flexibility deta hai lekin bugs bhi la sakta hai
 */

let x = 12;
x = true;   // valid in JS
x = "hello"; // ye bhi valid hai


/* ============================================================
 * 10. TYPE COERCION
 * ============================================================ */

/*
 * Type Coercion = JS automatically ek type ko doosre mein convert kar deta hai
 *
 * JS Quirks (yaad rakhna zaroori hai):
 *   "" + ""    = ""       (string concatenation)
 *   1 + "2"    = "12"     (number string bann gaya)
 *   1 - "2"    = -1       (string number bann gaya)
 *   true + 1   = 2
 *   null + 1   = 1
 *   undefined + 1 = NaN
 */


/* ============================================================
 * 11. TRUTHY vs FALSY VALUES
 * ============================================================ */

/*
 * JS mein har value truthy ya falsy hoti hai
 *
 * FALSY values (6 hi hain, yaad kar lo):
 *   0
 *   ""          (empty string)
 *   null
 *   undefined
 *   NaN
 *   document.all  (legacy browser quirk)
 *
 * Baaki sab TRUTHY hain — including "0", [], {}, -1
 */