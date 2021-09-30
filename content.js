

function setDatas() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var num = leDiv[index].innerHTML.match(/\d+/g).join('/');
      var leHour = eval(num);
      var leDay = leHour * 24
      var splitBar = num.split('/');
      var totalDays = eval(splitBar[1]) / 24;
      leDiv[index].setAttribute('data-lehour', leHour.toFixed(1));
      leDiv[index].setAttribute('data-leday', leDay.toFixed(0));
      leDiv[index].setAttribute('data-totaldays', totalDays);
      leDiv[index].setAttribute('data-totalle', splitBar[0]);
   }
}

function deleteOld() {
   document.querySelectorAll('.my_div_right').forEach(e => e.remove());
   document.querySelectorAll('.my_div_left').forEach(e => e.remove());
}

function addDivRight() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var priceDiv = document.querySelectorAll('div.tw-ml-4[data-v-d31307be]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'my_div_right');
      priceDiv[index].after(div);
   }
}

function addDivLeft() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'my_div_left');
      leDiv[index].after(div);
   }
}

function addHourlyLE() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var myDiv = document.querySelectorAll('.my_div_right')
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var leHour = leDiv[index].getAttribute('data-lehour');
      var div = document.createElement('div')
      div.innerHTML = leHour + '/Hour'
      div.setAttribute('class', 'hourly_le')
      div.style.color = '#fff';
      div.style.border = '1px solid #ccc';
      div.style.borderRadius = '5px';
      div.style.padding = '5px'
      div.style.margin = '10px'
      div.style.textAlign = 'center'
      div.style.fontSize = 'small'
      myDiv[index].append(div)
   }
} 

function addDailyLE() {
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var myDiv = document.querySelectorAll('.my_div_right')
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var leHour = leDiv[index].getAttribute('data-leday');
      var div = document.createElement('div')
      div.innerHTML = leHour + '/Day'
      div.setAttribute('class', 'daily_le')
      div.style.color = '#fff';
      div.style.border = '1px solid #ccc';
      div.style.borderRadius = '5px';
      div.style.padding = '5px';
      div.style.margin = '10px';
      div.style.textAlign = 'center';
      myDiv[index].append(div);
   }
}

function addTotalDays() {
   var myDiv = document.querySelectorAll('.my_div_left');
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
      div.style.padding = '5px';
      div.style.margin = '10px';
      div.style.textAlign = 'center';
      div.style.fontSize = 'small'
      myDiv[index].append(div);
   }
}

function addTotalLe() {
   var myDiv = document.querySelectorAll('.my_div_left');
   var leDiv = document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]');
   var index = 0, length = leDiv.length;
   for (; index < length; index++) {
      var totalLE = leDiv[index].getAttribute('data-totalle');
      var div = document.createElement('div')
      div.innerHTML = 'LE: ' + totalLE
      div.setAttribute('class', 'total_le')
      div.style.color = '#fff';
      div.style.border = '1px solid #ccc';
      div.style.borderRadius = '5px';
      div.style.padding = '5px';
      div.style.margin = '10px';
      div.style.textAlign = 'center';
      div.style.fontSize = 'small'
      myDiv[index].append(div);
   }
}

function addInfos() {
   addHourlyLE();
   addDailyLE();
   addTotalDays();
   addTotalLe();
}

function plantStyle() {
   document.querySelectorAll('div.le.tw-text-center[data-v-4b7e9996]').forEach(e => e.style.display = "none");
   document.querySelectorAll('div.tw-flex.tw-justify-end[data-v-d31307be]').forEach(e => e.style.justifyContent = 'center');
}

function addAll() {
   deleteOld();
   setDatas();
   addDivRight();
   addDivLeft();
   addInfos();
   plantStyle();
   plantClick();
}

function detectChange(elementSelector) {
   var element = document.querySelector(elementSelector);
   var observer = new MutationObserver(function () {
      setTimeout(function () {
         addAll();
      }, 1000)
   })
   observer.observe(element, { subtree: true, characterData: true })
}

function checkLoop() {
   var element = document.querySelector('div.le.tw-text-center[data-v-4b7e9996]');
   if (!element) {
      console.log('element not found, retrying');
      setTimeout(function () { checkLoop() }, 500);
   } else {
      console.log('found the element, gonna continue the code');
      addAll();
      detectChange('[data-v-6baa3172]');
   }
}
function plantClick() {
   var plant = document.querySelectorAll('a[data-v-15fe76e7]')
   var index = 0, length = plant.length;
   for (; index < length; index++) {
      plant[index].addEventListener("click", function () {
         plantPageLoop();
      })
   }
}

function backClick() {
   var back = document.querySelector('img[data-v-c7687590]')
   back.addEventListener("click", function () {
      setTimeout(function () { checkLoop() }, 500);
   })
}

function plantPageLoop() {
   var element = document.querySelector('img[data-v-c7687590]');
   if (!element) {
      console.log('element not found, retrying');
      setTimeout(function () { plantPageLoop() }, 500);
   } else {
      console.log('found the element, gonna continue the code');
      backClick();
   }
}

setTimeout(function () { checkLoop() }, 500);