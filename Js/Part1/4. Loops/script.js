/*
 * ============================================================
 *                  JAVASCRIPT - LOOPS
 * ============================================================
 * Repeat karne ko loop kehte hain
 * Jab ek kaam baar baar karna ho — loop use karo
 * ============================================================
 */


/* ============================================================
 * 1. FOR LOOP
 * ============================================================ */

/*
 * Syntax:
 *   for (initialization ; condition ; increment/decrement) {
 *       // code
 *   }
 *
 * Jab pata ho kitni baar loop chalana hai — for use karo
 */

// Example: 1 se 100 tak print karo
for (let i = 1; i <= 100; i++) {
    console.log(i);
}


/* ============================================================
 * 2. WHILE LOOP
 * ============================================================ */

/*
 * Syntax:
 *   while (condition) {
 *       // code
 *       // increment/decrement — warna infinite loop
 *   }
 *
 * Jab pata na ho kitni baar chalana hai — while use karo
 * Pehle condition check hoti hai, phir code chalta hai
 */

// Example: 1 se 100 tak print karo
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}


/* ============================================================
 * 3. DO-WHILE LOOP
 * ============================================================ */

/*
 * Syntax:
 *   do {
 *       // code
 *   } while (condition);
 *
 * Pehle code chalta hai, phir condition check hoti hai
 * Matlab — ek baar toh pakka chalega, chahe condition false ho
 */

// Example: i = 12 hai, condition i<=10 hai — phir bhi ek baar chalega
let j = 12;
do {
    console.log(j); // 12 print hoga — condition false hone ke bawajood
    j++;
} while (j <= 10);
// condition false thi toh sirf ek baar chala aur ruk gaya


/* ============================================================
 * 4. BREAK — Loop ke beech mein rokna
 * ============================================================ */

/*
 * break — loop ko condition poori hone se pehle rok deta hai
 */

// Example: 85 pe aa jao toh ruk jao
for (let i = 1; i < 102; i++) {
    if (i == 85) {
        break; // 85 aate hi loop band
    }
    console.log(i);
}


/* ============================================================
 * PRACTICE QUESTIONS
 * ============================================================ */


// Q1. Print numbers from 1 to 10 using a for loop
for (let i = 1; i < 11; i++) {
    console.log(i);
}


// Q2. Print numbers from 10 to 1 using a while loop
let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}


// Q3. Print even numbers from 1 to 20 using a for loop
// i = 0 se shuru, har baar 2 badhao — sirf even numbers aayenge
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}


// Q4. Print odd numbers from 1 to 15 using a for loop
// i = 1 se shuru, har baar 2 badhao — sirf odd numbers aayenge
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}


// Q5. Print the multiplication table of 5
for (let i = 0; i <= 10; i++) {
    console.log("5 * " + i + " = " + 5 * i);
}


// Q6. Find the sum of numbers from 1 to 100
// har iteration mein sum mein i add karte jao
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i; // sum = sum + i
}
console.log("Sum:", sum); // 5050


// Q7. Print all numbers between 1 to 50 that are divisible by 3
// modulus (%) use karo — agar remainder 0 hai toh divisible hai
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}


// Q8. User se number lo, 1 se us number tak even/odd batao
// prompt() browser mein input box kholta hai
// NOTE: prompt string return karta hai — JS yahan auto coerce karega number mein
let value = prompt("Enter a number");
for (let i = 1; i <= value; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


// Q9. Count karo kitne numbers 1 to 100 mein 3 aur 5 dono se divisible hain
// && use karo — dono conditions ek saath true honi chahiye
let count = 0;
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        count++; // condition match hui toh count badhao
    }
}
console.log("Count:", count); // 6 (15, 30, 45, 60, 75, 90)


// Q10. 1 se 101 tak chalo, pehla multiple of 7 milte hi ruk jao
// break use karo — pehla multiple milte hi loop band
for (let i = 1; i <= 101; i++) {
    if (i % 7 == 0) {
        console.log("Pehla multiple of 7:", i); // 7
        break;
    }
    console.log(i);
}