

function setDatas() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var num = leDiv[index].innerHTML.match(/\d+/g).join('/')
      var leHour = eval(num);
      var leDay = leHour * 24
      var splitBar = num.split('/')
      var totalDays = eval(splitBar[1]) / 24
      leDiv[index].setAttribute('data-lehour', leHour.toFixed(1))
      leDiv[index].setAttribute('data-leday', leDay.toFixed(0))
      leDiv[index].setAttribute('data-totaldays', totalDays)
   }
}

function deleteOld() {
   document.querySelectorAll('.hourly_LE').forEach(e => e.remove());
   document.querySelectorAll('.daily_LE').forEach(e => e.remove());
   document.querySelectorAll('.total_days').forEach(e => e.remove());
}

// Converts and add info to hourly LE
function addHourlyLE() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var leHour = leDiv[index].getAttribute('data-lehour');
      var div = document.createElement('div')
      div.innerHTML = leHour + '/Hour'
      div.setAttribute('class', 'hourly_LE')
      div.style.color = '#fff';
      div.style.border = '1px solid #ccc';
      div.style.borderRadius = '5px';
      div.style.padding = '3px'
      div.style.margin = '10px'
      div.style.textAlign = 'center'
      leDiv[index].before(div)
   }
}

function addDailyLE() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var leHour = leDiv[index].getAttribute('data-leday');
      var div = document.createElement('div')
      div.innerHTML = leHour + '/Day'
      div.setAttribute('class', 'daily_LE')
      div.style.color = '#fff';
      div.style.border = '1px solid #ccc';
      div.style.borderRadius = '5px';
      div.style.padding = '3px'
      div.style.margin = '10px'
      div.style.textAlign = 'center'
      leDiv[index].before(div)
   }
}

function addTotalDays() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var leHour = leDiv[index].getAttribute('data-totaldays');
      var div = document.createElement('div')
      div.innerHTML = leHour + ' Days'
      div.setAttribute('class', 'total_days')
      div.style.color = '#fff';
      div.style.border = '1px solid #ccc';
      div.style.borderRadius = '5px';
      div.style.padding = '3px'
      div.style.margin = '10px'
      div.style.textAlign = 'center'
      leDiv[index].before(div)
   }
}

function deleteLE (){
   document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]').forEach(e => e.style.display = "none");
}

function addAll(){
   deleteOld();
   setDatas()
   addHourlyLE();
   addDailyLE();
   addTotalDays();
   deleteLE();
}

// Detects when page change (to update LE values).
function detectChange(elementSelector) {
   var element = document.querySelector(elementSelector);
   var observer = new MutationObserver(function () {
      setTimeout(function () {
         addAll();
      }, 1000)
   })
   observer.observe(element, { subtree: true, characterData: true })
}

function checkLoop(elementSelector) {
   var element = document.querySelector(elementSelector);
   if (!element) {
      console.log('element not found, retrying')
      setTimeout(function () { checkLoop('div.le.tw-text-center[data-v-4b7e9996]') }, 500);
   } else {
      console.log('found the element, gonna continue the code')
      addAll();
      detectChange('[data-v-6baa3172]');
   }
}

setTimeout(function () { checkLoop('div.le.tw-text-center[data-v-4b7e9996]') }, 500);
