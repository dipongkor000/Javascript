
let weight = 50;
let height = 1.7;
let heightSquare = Math.pow(height, 2);
let BMI = weight / heightSquare;
if(BMI <= 18.5 ){
    console.log(BMI.toFixed(3));
    console.log("you are normal");
}
else if(BMI <= 24.9){
    console.log(BMI.toFixed(3));
    console.log('you are overweight');
}
else{
    console.log(BMI.toFixed(3));
    console.log('you are obese');
}