document.addEventListener("DOMContentLoaded", function() {
   firstSection = document.getElementsByTagName('section')[0];
   urlValue = getUrlParam(firstSection.id);
   switchTo(urlValue);
   fillPreElements();
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf("section") > -1){
        urlparameter = getUrlVars().section;
        }
    return urlparameter;
}


function switchTo (elemId) {
   sectionsToHide = document.getElementsByTagName('section');

   for (var i = 0; i < sectionsToHide.length; i++) {

      if (sectionsToHide[i].classList.contains('sidebar') ||
            sectionsToHide[i].id == elemId){
         sectionsToHide[i].style.display = "block";
      } else {
         sectionsToHide[i].style.display = "none";
      }
   }
}

function fillPreElements (){
   var preElements = document.getElementsByTagName('pre');
   for (var i = 0; i < preElements.length; ++i){
      var inner = preElements[i].innerHTML;

      preElements[i].innerHTML = inner.replace(/</g, '&lt;').replace(/>/g, '&gt;');
   }
}
