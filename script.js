var i = 0;
var s = true;
var txt = 'this is sqdorte';
var last = '';
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ?!^~;.$%#@*(){}[]"

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function typeWriter() {
  if (s) {
    j = 0;
    k = Math.floor((Math.random() * 10) + 5);
    s = false;
  }
  if (i < txt.length) {
    if (j < k) {
      document.getElementById("typing").innerHTML = last

      index = Math.floor((Math.random() * chars.length) + 1);
      document.getElementById("typing").innerHTML += chars.charAt(index);

      j++;
      setTimeout(typeWriter, Math.floor((Math.random() * 30) + 10));
    } else {
      document.getElementById("typing").innerHTML = last + txt.charAt(i);
      last = document.getElementById("typing").innerHTML;
      i++;
      s = true;
      setTimeout(typeWriter, Math.floor((Math.random() * 30) + 10));
    }
  }
}

function showSocial() {
  $("#social").fadeIn(2500)
}

window.onload = function() {
  $("#social").hide()
  typeWriter();
  setTimeout(showSocial, 2500);
};