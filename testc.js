

//algorithm to extract the hour and minutes from a string in format "1:30pm"

/*
let time = "1:30pm";

//split the time string by : 
let arr = time.split(':');

//extract am or pm into a new index
arr[2] = arr[1].substr(arr[1].length/2, 2);


//convert the hour to a number
arr[0] = parseInt(arr[0]);

//convert the minutes and remove the am/pm of string
arr[1] = parseInt(arr[1].match(/[0-9*]/)[0]);

*/


//function that inputs a string time "1:00am" and returns an array [1, 0, "am"] for hour and minute in integers
const getHourMinutes = (string)=>{
    let arr = string.split(':');
    arr[2] = arr[1].substr(arr[1].length/2, 2);
    arr[0] = parseInt(arr[0]);
    arr[1] = parseInt(arr[1].match(/[0-9]*/)[0]);
    return arr; 
}

module.exports = getHourMinutes; 

