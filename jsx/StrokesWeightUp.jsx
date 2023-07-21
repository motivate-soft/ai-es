

//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

function main() {
  var isRoundWeight = true; // Rounding the strokes weight values

  if (!documents.length) return;
  if (!selection.length || selection.typename == 'TextRange') return;

  // Scale factor for Large Canvas mode
  sf = activeDocument.scaleFactor ? activeDocument.scaleFactor : 1;

  var selPaths = [],
      strokeUnits = app.preferences.getIntegerPreference('strokeUnits');

  getPaths(selection, selPaths);

  for (var i = 0, len = selPaths.length; i < len; i++) {
    increaseWeight(selPaths[i], strokeUnits, isRoundWeight, sf);
  }
}

// Get paths from selection
function getPaths(collection, arr) {
  for (var i = 0, len = collection.length; i < len; i++) {
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
          arr.push(currItem.pathItems[0]);
          break;
        default:
          break;
      }
    } catch (e) {}
  }
}

// Increases the stroke weight relative to the current
function increaseWeight(item, units, isRound, sf) {
  var weight = item.strokeWidth,
      unitsKey = '';

  switch (units) {
    case 0:
      unitsKey = 'in';
      break;
    case 1:
      unitsKey = 'mm';
      break;
    case 2:
      unitsKey = 'pt';
      break;
    case 3:
      unitsKey = 'pc';
      break;
    case 4:
      unitsKey = 'cm';
      break;
    case 6:
      unitsKey = 'px';
      break;
  }

  if (!item.stroked) {
    item.stroked = true;
    item.strokeWidth = convertUnits(0.1, unitsKey, 'pt') / sf;
    return;
  }

  weight = sf * convertUnits(weight, 'pt', unitsKey);
  var tWeight = 0;

  if (roundNum(weight, 1) <= 0.1) {
    tWeight = (isRound ? roundNum(weight, 2) : weight) + 0.01;
  } else if (roundNum(weight, 1) <= 1.5) {
    tWeight = (isRound ? roundNum(weight, 1) : weight) + 0.2;
  } else if (weight < 5) {
    tWeight = (isRound ? roundNum(weight, 1) : weight) + 0.5;
  } else {
    tWeight = (isRound ? roundNum(weight, 0) : weight) + 1.0;
  }

  item.strokeWidth = convertUnits(tWeight, unitsKey, 'pt') / sf;
}

// Convert units of measurement
function convertUnits(value, currUnits, newUnits) {
  return UnitValue(value, currUnits).as(newUnits);
}

// Get stroke weight to fixed point number
function roundNum(num, point) {
  return 1 * num.toFixed(point);
}

try {
  main();
} catch (e) {}