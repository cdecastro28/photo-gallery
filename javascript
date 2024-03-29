// gallery.js
function upDate(previewPic) {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerText = previewPic.alt;
}

function unDo() {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "";
  imageDiv.innerText = "Birthday Wishlist with Amazon";
}

function addTabFocus() {
  var images = document.getElementsByClassName("preview");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

function galleryLoaded() {
  console.log("Gallery has been loaded.");
  addTabFocus();
}

window.onload = galleryLoaded;

var images = document.getElementsByClassName("preview");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("focus", function () {
    console.log("Focus event triggered.");
    upDate(this);
  });

  images[i].addEventListener("blur", function () {
    console.log("Blur event triggered.");
    unDo();
  });

  images[i].addEventListener("mouseout", function () {
    console.log("Mouseout event triggered.");
    unDo();
    this.style.backgroundImage = 'url("")';
  });
}
