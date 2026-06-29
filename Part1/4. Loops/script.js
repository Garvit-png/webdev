// repeat krne ko loop kehte hai 

// 1 - 100
// for(let i=1 ; i<=100 ; i++){
//     console.log(i);
// }


// let i = 1;
// while(i <= 100){
//     //code
//     i++;
// }


// do - while loop -> mtlb ek bar toh pkka chalega 

// let i = 12
// do{
//     console.log(i)
//     i++

// }
// while(i<=10)






// for (let i = 1; i<102; i++){
//     console.log(i)
//     if (i==85){
//         break;
//     }
// }



// Questions -------------

// 1. Print numbers from 1 to 10 using a for loop

// let i = 1;
// for( i = 1; i<11; i++){
//     console.log(i)
// }





// 2. Print numbers from 10 to 1 using a while loop

// let i = 10;
// while (i>0){
//     console.log(i)
//     i--;
// }  





// 3. Print even numbers from 1 to 20 using a for loop 

// for (let i = 0;i<=20;i+=2){
//     console.log(i)
// }


// 4. Print odd numbers from 1 to 15 using a for loop.

for (let i = 1; i<=15;i+=2){
    console.log(i)
}


// 5. Print the multiplaction table of 5 

for ( let i = 0; i<=10;i++){
    console.log("5" + "*" + i + "=" + 5*i)
}


//6. Find the sum of numbrs from 1 to 100 using a loop 
let sum = 0
for (let i = 1; i<=100; i++){
    sum +=i
}
console.log(sum)



// 7. Print all the numbers between 1 to 50 that are divisible by 3

for (let i = 1;i<=50;i++){
    if (i%3==0){
        console.log(i)
    }
}



// 8. Ask the user for a number and print whether each number from 1 to that numeber is even or odd

let value = prompt("Enter a number")
for (let i = 0; i<=value; i++){
    if (i%2==0){
        console.log(i + " is even")
    }else{
        console.log(i + " is odd")
    }   
}


// 9. Count how many numbers between 1 to 100 are divisbly by both 3 and 5

let count = 0;
for (let i = 1;i<101;i++){
    if ((i%3===0) && (i%5===0)){
        count++
    }
}
console.log(count)









// 10. stop at first multiple of 7

for (let i = 1; i<=101; i++){
    if (i%7==0){
        break;
    }
    console.log(i)
}


