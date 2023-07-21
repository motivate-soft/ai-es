

//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

function main() {
  var CFG = {
        units: getUnits(), // Active document units
        isSaveName: true, // Set false to overwrite the full name
        isRound: false, // Set true to get a round number
        precision: 2,  // Size rounding precision
        isAddUnit: true,
        separator: '_'
      };

  if (!documents.length) {
    alert('Error: \nOpen a document and try again');
    return;
  }

  var doc = activeDocument,
      width, height,
      size = '';

  // Scale factor for Large Canvas mode
  CFG.sf = doc.scaleFactor ? doc.scaleFactor : 1;

  for (var i = 0, len = doc.artboards.length; i < len; i++) {
    var currAb = doc.artboards[i];
    
    width = CFG.sf * convertUnits(currAb.artboardRect[2] - currAb.artboardRect[0], 'px', CFG.units);
    height = CFG.sf * convertUnits(currAb.artboardRect[1] - currAb.artboardRect[3], 'px', CFG.units);

    if (CFG.isRound) {
      width = Math.round(width);
      height = Math.round(height);
    } else {
      width = width.toFixed(CFG.precision);
      height = height.toFixed(CFG.precision);
    }

    size = width + 'x' + height;
    if (CFG.isAddUnit) size += CFG.units;

    if (CFG.isSaveName) {
      currAb.name += CFG.separator + size;
    } else {
      currAb.name = size;
    }

  }
}

// Get active document ruler units
function getUnits() {
  if (!documents.length) return '';
  var key = activeDocument.rulerUnits.toString().replace('RulerUnits.', '');
  switch (key) {
    case 'Pixels': return 'px';
    case 'Points': return 'pt';
    case 'Picas': return 'pc';
    case 'Inches': return 'in';
    case 'Millimeters': return 'mm';
    case 'Centimeters': return 'cm';
    // Added in CC 2023 v27.1.1
    case 'Meters': return 'm';
    case 'Feet': return 'ft';
    case 'FeetInches': return 'ft';
    case 'Yards': return 'yd';
    // Parse new units in CC 2020-2023 if a document is saved
    case 'Unknown':
      var xmp = activeDocument.XMPString;
      if (/stDim:unit/i.test(xmp)) {
        var units = /<stDim:unit>(.*?)<\/stDim:unit>/g.exec(xmp)[1];
        if (units == 'Meters') return 'm';
        if (units == 'Feet') return 'ft';
        if (units == 'FeetInches') return 'ft';
        if (units == 'Yards') return 'yd';
        return 'px';
      }
      break;
    default: return 'px';
  }
}

// Convert units of measurement
function convertUnits(value, currUnits, newUnits) {
  return UnitValue(value, currUnits).as(newUnits);
}

try {
  main();
} catch (e) {}