

//@target illustrator
$.localize = true; // Enabling automatic localization
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

// Main function
function main() {
  var LANG = { 
        errDoc: { en: 'Error\nOpen a document and try again',
                  ru: 'Ошибка\nОткройте документ и запустите скрипт' },
        errSel:  { en: 'Error\nPlease, select two or more paths',
                    ru: 'Ошибка\nВыделите два или более объектов' },
        errVers: { en: 'Error\nSorry, script only works in Illustrator CS6 and later',
                  ru: 'Ошибка\nСкрипт работает в Illustrator CS6 и выше' }
      };

  if (parseInt(app.version) < 16) {
    alert(LANG.errVers);
    return;
  }

  if (!documents.length) {
    alert(LANG.errDoc);
    return;
  }

  if (selection.length < 2 || selection.typename == 'TextRange') {
    alert(LANG.errSel);
    return;
  }

  var docSel = selection,
      srcItem = docSel[docSel.length - 1];

  for (var i = docSel.length - 2; i >= 0; i--) {
    makeEnvelope(srcItem, docSel[i]);
  }

  selection = null;
}

// Make envelope distort from top object
function makeEnvelope(src, container) {
  if (!isRightType(container)) return;

  selection = null;
  
  var dupSrc = src.duplicate();
  dupSrc.selected = true;
  container.selected = true;

  app.executeMenuCommand('Make Envelope');
}

// Checking the type of container for the envelope distort
function isRightType(item) {
  var types = ['PathItem', 'CompoundPathItem', 'GroupItem', 'MeshItem', 'SymbolItem'];

  for (var i = 0; i < types.length; i++) {
    if (item.typename === types[i]) return true;
  }

  return false;
}

// Run script
try {
  main();
} catch (e) {}