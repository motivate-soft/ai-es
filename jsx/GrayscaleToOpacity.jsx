

//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

// Main function
function main() {
  if (!documents.length) return;

  var doc = activeDocument,
      selArray = [];

  app.executeMenuCommand('Colors7');

  getPaths(selection, selArray);

  for (var i = 0, selLen = selArray.length; i < selLen; i++) {
    var value = selArray[i].fillColor.gray;
    selArray[i].opacity = value.toFixed(0);
  }

  // Get paths from selection
  function getPaths(item, arr) {
    for (var i = 0, iLen = item.length; i < iLen; i++) {
      var currItem = item[i];
      try {
        switch (currItem.typename) {
          case 'GroupItem':
            getPaths(currItem.pageItems, arr);
            break;
          case 'PathItem':
            arr.push(currItem);
            break;
          case 'CompoundPathItem':
            getPaths(currItem.pathItems, arr);
            break;
          default:
            currItem.selected = false;
            break;
        }
      } catch (e) {}
    }
  }
}

// Run script
try {
  main();
} catch (e) {}