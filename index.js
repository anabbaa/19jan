
//1


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
