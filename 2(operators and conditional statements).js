let a=10;
let b=5;
//arithmetic
console.log("a+b=",a+b);    //15
console.log("a-b=",a-b);//5
console.log("a*b=",a*b);//50
console.log("a/b=",a/b);//2
console.log("a%b=",a%b);//0
console.log("a**b=",a**b);//100000
a++;
console.log("a++=",a);//11
console.log("++a=",++a);//12
a--;
console.log("a--=",a);//11
console.log("--a=",--a);//10


//assignment
a+=b;
console.log("a+=b:",a);//15
a-=b;
console.log("a-=b:",a);//10
a*=b;
console.log("a*=b:",a);//50
a%=b;
console.log("a%=b:",a);//0

a**=b;
console.log("a**=b:",a);//0

//comparison 
a=10;
b=20;
console.log("is a==b:",a==b);//false
console.log("is a!=b:",a!=b);//true
//equal and type
console.log("is a===b:",a===b);//false
//not equal and type
console.log("is a!==b:",a!==b);//true
b="10";
console.log("is a==b:",a==b);//true
console.log("is a===b:",a===b);//false
b="20";
console.log("is a!=b:",a!=b);//true
console.log("is a!==b:",a!==b);//true

b=10;
console.log("is a==b:",a==b);//true
console.log("is a!=b:",a!=b);//false
console.log("is a===b:",a===b);//true
console.log("is a!==b:",a!==b);//false

a=20;
b=10;
console.log("is a>b:",a>b);
console.log("is a<b:",a<b);
console.log("is a>=b:",a>=b);
console.log("is a<=b:",a<=b);




//logical

let con1=a>b;
let con2=a==20;
console.log("con1 && con2 are both correct?",con1 && con2);
con2=a===10;
console.log("con1 || con2 OR correct?",con1 || con2);
console.log("con1 NOT EQUALS 10",!(a==10));
console.log("con1 NOT EQUALS 20",!(a==20));


//conditional if
let x=200;
if(x==100){
    console.log("x is 100");
}
else if(x==200){
    console.log("x is 200");
}
else{
    console.log("x is not 100");
}
console.log(x==100?"x is 100":"x is not 100");
console.log(x==200?"x is 200":"x is not 100");
