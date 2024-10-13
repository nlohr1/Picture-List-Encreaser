# Picture-Magnifier #
**Adds a "zoom in" click for all images in an HTML file**

If this JS snippet is inserted between the &lt;header&gt; and the &lt;body&gt; of a HTML file, a single mouse click on the picture will enlarge the resized image to its original size.
A second click will resize the image to the width and height specified in the file.

**Important:**<br>
Each image must contain its own width (and height), for ex.:  
&lt;img src="data:image/png;base64,......" alt="" <b>width="20px"</b> height="20px"&gt;  
If the height is absent, the browser calculates it proportionally to the width of the image - therefore picture-heights can be omitted!

---
# Bild-Lupe
**Fügt ein „Vergrößern“-Klick für alle Bilder in einer HTML-Datei hinzu**

Wenn dieser JS-Ausschnitt zwischen dem &lt;header&gt; und dem &lt;body&gt; einer HTML-Datei eingefügt wird, genügt ein Mausklick auf das jeweilige Bild, um das skalierte Bild auf seine Originalgröße zu vergrößern.
Ein zweiter Klick passt die Bildgröße wieder auf die in der Datei eingestellte Breite und Höhe an.

**Wichtig:**<br>
Jedes Bild muss seine eigene Breite (und Höhe) enthalten, z.B. mit:  
&lt;img src="data:image/png;base64,......" alt="" <b>width="20px"</b> height="20px"&gt;  
Bei fehlerder Höhenangabe berechnet der Browser diese proportional zur Breite des Bildes - daher können Höhen auch weggelassen werden!
