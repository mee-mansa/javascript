let marks=[45,67,78,56,67];
console.log(marks);
let n=marks.length;
console.log(n);
console.log(marks[2]);
marks[0]=34;//mutable
console.log(marks);



//loops in array

for(let x=0;x<n;x++){
    console.log(marks[x]);
}

//for of
for (let ma in marks){
    console.log(ma);
}