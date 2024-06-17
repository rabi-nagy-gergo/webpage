// Cross browser addEvent function by John Resig
// http://ejohn.org/blog/flexible-javascript-events/
// https://codepen.io/SitePoint/pen/GpzrPG

const nav = document.getElementById("nav");

function addEvent(obj, type, fn) {
  if (obj.attachEvent) {
    obj['e' + type + fn] = fn;
    obj[type + fn] = function() {
      obj['e' + type + fn](window.event);
    }
    obj.attachEvent('on' + type, obj[type + fn]);
  } else obj.addEventListener(type, fn, false);
}

function switchStyles() {
  var selectedOption = this.options[this.selectedIndex],
    className = selectedOption.value;

  document.body.className = className;
  if(className == "large")
    {
      nav.classList.remove("sticky-top");
    }
    else
    {
      nav.classList.add("sticky-top");
    }
  
}

var styleSwitcher = document.getElementById("styleSwitcher");
addEvent(styleSwitcher, "change", switchStyles);