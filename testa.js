

const getMonthDay = require('./testb');
const getHourMinutes = require('./testc');
const convertTwentyFour = require('./testd');


/* THe algorithm to convert a date into a timestamp

   Date.UTC(year, month, day, hour, minute, second, millisecond)

   month is between 0 Jan, and 11 Dec
   day values: 1 to 31
   hour values: 0 to 23 (midnight to 11pm)
   minute values: 0 to 59 


let jobdate = "wed 8/11/21";
let jobtime = "1:30pm";

let date = new Date();

//get year date
let currentYear = date.getFullYear();
let month = getMonthDay(jobdate)[0]-1; //subtract 1 from month
let day = getMonthDay(jobdate)[1];
let hour = convertTwentyFour(getHourMinutes(jobtime))[0];
let minutes = convertTwentyFour(getHourMinutes(jobtime))[1];

let timestamp = Date.UTC(currentYear,month,day,hour,minutes);

*/



//this is the function that takes in a date in format "8/12/21", and a time in a 12 o clock format "1:00pm", and converts them to 24 hour clock then returns a time stimp
const createTimestamp = (dateString, timeString) => {
      let date = new Date();
      let currentYear = date.getFullYear(); //get today's year
      let month = getMonthDay(dateString)[0]-1; //subtract 1 from month, since UTC() starts january at 0
      let day = getMonthDay(dateString)[1]; 
      let hour = convertTwentyFour(getHourMinutes(timeString))[0];
      let minutes = convertTwentyFour(getHourMinutes(timeString))[1];
      return Date.UTC(currentYear,month,day,hour,minutes);
}

let earlierStamp = createTimestamp("wed 8/11/21", "1:00pm");
let laterStamp = createTimestamp("wed 8/11/21", "1:30pm");

if(earlierStamp < laterStamp){
   console.log('eureka!, The stamps can be sorted by date and time!');
}

