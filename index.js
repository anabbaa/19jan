
//1
const evowels = (str)=>{
    let result = "";
    let vowels = ["a, e, i, o, u"];
    
    let newv = vowels.split("");
    let counter = 0;
    for (let i=0; i< newv.length; i++)
    for (j=0; j< str.length; j++){
    if (newv[i] == str[j]){counter++}}
    return counter;
};
console.log(evowels("tis is a string"));


//2
const set = (arr)=>{
    let result = "";
    let current = [];
    for (let i=0; i< arr.length; i++){
        if (!current == arr[i]){result.push(arr[i]);}
    }
    return result;
};
console.log(set[1,6,7,8,7,1]);
