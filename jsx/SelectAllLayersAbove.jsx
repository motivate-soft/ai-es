
//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

// Main function
function main() {
  var isInclActive = false; // Include the content of the active layer

  if (!documents.length) {
    alert('Error\nOpen a document and try again');
    return;
  }

  if (selection.length && selection.typename !== 'TextRange') {
    activeDocument.activeLayer = getParentLayer(selection[0]);
  }

  var layers = getLayersAbove(isInclActive);
  selectAllOnLayers(layers);
}

/**
 * Get all layers above the active layer
 * @param {boolean} isInclActive - include the active layer
 * @return {array} out - layers
 */
function getLayersAbove(isInclActive) {
  var doc = activeDocument,
      aLayer = getParentLayer(doc.activeLayer),
      out = [];

  for (var i = 0, len = doc.layers.length; i < len; i++) {
    if (doc.layers[i] !== aLayer) {
      if(isAvailable(doc.layers[i])) out.push(doc.layers[i]);
    } else {
      break;
    }
  }
  if (isInclActive && isAvailable(aLayer)) out.push(aLayer);

  return out;
}

/**
 * Get the parent layer for object
 * @param {object} obj - selected item or sublayer
 * @return {object} parent layer 
 */
function getParentLayer(obj) {
  if (obj.parent.typename === 'Document') return obj;
  else return getParentLayer(obj.parent);
}

/**
 * Check layer availability
 * @param {object} layer
 * @return {boolean} layer is unlocked and visible
 */
function isAvailable(layer) {
  return layer.visible && !layer.locked;
}

/**
 * Select all objects on layers
 * @param {array} layers
 */
function selectAllOnLayers(layers) {
  if (!layers.length) return;

  selection = null;
  for (var i = 0, len = layers.length; i < len; i++) {
    layers[i].hasSelectedArtwork = true;
  }
}

// Run script
try {
  main();
} catch (e) {}