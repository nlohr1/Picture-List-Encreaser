
<!-- ======= Insert this complete Section below the <body> tag ======= -->
<!-- 1. Styles for Toggled Images -->
<style>
/* 1. Styling for the overlay background */
#image-overlay {display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0, 0, 0, 0.8); z-index:1000; justify-content:center; align-items:center}
#overlay-image {max-width:90%; max-height:90%; box-shadow:0 0 20px rgba(255, 255, 255, 0.8); border:2px solid #69e; cursor:pointer}
</style>

<!-- 2. Overlay container -->
<div id="image-overlay" onclick="toggleOverlay()"><img id="overlay-image"></div>

<!-- 3. JS-Script -->
<script>
function ImgRez(imgElement) { //Funktion zum Anzeigen des Bildes im Overlay
  var overlay = document.getElementById("image-overlay"); // Overlay-Container abrufen
  var overlayImage = document.getElementById("overlay-image"); // Overlay-Bild abrufen
  overlayImage.src = imgElement.src; // Quelle des Overlay-Bildes setzen
  overlay.style.display = "flex"; // Overlay sichtbar machen
}

function toggleOverlay() { //Funktion zum Ausblenden des Overlays
  var overlay = document.getElementById("image-overlay"); // Overlay-Container abrufen
  overlay.style.display = "none"; // Overlay ausblenden
}

window.onload = function() { // Wenn die Seite geladen ist, alle Bilder bearbeiten
  var images = document.getElementsByTagName("img"); // Alle Bilder abrufen
  for (var i = 0; i < images.length; i++) {
    images[i].title = "clickme"; // Title-Attribut für jedes Bild hinzufügen
    images[i].onclick = function() { // Klick-Event für jedes Bild festlegen
      ImgRez(this); // Funktion zum Anzeigen des Bildes aufrufen
    };
  }
};
</script>
<!-- ======= End Scripting ======= -->