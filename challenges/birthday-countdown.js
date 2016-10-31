/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/
1478764800000


// YOUR CODE HERE

var testArr = [
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ];

  //((milliseconds / (1000*60*60*24)) % 7) from Stackoverflow
function convertMillSecToDays(millSec){
  return millSec / (1000*60*60*24)
}

function daysUntilDate(strDate) {
  var todayInMillSec = Date.now();
  var targerDate = Date.parse(strDate);
  var millSecUntil = targerDate - todayInMillSec;
  return Math.floor(convertMillSecToDays(millSecUntil));
}


function birthdayReminder(arr) {
  var messages = [];
  for(var i = 0; i < arr.length; i++) {
    var birthday = daysUntilDate(arr[i].dob)
    console.log(arr[i].dob);
    messages.push(arr[i].name + "'s birthday id in " + birthday + " days")
  }
  console.log(messages);
  return messages;
}
