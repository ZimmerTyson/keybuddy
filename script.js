let pressedKeys = new Set();

document.addEventListener('keydown', function(e) {
  pressedKeys.add(e.code);
  console.log('Current Pressed Keys: ', pressedKeys);
});

document.addEventListener('keyup', fucntion2(e) {
  pressedKeys.delete(e.code);
  console.log('Current Pressed keys:', pressedKeys);
});