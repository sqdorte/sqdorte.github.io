var s = true

function typeWriter(txt, callback) {
  if (s) {
    document.getElementById("typewriter").innerHTML = ''
    s = false;
  }
  if (txt.length > 0) {
    document.getElementById("typewriter").innerHTML += txt.charAt(0);
    setTimeout(typeWriter, Math.floor((Math.random() * 30) + 10), txt.slice(1), callback);
  } else  {
    s = true;
    if (typeof callback === "string") {
      setTimeout(function(){window.location.href = callback}, 80)
    } else if (typeof callback === "function") {
      setTimeout(callback, 80)
    }
  }
}

function about(){
  document.getElementById("typewriter").removeAttribute('id')
  document.getElementById("terminal").innerHTML += `<br>
  [insira descricao foda aqui] <br>
  <span class="prompt"><span class="lambda">λ</span> ~ </span><span id="typewriter"></span>`
}