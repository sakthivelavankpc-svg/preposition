PREPOSITION FOR KIDS — FIXED BROWSER EDITION

Why the first build appeared empty:
- The first build depended entirely on the Ruffle runtime from a remote CDN and only showed the SWF player.
- If Ruffle did not initialize, there was no usable HTML content to display.
- The supplied SWF is an ActionScript 3 movie with 425 frames and 12 labeled lesson sections. The SWF itself contains the lesson text, including the preposition labels.
- This build keeps the original SWF but also reconstructs the lesson content as a native HTML fallback.

Research/verification:
- Ruffle's official documentation recommends the self-hosted website package or the official CDN.
- The official API supports creating a player and loading a SWF.
- Ruffle's current stable release is 0.4.1.
- The original SWF contains AVM2/ActionScript 3 classes and a MainTimeline, so a Flash emulator is required to execute the original interactive movie.

How to run:
1. Unzip the project.
2. For best results serve it over HTTP:
   python -m http.server 8000
3. Open:
   http://localhost:8000/
4. The HTML lessons work independently of Ruffle.
5. "Original Flash" attempts to run the supplied SWF through Ruffle.

For online hosting (GitHub Pages, etc.), keep the folder structure unchanged.
