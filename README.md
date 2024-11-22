# Lead Tracker Chrome Extension

## Lead Tracker

The Lead Tracker Chrome Extension is a simple tool that allows users to save, manage, and access their favorite website URLs conveniently. It features the ability to save inputted URLs, save the URL of the current browser tab, and delete all saved URLs.

This project is built with HTML, CSS, and JavaScript and uses Chrome's Tabs API and `localStorage` for seamless functionality.

---

## Features

- **Save Input URLs**:  
  Add URLs manually using the input field.
  
- **Save Active Tab**:  
  Quickly save the URL of the currently active browser tab with one click.
  
- **Persistent Storage**:  
  URLs are saved in `localStorage`, ensuring they remain accessible even after closing the browser.
  
- **Clear All URLs**:  
  Remove all saved URLs with a double-click on the "Delete All" button.
  
- **Dynamic Rendering**:  
  URLs are dynamically rendered as clickable links in a list.

---

## How It Works

1. **Input URLs**:  
   Enter a URL in the input box and click the **SAVE INPUT** button to store it.
   
2. **Save Active Tab**:  
   Click **SAVE TAB** to save the URL of the currently active tab in your browser.
   
3. **Delete All**:  
   Double-click the **DELETE ALL** button to clear all saved URLs.
   
4. **View Saved URLs**:  
   All saved URLs are displayed in a list, with clickable links opening in a new tab.

---

## Setup

1. Clone or download the repository.
2. Open `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** (toggle at the top right).
4. Click **Load unpacked** and select the project folder.
5. The extension will now be available in your Chrome toolbar.

---

## Technologies Used

- **HTML**: Structure and elements.
- **CSS**: Styling the interface.
- **JavaScript**: Core functionality (DOM manipulation, `localStorage`, Chrome Tabs API).
- **Chrome Extensions API**: Interaction with browser tabs.

---

## Screenshots (Optional)
You can include screenshots of the interface or the extension in action to make the README more engaging.

---

### Author

**Clement1991**  
Feel free to reach out or contribute to the project!
