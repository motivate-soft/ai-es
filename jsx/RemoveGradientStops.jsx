
//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

// Main function
function main() {
  if (!documents.length) return;
  if (!selection.length || selection.typename == 'TextRange') return;

  var selPaths = [],
      tmp = [];

  getPaths(selection, selPaths, tmp);

  if(!hasGradient(selPaths)) return;

  for (var i = 0; i < selPaths.length; i++) {
    if (selPaths[i].filled && isGradient(selPaths[i].fillColor)) {
      removeIntermediateStops(selPaths[i].fillColor.gradient);
    }

    if (selPaths[i].stroked && isGradient(selPaths[i].strokeColor)) {
      removeIntermediateStops(selPaths[i].strokeColor.gradient);
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
function getPaths(item, arr, tmp) {
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
 * Search gradient color
 * @param {array} collection - collection of items
 * @return {boolean} contains at least one gradient
 */
function hasGradient(collection) {
  for (var i = 0, len = collection.length; i < len; i++) {
    if ((collection[i].filled && isGradient(collection[i].fillColor)) || 
        (collection[i].stroked && isGradient(collection[i].strokeColor))) {
      return true;
    }
  }
  return false;
}

/**
 * Remove all intermediate color stops
 * @param {object} gradient - gradient color
 */
function removeIntermediateStops(gradient) {
  for (var i = gradient.gradientStops.length - 2; i > 0; i--) {
    gradient.gradientStops[i].remove();
  }
}

// Run script
try {
  main();
} catch (e) {}