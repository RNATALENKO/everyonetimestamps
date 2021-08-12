
/*


alrorthim for extracting the month and the day out of a string

let jobdate = "wed 8/11/21";

//split string by the slash into an array
let arr = jobdate.split('/');

//remove the last value of the array
arr.pop(arr.length-1);

//convert first arr value to a number
arr[0] = arr[0].match(/[1-9*]/)[0];

//store the two values in a new var after converting them to ints
arr[0] = parseInt(arr[0]);
arr[1] = parseInt(arr[1]);


*/



//function of the above algortithm, inputs string date "wed 8/11/21", returns [8,11] integers arary
const getMonthDay = (string)=>{
    let arr = string.split('/');
    arr.pop(arr.length-1);
    arr[0] = arr[0].match(/[1-9*]/)[0];
    arr[0] = parseInt(arr[0]);
    arr[1] = parseInt(arr[1]);
    return arr; 
}

module.exports = getMonthDay; 