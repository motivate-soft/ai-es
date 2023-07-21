

//@target illustrator
$.localize = true; // Enabling automatic localization
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

// Main function
function main() {
  var counter = getPaths(selection),
      msg = { en: 'Selected ' + counter + ' objects', ru: 'Выделено ' + counter + ' объектов'};
  alert(msg);
}

function getPaths(collection, count) {
  var count = 0;
  for (var i = 0, len = collection.length; i < len; i++) {
    try {
      switch (collection[i].typename) {
        case 'GroupItem':
          count += getPaths(collection[i].pageItems);
          break;
        default:
          count++;
          break;
      }
    } catch (e) {}
  }
  return count;
}

// Run script
try {
  main();
} catch (e) {}