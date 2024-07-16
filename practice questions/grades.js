alert("you will be assigning grades");
let fullName=prompt("enter name of student");
let marks=prompt("enter marks of", fullName);

if (marks<=100 && marks>=80){
    console.log(fullName, 'gets A grade.')
}
else if (marks<=89 && marks>=70){
    console.log(fullName, 'gets B grade.')
}
else if (marks<=69 && marks>=60){
    console.log(fullName, 'gets C grade.')
}
else if (marks<=59 && marks>=50){
    console.log(fullName, 'gets D grade.')
}
else if(marks<=49 && marks>=0){
    console.log(fullName, 'gets F grade.')
}