let pressedKeys = new Set();


// Adding keys to the pressedKeys variable on key press

document.addEventListener('keydown', function(e) {
  pressedKeys.add(e.code);
  console.log('Current Pressed Keys: ', pressedKeys);
  convertKeysToCombo();
});


// Removing keys to the pressedKeys variable on lifting off of key

document.addEventListener('keyup', function(e) {
  pressedKeys.delete(e.code);
  console.log('Current Pressed keys:', pressedKeys);
});

// Key Converter

let keyConverter = {
  'ControlLeft': 'Ctrl',
  'ControlRight': 'Ctrl',
  'AltLeft': 'Alt',
  'KeyT': 'T',

};


function convertKeysToCombo() {
  let humanKeys = [];

  for (let keyCode of pressedKeys) {
    let humanKey = keyConverter[keyCode];

    humanKeys.push(humanKey);
  }
  console.log(humanKeys.join(' + '));
}

// Text Replacement



// Data Storage




// Extension Plumbing