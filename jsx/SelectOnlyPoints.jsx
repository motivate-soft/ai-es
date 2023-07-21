

//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file
$.localize = true; // Enabling automatic localization

// Main function
function main() {
  var LANG = {
        errDoc: { en: 'Error\nOpen a document and try again',
                  ru: 'Ошибка\nОткройте документ и запустите скрипт' },
        errSel: { en: 'Error\nUse Lasso tool or Direct Selection Tool to select an area with points',
                ru: 'Ошибка\nИспользуйте инструмент "Лассо или "Прямое выделения" для выбора области с точками' }
      };

  if (!documents.length) {
    alert(LANG.errDoc);
    return;
  }

  var selPaths = [],
      selPoints = [];

  getPaths(selection, selPaths);

  if (!(selPaths instanceof Array) || selPaths.length < 1) {
    alert(LANG.errSel);
    return;
  }

  getPoints(selPaths, selPoints);

  selection = null;

  for (var i = 0, pLen = selPoints.length; i < pLen; i++) {
    selPoints[i].selected = PathPointSelection.ANCHORPOINT;
  }
}

// Get single items from selection
function getPaths(items, arr) {
  for (var i = 0, iLen = items.length; i < iLen; i++) {
    var currItem = items[i];
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

// Get selected points on paths
function getPoints(items, arr) {
  for (var i = 0, iLen = items.length; i < iLen; i++) {
    if (items[i].pathPoints.length > 1) {
      var points = items[i].pathPoints;
      for (var j = 0, pLen = points.length; j < pLen; j++) {
        if ( isSelected(points[j]) ) arr.push(points[j]);
      }
    }
  }
}

// Check current point is selected
function isSelected(point) {
  return point.selected == PathPointSelection.ANCHORPOINT;
}

// Run script
try {
  main();
} catch (e) {}