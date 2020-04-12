// declare global variables
var time = moment().format("dddd, MMMM Do")
var dateElement = document.getElementById("currentDay")
dateElement.textContent = time
var timeCurrentHour = moment().hour()
var middleElement = document.getElementById("time1a")
var timeCount = 9
var keysTime = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM", "4PM", "5PM"]

// declare function that determines color coding of rows depending on time of day
var colorPicker = function (timeOfRow, middleElement) {
  if (timeCurrentHour > timeOfRow){
    middleElement.classList.add("list-group-item-secondary")
  } else if (timeCurrentHour === timeOfRow) {
    middleElement.classList.add("list-group-item-danger")
  } else {
    middleElement.classList.add("list-group-item-success")
  }
}

// for loop that populates table with saved values and updates color of rows
  for (var i = 0; i < 9; i++) {
  var j = i+1
  idMiddleElement = "time" + j + "a"
  idMiddleElementPound = "#" + idMiddleElement
  middleElement = document.getElementById(idMiddleElement)
  colorPicker(timeCount,middleElement)
  timeCount = timeCount +1  
  var storageItem = localStorage.getItem(keysTime[i])
$(idMiddleElementPound).val(storageItem)
}




// event listeners that listen for when the save button is picked and then storing in local storage
$("#button1").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time1a")
    .val()
    .trim();
  localStorage.setItem(keysTime[0],toDoTask)
})

$("#button2").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time2a")
    .val()
    .trim();
  localStorage.setItem(keysTime[1],toDoTask)
  })

$("#button3").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time3a")
    .val()
    .trim();
  localStorage.setItem(keysTime[2],toDoTask)
  })

$("#button4").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time4a")
    .val()
    .trim();
  localStorage.setItem(keysTime[3],toDoTask)
})

$("#button5").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time5a")
    .val()
    .trim();
  localStorage.setItem(keysTime[4],toDoTask)
})

$("#button6").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time6a")
    .val()
    .trim();
  localStorage.setItem(keysTime[5],toDoTask)
})

$("#button7").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time7a")
    .val()
    .trim();
  localStorage.setItem(keysTime[6],toDoTask)
})

$("#button8").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time8a")
    .val()
    .trim();
  localStorage.setItem(keysTime[7],toDoTask)
})

$("#button9").on("click", function(event) {
  event.preventDefault();
  var toDoTask = $("#time9a")
    .val()
    .trim();
  localStorage.setItem(keysTime[8],toDoTask)
})