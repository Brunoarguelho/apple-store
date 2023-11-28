
document.addEventListener("DOMContentLoaded", function() { //texto-automatico
    // Seleciona todos os elementos com a classe texto
    var textos = document.querySelectorAll(".text-unico");
    // Para cada elemento, muda o estado da animação para rodar
    for (var i = 0; i < textos.length; i++) {
      textos[i].style.animationPlayState = "running";
    }
  });

      var slider = document.querySelector(".slider"); //banner automatico
      function checkEnd() {
        if (slider.offsetLeft == -3000) {
          slider.style.left = "0px";
          slider.style.animation = "none";
          setTimeout(function() {
            slider.style.animation = "slide 40s linear infinite";
          }, 100);
        }
      }
      setInterval(checkEnd, 100);