let obj = {
    name: "garvit",
    age: 19,
    khaana: "omelete"
};

obj.age // dot ke sath access hota hai 

obj['khaana'] // bracket ke saath bhi access kr skte hai 




//=====example

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
}

// user.address.location.lng


// agr aap bar bar likh likh ke thk jaoge - toh

let {lat, lng} = user.address.location;

let obj = {
    name: "harsh",
    age: 25,
    email: "test@test.com"
}

for (let key in obj){
    // console.log(key);
    console.log(key,obj[key])
}

let obj2 = {...obj}

// jab aap object ko copy krte hai , and fir change krte hai , without nested wale , cahnge nahi hote, lekin jo nested wale hote hai , voh refernce pass krne lgte hai , that is agr change kro ge copy mein , toh original mein bhi change hone lg jayega



// iske sahi krne ke liye deep clone krna pdta hai 

let obj24 = JSON.parse( JSON.stringify(obj))

//==============



//optional changing 

obj?.address?.city // error prevent kr sakte hai //important ******

/// computed permissions - yeh smjha dena 




// questioins 



// create an object for a student with name, age and isEnrolled 

let obj = {
    name: "garvit",
    age: 19,
    isEnrolled: true,
}



