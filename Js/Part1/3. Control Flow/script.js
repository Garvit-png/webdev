//==============================if else else if switch case=============================
//=====================early return pattern=======================


switch (3){
    case 1:
        break
    case 2:
        break 

    default: 
}

// early return pattern 

// function getVal(val){
//     if (val<100) return 'A';
//     else if (val<75) return 'B';
//     else if 
// }




function getGrade(score){
    if (score>=90 && score<=100) return A;
    if (score>=75 && score<90) return B;
    if (score>=60 && score<75) return C;
    if (score>=50 && score<60) return D;
    if (score>=40 && score<50) return E;
    else return F;
}

console.log(getGrade(90));



