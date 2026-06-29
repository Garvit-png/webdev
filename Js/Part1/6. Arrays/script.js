let marks = [10,40,54,32,75]

console.log(marks[2])

marks[2]=100;


let array=[1,2,3,4,5];
//========push
array.push(7000); // array ke piche add krdega 
console.log(array)

//========pop

array.pop(); // array ke piche se value hta dega
console.log(array)

//=======shift

array.shift() // shuru se value hta deta hai 
console.log(array)

//======unshift 

array.unshift("pehli value")
console.log(array)

//=====splice 

array.splice(2,1) // 2 index se leke kitni value htani hai 

//======slice 

let newArray= array.slice(0,3) // yeh new variable mein dega value 
console.log(newArray)

//===reverse

array.reverse() //copy nahi bnata, main array ko change krdega


//====sort

let sr = array.sort(function(a,b){
    return a-b;
})

console.log(sr)

// ===========================
let rs = array.sort(function(a,b){
    return b-a; //syntax hai , ese hi yaad rkhna hoga 
})

console.log(rs)




//======================forEach=====================

let arr1 = [11,62,3,4,25];

arr1.forEach(function(val){ // arr1 ke hr ek element pe chlega ye , 11 aayega val ki jagah isi tareeke se chlega yeh

    console.log(val+5) // sari values ek ek krke print krdega
    

})


//====================map=======

//Mpa sirf tab use krna hai jab aapko ek naya array banana hai picchle array ke data ke basis par

// map dikhte saath hi ek black array bna liya kro 

let MapArr= arr1.map(function(val){
    return 12;
})


console.log(MapArr)


