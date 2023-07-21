

//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

function main() {
  if (!documents.length) {
    alert('Error\nOpen a document and try again');
    return;
  }

  if (!selection.length || selection.typename == 'TextRange') {
    alert('Error\nPlease select atleast one object');
    return;
  }

  var doc = activeDocument,
      selPaths = [];

  getPaths(selection, selPaths);

  for (var i = 0, selLen = selPaths.length; i < selLen; i++) {
    reverseGradient(selPaths[i]);
  }
}

// Get only Paths from selection
function getPaths(item, arr) {
  for (var i = 0, iLen = item.length; i < iLen; i++) {
    var currItem = item[i];
    try {
      switch (currItem.typename) {
        case 'GroupItem':
          getPaths(currItem.pageItems, arr);
          break;
        case 'PathItem':
          if (currItem.filled && isGradientFill(currItem)) {
            arr.push(currItem);
          } else {
            badFillCount++;
          }
          break;
        case 'CompoundPathItem':
          if (currItem.pathItems[0].filled && isGradientFill(currItem.pathItems[0])) {
            arr.push(currItem.pathItems[0]);
          } else {
            badFillCount++;
          }
          break;
        default:
          break;
      }
    } catch (e) {}
  }
}

function isGradientFill(item) {
  if (item.fillColor.typename === 'GradientColor') { return true; }
  return false;
}

function reverseGradient(item) {
  var gItem = item.fillColor.gradient,
      tempStop = gItem.gradientStops,
      tempColor, tempOpacity;

  for (var i = 0, j = tempStop.length - 1; i < j; i++, j--) {
    var rStop = gItem.gradientStops[j],
        lStop = gItem.gradientStops[i];

    tempColor = rStop.color;
    tempOpacity = rStop.opacity;

    rStop.color = lStop.color;
    rStop.opacity = lStop.opacity;

    lStop.color = tempColor;
    lStop.opacity = tempOpacity;
  }
}

// Run script
try {
  main();
} catch (e) {}