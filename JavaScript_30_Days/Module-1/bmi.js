//Input data form terminal..

const weight = process.argv[2];
const height = process.argv[3];

function calcuateBmi(weight,height){
    const bmi = weight / (height * height);
    return bmi;
}
console.log(calcuateBmi(weight,height));