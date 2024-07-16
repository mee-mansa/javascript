//function to take a string and return no of vowels
let str="this is a javaSCript function";
console.log(str);
str=str.toLowerCase();
console.log(str);
let countVowel=0;
function vowels(){
   

    for (let char of str){
        if (char =="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            countVowel+=1;
        }
    
    };
    console.log("the number of vowels in this string are:",countVowel)
};
vowels();

//by arrow function
let arrowCount=0;
const vowel=(str)=>{
    for(let char of str){
        if (char =="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            arrowCount+=1;
    }
    
};
console.log("the number of vowels in this string are:",arrowCount)};
vowel(str);
