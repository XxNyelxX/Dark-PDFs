# Dark-PDFs (Chromium Extension)

A lightweight, secure, and fully integrated Dark Mode viewer for PDF files. Built with vanilla JavaScript and Mozilla's PDF.js, this extension automatically intercepts PDF loading in the browser and renders them in a customized, eye-friendly dark environment.

## Features
- **Automatic Interception**: Seamlessly redirects `.pdf` URLs to the dark mode viewer without manual clicks.
- **Local File Support**: Works perfectly with offline PDFs stored on your local hard drive (`file:///`).
- **Privacy First**: Zero tracking. Everything is processed locally on your machine.
- **Manifest V3**: Built using the latest Chromium extension standards and strict Content Security Policies (CSP).

## How to Install (Developer Mode)

Since this extension is not currently on the Chrome Web Store, you can easily install it locally on any Chromium-based browser (Google Chrome, Brave, Edge, Vivaldi, etc.):

### Step 1: Get the Code
1. Download this repository as a ZIP file by clicking the green **Code** button and selecting **Download ZIP**.
2. Extract the ZIP file into a folder on your computer (e.g., `Documents/Dark-PDFs`).

### Step 2: Load into your Browser
1. Open your browser and go to the extensions page:
   - Chrome: `chrome://extensions`
   - Brave: `brave://extensions`
   - Edge: `edge://extensions`
2. Turn on **Developer mode** (usually a toggle switch in the top right corner).
3. Click the **Load unpacked** button in the top left.
4. Select the folder where you extracted the extension. 

### Step 3: Enable Local File Access (Crucial)
To allow the extension to read PDFs saved on your computer:
1. Locate "Dark-PDFs" in your extensions list.
2. Click on **Details**.
3. Scroll down and toggle on **Allow access to file URLs**.

## Usage
Simply drag and drop any local PDF into your browser, or click any PDF link on the web. The extension will automatically catch it and open it in the new viewer. Click the moon icon to toggle between dark and light mode.
## Built With
- Vanilla JavaScript
- [PDF.js](https://mozilla.github.io/pdf.js/) (Apache 2.0 License)
- Chrome Extensions API (Manifest V3)