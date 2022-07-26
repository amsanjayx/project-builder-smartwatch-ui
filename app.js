var updateTime = setInterval(showTimeDay, 100);

showTimeDay();

function showTimeDay() {
  var today = new Date();
  if(today.getHours()<10){
    var time = "0"+today.getHours() + ":" + today.getMinutes();
  }
  if(today.getMinutes()<10){
    var time = today.getHours() + ":" + "0"+today.getMinutes();
  }
  if(today.getHours()>9 && today.getMinutes()>9)
    var time = today.getHours() + ":" + today.getMinutes(); 

  document.getElementById("top-time").innerHTML = time;

  document.getElementById("time").innerHTML = time; 

  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; 
  document.getElementById("day").innerHTML = weekDays[today.getDay()]; 
}
