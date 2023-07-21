
//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

if (documents.length > 0) {
  var origDoc = app.activeDocument;
  try {
    for (var i = 0, docLen = documents.length; i < docLen; i++) {
      activeDocument = documents[i];
      var doc = activeDocument;
      if (!doc.saved && /\.ai$/i.test(doc.name)) {
        doc.save();
      }
    }
  } catch (e) {}
  // Activate last used document
  activeDocument = origDoc;
}
