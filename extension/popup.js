// Fetch shortcuts when the extension icon is clicked
document.addEventListener("DOMContentLoaded", () => {
  console.log("Popup Loaded!");

  chrome.storage.sync.get(["shortcuts"], (result) => {
    let shortcutsList = document.getElementById("shortcutsList");
    let shortcuts = result.shortcuts || {};
  
    for(let combo in shortcuts) {
      let text = shortcuts[combo];

      let shortText = document.createElement("p");
      shortText.textContent = `${combo}: ${text}`;

      shortcutsList.appendChild(shortText);
      

      console.log("Got from storage: ", result.shortcuts);
    }
    console.log("Got from storage: ", result.shortcuts);
  });
});

chrome.storage.sync.set({
  shortcuts: {
    'Alt+Ctrl+H': 'Hello! How can I help you?',
    'Alt+Ctrl+T': 'Thank you for contacting us!'
  }
}, () => {
  console.log('Test shortcuts saved');
});


// Save and store shortcuts when the add button is pressed 

document.getElementById("addShortcut").addEventListener("click", (key, replacementText) => {
  let combo = document.getElementById("text").value
  let text = document.getElementById("textInput").value


  console.log("Combo: ", combo);
  console.log("Text: ", text);
  chrome.storage.sync.set({key: replacementText});


});
