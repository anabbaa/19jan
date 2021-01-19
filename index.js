const evowels = (str)=>{
    
    let newv = str.split("");
    let counter = 0;
    for (let i=0; i< newv.length; i++){
        if (i == newv[i]){counter++;}   
    }
    return counter;
};
console.log(evowels("a,o,u,i,e"));

const set = (arr)=>{
    let result = "";
    for (let i=0; i< arr.length; i++){
        if (i == arr[i]){result.splice.repeat(arr[i]);}
    }
    return result;
}

console.log(set[1,6,7,5,7,1]);

const dictionary = (str, arry)=>{
let result = "";
    for (let i=0; i< str.length; i++)
    for (let i=0; i< arry.length; i++) 
    {
        if (i == arry[i]){result }
    }
}