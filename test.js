
let {arr, createTimestamp }= require('./testa');


//pushing an earlier date into the array (to simulate injecting a new time into your schedule)
arr.push({
    timestamp:createTimestamp("8/1/21", "9:00am")
})

console.log(arr);


const sortTimes = (arr)=>{
    arr.sort((a,b)=>{
        if(a.timestamp < b.timestamp){
            return -1; 
        }
        else{
            return 1;
        }
    }) 

    return arr; 
}


const sortedArr = sortTimes(arr);
console.log(sortedArr);