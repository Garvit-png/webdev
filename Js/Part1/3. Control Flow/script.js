/*
 * ============================================================
 *         JAVASCRIPT - CONDITIONALS & PATTERNS
 *         if / else / else if / switch / early return
 * ============================================================
 */


/* ============================================================
 * 1. IF / ELSE IF / ELSE
 * ============================================================ */

/*
 * Syntax:
 *
 *   if (condition) {
 *       // condition true hone pe
 *   } else if (anotherCondition) {
 *       // pehli false, doosri true hone pe
 *   } else {
 *       // sab false hone pe
 *   }
 */


/* ============================================================
 * 2. SWITCH CASE
 * ============================================================ */

/*
 * Jab ek hi variable ke multiple exact values check karni ho
 * toh switch use karo — if/else se cleaner lagta hai
 *
 * IMPORTANT: har case ke end mein break lagana zaroori hai
 *            warna neeche wale cases bhi execute hote rahenge
 *            (ise "fall-through" kehte hain)
 */

switch (3) {
    case 1:
        console.log("Value is 1");
        break; // yahan ruko, neeche mat jao

    case 2:
        console.log("Value is 2");
        break;

    case 3:
        console.log("Value is 3"); // yeh execute hoga
        break;

    default:
        // koi bhi case match nahi hua toh yahan aao
        // if/else ke else jaisa hai
        console.log("Koi match nahi mila");
}


/* ============================================================
 * 3. EARLY RETURN PATTERN
 * ============================================================ */

/*
 * Early return pattern = function mein condition true hote hi
 * return kar do, baaki code execute mat karo
 *
 * Faida:
 * - Nested if/else se bachte hain
 * - Code zyada readable aur clean hota hai
 * - Ek baar return ho gaya toh function wahan ruk jaata hai
 *
 * Normal way (nested):                Early return way (clean):
 * -----------------                   ------------------
 * if (a) {                            if (!a) return;
 *     if (b) {                        if (!b) return;
 *         // kaam karo               // kaam karo
 *     }
 * }
 */

function getGrade(score) {
    // har condition pe seedha return kar do — else ki zaroorat nahi
    // ek baar return hua toh function wahan ruk jaata hai

    if (score >= 90 && score <= 100) return "A";
    if (score >= 75 && score < 90)  return "B";
    if (score >= 60 && score < 75)  return "C";
    if (score >= 50 && score < 60)  return "D";
    if (score >= 40 && score < 50)  return "E";

    return "F"; // upar koi bhi condition match nahi hui toh F
}

console.log(getGrade(90)); // "A"
console.log(getGrade(76)); // "B"
console.log(getGrade(30)); // "F"