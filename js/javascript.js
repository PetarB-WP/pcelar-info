function w3_open_navbar() {
  var sideBar = document.getElementById("sideBar");
  var overlayBg = document.getElementById("overLay");

  if (sideBar.className.indexOf("sidebar-show") == -1) {
    overlayBg.className = overlayBg.className.replace(" w3-hide", "");
    overlayBg.className += " w3-show";
    sideBar.className += " sidebar-show";
  } else {
    overlayBg.className = overlayBg.className.replace(" w3-show", "");
    overlayBg.className += " w3-hide";
    sideBar.className = sideBar.className.replace(" sidebar-show", "");
  }
}

function searchShow(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
