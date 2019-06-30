window.addEventListener('DOMContentLoaded', (event) => {
    var el = document.getElementsByClassName('wp-block-personofnote-image-switcher');
    for (var i = 0; i < el.length; i++) {
        const img = el[i].firstElementChild;
        img.addEventListener("mouseenter", function(){if (img.style.opacity === "0") {
            img.style.opacity = "1";
          } else {
            img.style.opacity = "0";
          };}, false);
          img.addEventListener("mouseleave", function(){if (img.style.opacity === "0") {
            img.style.opacity = "1";
          } else {
            img.style.opacity = "0";
          }}, false);
        }   
});
