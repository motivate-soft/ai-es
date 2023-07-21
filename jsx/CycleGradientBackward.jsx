
//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

function main() {
  if (!documents.length) return;
  if (!selection.length || selection.typename == 'TextRange') return;

  var selPaths = [],
      tmp = []; // Array of temp paths for fix compound paths

  getPaths(selection, selPaths, tmp);

  // Processing
  for (var i = 0, selLen = selPaths.length; i < selLen; i++) {
    var currItem = selPaths[i];

    // Shift fill gradient
    if (currItem.filled && isGradient(currItem.fillColor)) {
      shiftColorsBackward(currItem.fillColor.gradient);
    }

    // Shift stroke gradient
    if (currItem.stroked && isGradient(currItem.strokeColor)) {
      shiftColorsBackward(currItem.strokeColor.gradient);
    }
  }

  // Clear changes in compound paths
  for (var j = 0, tmpLen = tmp.length; j < tmpLen; j++) {
    tmp[j].remove();
  }
}

/**
 * Get paths from selection
 * @param {object} collection - collection of items
 * @param {array} arr - output array of single paths
 * @param {array} tmp - output array of temporary paths in compounds
 */
function getPaths(collection, arr, tmp) {
  for (var i = 0, iLen = collection.length; i < iLen; i++) {
    var currItem = collection[i];
    try {
      switch (currItem.typename) {
        case 'GroupItem':
          getPaths(currItem.pageItems, arr);
          break;
        case 'PathItem':
          arr.push(currItem);
          break;
        case 'CompoundPathItem':
          // Fix compound path created from groups
          if (!currItem.pathItems.length) {
            tmp.push(currItem.pathItems.add());
          }
          arr.push(currItem.pathItems[0]);
          break;
        default:
          break;
      }
    } catch (e) {}
  }
}

/**
 * Check gradient color
 * @param {object} color - current item color
 * @return {boolean} is gradient color or not
 */
function isGradient(color) {
  return color.typename === 'GradientColor';
}

/**
 * Shift gradient colors backward
 * @param {object} color - current item color
 */
function shiftColorsBackward(color) {
  var gStopsLength = color.gradientStops.length,
      oldStops = [],
      i;

  // Get all stops colors
  for (i = 0; i < gStopsLength; i++) {
    oldStops.push(color.gradientStops[i].color);
  }

  // Rearrange
  for (i = gStopsLength - 1; i >= 0; i--) {
    if (i == gStopsLength - 1) {
      color.gradientStops[i].color = oldStops[0];
      continue;
    }
    color.gradientStops[i].color = oldStops[i + 1];
  }
}

try {
  main();
} catch (e) {}