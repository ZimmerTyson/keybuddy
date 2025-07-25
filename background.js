let shortcuts = {
  'A+Alt+Ctrl': 'Thank you for contacting us!',
  'Alt+Ctrl+H': 'Hello! How can I help you today?',
  'Alt+Ctrl+S': 'I will look into this and get back to you shortly.'
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if(request.action === 'getShortcut') {
    let combo = request.combo;
    let text = shortcuts[combo];

    sendResponse({text: text});
  }
});