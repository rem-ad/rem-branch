/* var i,j,n=10;
console.log("\n");
for(i=1;i<=10;i++){
    //console.log("\n");
    console.log("*");
    for(j=1;j<=10;j++){
        console.log("*");
        console.log("\n");
        
    }
    //console.log("\n");
} */


/*  for (let i=0; i<10;i++){
     console.log(i);
 } */

 /* 
let val='\n';
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
         val= val + '* ';  
    }
    val+='\n';
}

console.log(val); */
/* 
let val="";
for( let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        val=val+'* ';
    }
    val=val+"\n";
}
console.log(val);
 */

let val="";
for( let i=5;i>1;i--){
    for(let j=10;j>i;j--){
        val=val+'* ';
    }
    val=val+"\n";
}
console.log(val);