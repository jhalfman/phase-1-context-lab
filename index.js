/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    const newEmployee = {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
    return newEmployee;
  }
  
  function createEmployeeRecords(employeeArray){
    const newEmployees = employeeArray.map(createEmployeeRecord);
    return newEmployees;
  }
  
  function createTimeInEvent(date){
    const dateParse = date.split(" ");
    const dateStamp = {
      type: "TimeIn",
      hour: parseInt(dateParse[1]),
      date: dateParse[0]
    };
    this.timeInEvents.push(dateStamp);
    return this;
  }
  
  function createTimeOutEvent(date){
    const dateParse = date.split(" ");
    const dateStamp = {
      type: "TimeOut",
      hour: parseInt(dateParse[1]),
      date: dateParse[0]
    };
    this.timeOutEvents.push(dateStamp);
    return this;
  }
  
  function hoursWorkedOnDate(dateCheck) {
    let startTime = 0;
    let endTime = 0;
    this.timeInEvents.forEach(workDay => {
      if (workDay.date === dateCheck) {
        startTime = workDay.hour;
      }
    })
    this.timeOutEvents.forEach(workDay => {
      if (workDay.date === dateCheck) {
        endTime = workDay.hour;
      }
    })
    return (endTime - startTime)/100;
  }
  
  function wagesEarnedOnDate(dateCheck) {
    return hoursWorkedOnDate.call(this, dateCheck) * this.payPerHour
  }
  
//   function allWagesFor() {
//     const context = this;
//     const listOfDatesWorked = [];
//     this.timeInEvents.forEach(timeIn => listOfDatesWorked.push(timeIn.date));
//     return listOfDatesWorked.reduce(function(count, currentDate) {
//       return wagesEarnedOnDate.call(context, currentDate) + count;
//     }, 0)
//   }

   const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })


    const payable = eligibleDates.reduce(function (memo, d) {
       
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
    return payable
}
  
  function findEmployeeByFirstName(srcArray, firstName) {
    
   return srcArray.find(employee => {
       return employee.firstName === firstName;
   })
   
   
  }
    // for (const employee in srcArray) {
    //   if (employee.firstName === firstName) {
    //     console.log("found " + firstName);
    //     console.log(employee);
    //     return employee;
    //   }
    //   else {
    //     return undefined;
    //   }
    // }
    
  
  
  function calculatePayroll(employeeRecordsArray) {
      
    const totalWage = employeeRecordsArray.reduce(function (count, currentEmployee) {
        
      return allWagesFor.call(currentEmployee) + count;
    }, 0)
  
    return totalWage - 1200;
  }
//   0
// 1260
// 1260
// 1155
// 2415
// 3750
// 6165
// 240
// 6405
// 4875
// 11280
// 1800
// 13080
//   const [jordan, mickey] = createEmployeeRecords([["Jordan", "Halfman", "Scientist", 34], ["Mickey", "Mouse", "Disney Mouse", 100]])
  
//   createTimeInEvent.call(jordan, "12-25-2022 0800")
//   createTimeOutEvent.call(jordan, "12-25-2022 1600")
  
//   createTimeInEvent.call(mickey, "12-03-2021 0400")
//   createTimeOutEvent.call(mickey, "12-03-2021 1400")
  
//   createTimeInEvent.call(jordan, "12-30-2022 1200")
 // createTimeOutEvent.call(jordan, "12-30-2022 2200")
  
  //console.log(jordan)
  //console.log(wagesEarnedOnDate.call(jordan, "12-30-2022"))
  
  //console.log(allWagesFor.call(jordan))
  
  //findEmployeeByFirstName([jordan, mickey], "Mickey")
  
  //console.log(calculatePayroll([jordan, mickey]))
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



