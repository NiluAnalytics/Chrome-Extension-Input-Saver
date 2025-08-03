# 🚀 Simple Input Saver Chrome Extension

A straightforward Chrome extension designed to help users quickly save and display text inputs. Ideal for gathering quick notes, leads, or any snippet of text directly from your browser.

## ✨ Features

* **Save Input:** Easily input and save text snippets.
* **Display List:** All saved inputs are displayed as a list within the extension popup.
* **Persistent Storage:** (If applicable, based on your `index.js`) Saved inputs persist even after closing the browser or popup, thanks to Chrome's local storage API.
* **User-Friendly Interface:** Clean and simple design for quick access.

## 🛠️ Technologies Used

* **HTML5:** For the basic structure of the extension's popup UI.
* **CSS3:** For styling and ensuring a clean user experience.
* **JavaScript (Vanilla JS):** Powers the core logic for saving, retrieving, and displaying inputs, including interaction with the Chrome Extensions API.

## 📸 How It Looks (Screenshots & GIF)

<img width="799" height="187" alt="image" src="https://github.com/user-attachments/assets/c5d18caf-4e30-47ed-9fa5-7ef3a02fed5c" />


<img width="655" height="241" alt="image" src="https://github.com/user-attachments/assets/461d3349-fe08-45f5-aac3-19856a963d6a" />

## 📦 How to Install and Use

Since this is a Chrome Extension, you'll need to load it locally in your Chrome browser:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/NiluAnalytics/Simple Input Saver Chrome Extension.git](https://github.com/NiluAnalytics/Simple Input Saver Chrome Extension.git)
    ```

2.  **Open Chrome and navigate to `chrome://extensions`** in your address bar.

3.  **Enable "Developer mode"** by toggling the switch in the top right corner.

4.  Click on **"Load unpacked"** button.

5.  **Select the cloned `Your-Chrome-Extension-Repo-Name` folder** (the one containing `manifest.json`, `index.html`, etc.).

6.  The extension should now appear in your list of extensions, and its icon will be visible in your browser toolbar (you might need to click the puzzle piece icon and pin it for easy access).

7.  **Click the extension icon** to open the popup and start saving inputs!

## 💡 What I Learned / Key Takeaways

* Fundamentals of **Chrome Extension development**, including the crucial `manifest.json` structure and how to define extension properties.
* **Interacting with browser APIs**, specifically `chrome.storage` for persistent data storage (if your `index.js` uses this) and `chrome.tabs` (if you added any tab-related functionality).
* Building a functional user interface within the constraints of an extension popup.
* Managing user input and dynamically displaying content using vanilla JavaScript.
* Understanding the lifecycle and permissions of a browser extension.

---
