console.log('content script has loaded!');
console.log('chrome.runtime exists:', !!chrome.runtime);

let pressedKeys = new Set();


// Adding keys to the pressedKeys variable on key press

document.addEventListener('keydown', function(e) {
  if(pressedKeys.has(e.code)) return;
  pressedKeys.add(e.code);


  if(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) {
    let combo = convertKeysToCombo();
  
    console.log('Current Combo: ', combo);

    chrome.runtime.sendMessage({
      action: 'getShortcut',
      combo: combo
    }, (response) => {
    if(response.text) {
      console.log('Found shortcut:', response.text);
      //TODO: Insert this into input field

      let activeElement = document.activeElement;
      console.log('Active element:', activeElement);
      console.log('Element Type:', activeElement.tagName);

      if(activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
        activeElement.value = response.text;
        console.log('Text has been inputted');
      }

    } else {
      console.log('No shortcut found for:', combo);
    }
    });
  }

  console.log('Current Pressed Keys: ', pressedKeys);
});


// Removing keys to the pressedKeys variable on lifting off of key

document.addEventListener('keyup', function(e) {
  pressedKeys.delete(e.code);
  
});

// Key Converter

let keyConverter = {
  'ControlLeft': 'Ctrl',
  'ControlRight': 'Ctrl',
  'AltLeft': 'Alt',
  'KeyT': 'T',
  'KeyA': 'A',
  'KeyH': 'H',
  'KeyS': 'S',
  'MetaLeft': 'Command',
  'MetaRight': 'Command',
  'ShiftLeft': 'Shift',
  'ShiftRight': 'Shift'
};


function convertKeysToCombo() {
  let humanKeys = [];

  console.log('Raw pressedKeys Set:', Array.from(pressedKeys));
  for (let keyCode of pressedKeys) {
    let humanKey = keyConverter[keyCode];

    humanKeys.push(humanKey);
  }
  humanKeys.sort();
  return humanKeys.join('+');
}

// Text Replacement



// Data Storage




// Extension Plumbing