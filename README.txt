RENIR — INSTRUCTION MANUAL WEBSITE
Version 1.0

OPEN THE WEBSITE
1. Extract the entire ZIP file.
2. Open the RENIR_Instruction_Manual folder.
3. Double-click index.html to open the website in your browser.

No installation, account, internet connection, server, or build command is needed.
Keep index.html, styles.css, script.js, and the assets folder together.

WHAT IS INCLUDED
- A responsive RENIR instruction website for desktop, tablet, and mobile.
- Four steps: turn on RENIR, open the app, calibrate, and start using RENIR.
- English / Thai language switching.
- Clickable step navigation, Previous / Next controls, and keyboard navigation.
- A Print guide button. Printing includes all four steps in the selected language.
- Local RENIR product imagery and an illustrated app icon.

EDIT THE GUIDE
- index.html contains the English fallback content and page structure.
- script.js contains all English and Thai text in the messages object.
  Update script.js and the corresponding English fallback in index.html together.
- styles.css contains colors, layout, responsiveness, and print styles.
- assets/renir-device.png is the product image. Replace it with a new image using
  the same name, or update the image paths in index.html.
- assets/favicon.svg is the small browser-tab icon.

HOST THE WEBSITE
Upload the contents of this folder, including the assets folder, to any static
website host. index.html must be at the root of the uploaded website.
This ZIP is an offline website package; it does not include a public hosting URL.

CONTENT NOTES FOR THE OWNER
This manual follows the supplied RENIR quick-start sequence. Specific button
locations, power-button timing, pairing methods, calibration procedures, and
calibration durations were not supplied and are intentionally not specified.
The calibration step refers the reader to the guidance supplied with the device
and app. Replace it with your verified procedure when that procedure is final.
The app illustration is schematic, not an actual RENIR app screenshot.
The product render is an existing RENIR design image supplied in your materials.
The website presents instructions. It does not connect to hardware, perform
calibration, collect readings, or make medical decisions.

TECHNICAL NOTES
Built with plain HTML, CSS, and JavaScript. No external scripts, fonts, analytics,
CDNs, dependencies, or network requests are used. The optional language preference
is saved in the current browser only, when browser storage is available.
With JavaScript disabled, all four English instructions remain visible.
For keyboard use: Tab to the step selector; use the arrow keys, Home, or End to
change steps. Reduced-motion preferences are respected.
