function deleteOld() {
   document.querySelectorAll('.hourly_LE').forEach(e => e.remove());
}

// Converts and add info to hourly LE
function addHourlyLE(dataName) {
   // Converting the value and preparing it to insert in the div.
   var elems = document.querySelectorAll(dataName);
   var index = 0, length = elems.length;
   for (; index < length; index++) {
      var num = elems[index].innerHTML.match(/\d+/g).join('/').substring(9);
      var numOp = eval(num);
      // For some reason the node array we get from the elems comes
      // with some undefined strings. This is to get rid of them.
      if (numOp) {
         var numFinal = numOp.toFixed(1)
         // Creating, styling and positioning the div with the converted LE.
         var div = document.createElement('div')
         div.innerHTML = numFinal + '/Hour'
         div.setAttribute('class', 'hourly_LE')
         div.style.color = '#fff';
         div.style.border = '1px solid #ccc';
         div.style.borderRadius = '5px';
         div.style.padding = '3px'
         div.style.margin = '10px'
         div.style.textAlign = 'center'
         elems[index].prepend(div)
      }
   }
}

// Detects when page change (to update LE values).
function detectChange(elementSelector) {
   var element = document.querySelector(elementSelector);
   var observer = new MutationObserver(function () {
      setTimeout(function () {
         deleteOld();
         addHourlyLE('[data-v-4b7e9996]');
      }, 1000)
   })
   observer.observe(element, { subtree: true, characterData: true })
}

function checkLoop(elementSelector) {
   var element = document.querySelector(elementSelector);
   if (!element) {
      console.log('element not found, retrying')
      setTimeout(function () { checkLoop('[data-v-6baa3172]') }, 500);
   } else {
      console.log('found the element, gonna continue the code')
      deleteOld();
      addHourlyLE('data-v-4b7e9996');
      detectChange('[data-v-6baa3172]');
   }
}

setTimeout(function () { checkLoop('[data-v-6baa3172]') }, 500);
