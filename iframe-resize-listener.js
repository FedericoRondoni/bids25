window.addEventListener("message", function(event) {
  if (event.data && event.data.brellaHeight) {
    var iframe = document.getElementById("brella-frame");
    if (iframe) {
      iframe.style.height = event.data.brellaHeight + "px";
    }
  }
});
