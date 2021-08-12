
/* 

algorithm to convert an array of a 12 hour clock into a 24 hour clock array


let hourminuteArr = [ 1, 0, 'pm' ];

let hour = hourminuteArr[0];
const timeofday = hourminuteArr[2];


//if it's pm and it's between 1 and 12 add 12 to the hour
if(hour>=1 && hour<12 && timeofday=="pm"){
    hour = hour+12; 
}
else if(hour>=12 && timeofday=='am'){
    hour = hour-12
}


*/


//function that takes in a 12-hour clock array [1,30,"pm"], and returns a 24 hour clock array [13,30];
const convertTwentyFour = (arr)=>{

    let hour = arr[0];
    const timeofday = arr[2];
    if(hour>=1 && hour<12 && timeofday=="pm"){
        hour = hour+12; 
    }
    else if(hour>=12 && timeofday=='am'){
        hour = hour-12
    }
    return [hour, arr[1]]
}


module.exports = convertTwentyFour; 