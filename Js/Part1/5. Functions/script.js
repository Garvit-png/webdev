/*
 * ============================================================
 *                  JAVASCRIPT - FUNCTIONS
 * ============================================================
 */


/* ============================================================
 * 1. FUNCTION BANANA KE 3 TARIKE
 * ============================================================ */

// ---- 1. Function Declaration (Statement) ----
function dance() {
    console.log("dance");
    console.log("dance");
}
dance();

// ---- 2. Function Expression ----
// function ko variable mein store kar rahe hain
let fnc = function () {
    console.log("dance");
    console.log("dance");
};
fnc();

// ---- 3. Arrow Function (Fat Arrow) ----
// () = fat brackets, => = arrow
// Modern JS ka clean syntax
let futc = () => {
    console.log("dance");
    console.log("dance");
};
futc();


/* ============================================================
 * 2. PARAMETERS & ARGUMENTS
 * ============================================================ */

// parameter = function define karte waqt jo variable likhte ho (name)
// argument  = function call karte waqt jo actual value bhejte ho ("Garvit")

function nchwao(name) {
    console.log(name + " naach raha hai");
}
nchwao(prompt("Enter a name")); // prompt se user input leke seedha bhej diya


/* ============================================================
 * 3. DEFAULT PARAMETERS
 * ============================================================ */

/*
 * Agar function call karo bina argument ke toh undefined milta hai
 * Default parameter set karo — woh tab use hoga jab argument na diya ho
 */

function hellow(b1 = 1, b2 = 1) {
    console.log(b1 + b2);
}

hellow();       // 1 + 1 = 2  (default values use hui)
hellow(3, 43);  // 3 + 43 = 46 (passed values use hui)


/* ============================================================
 * 4. REST PARAMETER ( ...val )
 * ============================================================ */

/*
 * Jab arguments kitne bhi ho sakte hain — tab rest use karo
 * ...val = saare extra arguments ek array mein aa jaate hain
 *
 * YAAD RAKHNA:
 *   ...val function ke parameter mein  -> REST   (collect karta hai)
 *   ...val array/object ke saath       -> SPREAD (failaata hai)
 */

