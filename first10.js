// let burger = 500;
// let burger1 = true;
// if(burger >=500){
//     console.log("free coke");
// }
// else{
//     let coke = 30;
//     console.log('payment =', coke);
// }

let weight = 50;
let height = 1.7;
let heightSquare = Math.pow(height, 2);
let BMI = weight / heightSquare;
if(BMI <= 18.5 ){
    console.log("you are underweight, Your BMI =", BMI.toFixed(3));
}
else if(BMI <= 24.9){
    console.log('you are normal, Your BMI =', BMI.toFixed(3));
}
else if(BMI <= 29.9){
    console.log('you are overweight, Your BMI =', BMI.toFixed(3));
}
else{
    console.log(BMI.toFixed(3));
}

