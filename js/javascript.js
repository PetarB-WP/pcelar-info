function w3_open_navbar() {
  var sideBar = document.getElementById("sideBar");
  var overlayBg = document.getElementById("overLay");

  if (sideBar.className.indexOf("w3-show") == -1) {
    sideBar.className += " w3-show";
    overlayBg.className += " w3-show";
  } else {
    sideBar.className = sideBar.className.replace(" w3-show", "");
    overlayBg.className = overlayBg.className.replace(" w3-show", "");
  }
}