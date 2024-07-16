for(let i=0;i<=5;i++){
    console.log(i);}


let j=1;
do{
    console.log("j=",j);
    j++;
}while(j<=5);

//for of loop for strings and arrays

let str="hello world";
let length=0;
for (let s of str){
    console.log(s);
    length++;

}
console.log(length);

//for in loop for ibjects
let student={
    fullName:"rahul kumar",
    age:20,
    cgpa:8.2,
    isPass:true
};
for (let v in student){
    console.log(v);//returns the key of object
    console.log("key=",v,"value=",student[v])
}



//strings
let str1="hello";
console.log(str1,str1.length);
console.log(str1.length);
console.log(str1[1]);


//template literal

let sentence=`hello this is a template literal`;
let c=10;
let d=`i brought a pen for ${c} rupees.`;
console.log(sentence);
console.log(d);

//string manipulation
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.trim());
console.log(sentence.slice(2,8));
console.log(sentence.concat(d));
console.log(sentence.replace('h','t'));
console.log(sentence.replaceAll('h','t'));
console.log(sentence.charAt());