function abcd(...val) {
    console.log(val); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Mixed example — pehle fixed params, phir rest
// function abcd(a, b, c, ...val) { } -> a, b, c fixed + baaki sab val mein


/* ============================================================
 * 5. RETURN
 * ============================================================ */

/*
 * return = "jahan se aaye ho wahan daal denge"
 * function ki value bahar nikalti hai return se
 * return ke baad function ruk jaata hai
 */

function abcde(v) {
    return 12 + v; // value return hogi
}

let aankda = abcde(43);
console.log(aankda); // 55


/* ============================================================
 * 6. FIRST CLASS FUNCTIONS
 * ============================================================ */

/*
 * JS mein functions "first class citizens" hain
 * Matlab functions ko exactly variables ki tarah treat kar sakte hain:
 *
 *   - Variable mein store kar sakte ho
 *   - Argument ke roop mein bhej sakte ho
 *   - Doosre function se return kar sakte ho
 */


/* ============================================================
 * 7. HIGHER ORDER FUNCTIONS (HOF)
 * ============================================================ */

/*
 * HOF = woh function jo:
 *   (a) doosre function ko PARAMETER mein accept kare, YA
 *   (b) doosre function ko RETURN kare
 */

// ---- HOF jo function accept karta hai ----
function abcd2(val) {
    // val ek function hai
}
abcd2(function () { });

// ---- HOF jo function return karta hai ----
function helloww() {
    return function () {
        console.log("returned function chali");
    };
}
helloww()(); // pehle helloww() call karo, phir returned function call karo


/* ============================================================
 * 8. PURE vs IMPURE FUNCTIONS
 * ============================================================ */

/*
 * PURE FUNCTION:
 *   - Bahar ki koi value nahi badalta
 *   - Same input pe hamesha same output deta hai
 *   - Side effects nahi hote
 */

function abcdef() {
    console.log("hello"); // sirf print kar raha hai, kuch badal nahi raha
}

/*
 * IMPURE FUNCTION:
 *   - Bahar ki value badalta hai (side effect)
 *   - Predictable nahi hota
 */

let a = 14;
function abcdefg() {
    console.log(a);
    a++; // bahar ke variable 'a' ko badal raha hai — IMPURE
}


/* ============================================================
 * 9. CLOSURES
 * ============================================================ */

/*
 * Closure = ek function jo return kare ek aur function,
 * aur woh returned function hamesha apne PARENT function
 * ke variables access kar sakta hai — chahe parent kab ka
 * execute ho chuka ho
 */

function abcdefgh() {
    let a = 12; // parent ka variable
    return function () {
        console.log(a); // parent ka 'a' yahan bhi accessible hai — CLOSURE
    };
}

let closureFn = abcdefgh();
closureFn(); // 12 — parent function khatam ho gaya phir bhi 'a' yaad hai


/* ============================================================
 * 10. LEXICAL SCOPING
 * ============================================================ */

/*
 * Lexical Scoping = variable apne aas paas ke code (parent) ko
 * access kar sakta hai, bahar wale nahi kar sakte andar ka
 *
 * Rule: andar wala bahar dekh sakta hai, bahar wala andar nahi
 */

function abcdefghi() {
    let a = 12; // poore abcdefghi mein accessible

    function defg() {
        let b = 13; // sirf defg aur uske andar accessible
        // 'a' yahan bhi accessible hai (parent se)

        function ghif() {
            let c = 14; // sirf ghif ke andar
            // 'a' aur 'b' dono accessible hain yahan
        }
    }
    // 'b' aur 'c' yahan accessible NAHI hain
}


/* ============================================================
 * 11. IIFE (Immediately Invoked Function Expression)
 * ============================================================ */

/*
 * IIFE = function banao aur turant call bhi kar lo
 * Global scope pollute nahi hota — variables andar hi rahte hain
 *
 * Syntax: (function(){ })()
 *          ^— function   ^— turant call
 */

(function () {
    console.log("IIFE chali — turant execute ho gayi");
})();


/* ============================================================
 * 12. HOISTING — Functions mein
 * ============================================================ */

/*
 * Function Declaration -> HOIST HOTI HAI
 *   Matlab pehle call kar sakte ho, baad mein define karo — kaam karega
 *
 * Function Expression -> HOIST NAHI HOTI
 *   Pehle call karo toh ERROR aayega
 */

// Function Declaration — pehle call, baad mein define — WORKS ✅
garvit();
function garvit() {
    console.log("hello world");
}

// Function Expression — pehle call — ERROR ❌
// GarvitGandhi(); // TypeError: GarvitGandhi is not a function
let GarvitGandhi = function () {
    console.log("hey");
};


/* ============================================================
 * PRACTICE QUESTIONS
 * ============================================================ */


// Q1. Rest parameter se scores lo, total return karo
function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total += val; // scores nahi, val add karna hai (fix: tera bug tha yahan)
    });
    return total;
}
console.log(getScore(10, 20, 304, 40, 60, 70, 40, 20, 20, 20)); // 604


// Q2. Early return — age check
function checkAge(age) {
    if (age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(23)); // "Allowed"
console.log(checkAge(15)); // "Too young"


// Q3. BMI Calculator
function BMI_Calc(weight, height) {
    return (weight / (height * height));
}
console.log(BMI_Calc(prompt("Enter your weight (kg)"), prompt("Enter your height (m)")));


// Q4. Reusable Discount Calculator (HOF)
/*
 * HOF example:
 * discountCalculator(10) -> ek naya function return hoga jo 10% discount lagayega
 * us returned function ko price bhejo -> discounted price milegi
 *
 * Ek baar discount fix karo, baar baar alag prices pe use karo
 */

function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}

let ten = discountCalculator(10);    // 10% discount wala function ready
let twenty = discountCalculator(20); // 20% discount wala function ready

console.log(ten(1000));    // 900  (10% off)
console.log(twenty(1000)); // 800  (20% off)