

// Function that converts the LE and add the div to each item.
function addLE(dataName, result) {

   // Remove all the old converted LE from the previous page.
   document.querySelectorAll('.converted_LE').forEach(e => e.remove());
   // Converting the value and preparing it to insert in the div.
   var elems = document.querySelectorAll('[' + dataName + ']');
   var index = 0, length = elems.length;
   for (; index < length; index++) {
      var num = elems[index].innerHTML.match(/\d+/g).join('/').substring(9);
      var numOp = eval(num);

      // For some reason the node array we get from the elems comes
      // with some undefined strings. This is to get rid of them.
      if (numOp === undefined) {
         continue;
      }
      var numFinal = numOp.toFixed(1)

      // Creating, styling and positioning the div with the converted LE.
      var div = document.createElement('div')
      div.innerHTML = numFinal + result
      div.setAttribute('class', 'converted_LE')
      div.style.color = '#fff';
      div.style.border = '1px solid #ccc';
      div.style.borderRadius = '5px';
      div.style.padding = '3px'
      div.style.margin = '10px'
      div.style.textAlign = 'center'
      elems[index].prepend(div)
   }
}
/* 
// Call the addLE everytime page changes.
function changeListener () {
var currentPage = document.querySelector('p.currentPage');
var observer = new MutationObserver(function () {
   setTimeout(function () {
      console.log('detectou')
      addLE('data-v-4b7e9996', '/Hour')
   }, 1000)
})
observer.observe(currentPage, { subtree: true, characterData: true })
} */

/* changeListener()

document.addEventListener("DOMContentLoaded", function () {
   console.log('carregou!')
   changeListener();
}); */

var currentPage = document.querySelector('p.currentPage');
var observer = new MutationObserver(function () {
   setTimeout(function () {
      console.log('detectou')
      addLE('data-v-4b7e9996', '/Hour')
   }, 1000)
})
observer.observe(currentPage, { subtree: true, characterData: true })

browser.tabs.onUpdated.addListener(function (tabId, changeInfo) {
   if (changeInfo.status == "complete") {
      function changeListener() {
         var currentPage = document.querySelector('p.currentPage');
         var observer = new MutationObserver(function () {
            setTimeout(function () {
               console.log('detectou')
               addLE('data-v-4b7e9996', '/Hour')
            }, 1000)
         })
         observer.observe(currentPage, { subtree: true, characterData: true })
      }
   }
})

/*  var pageBody = document.querySelector('body');
pageBody.addEventListener("mousemove", () => {
   console.log('opa')
   addLE('data-v-4b7e9996', '/Hour');
}) */

