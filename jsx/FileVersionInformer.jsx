

//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

function main() {
	var progCounter = 1,
			files = [],
			sourceFolder = Folder.selectDialog('Select the folder with Illustrator .ai, .eps files');
	
	// Progress bar
	var win = new Window('palette', 'FileVersionInformer', [150, 150, 600, 260]);
	win.pnl = win.add('panel', [10, 10, 440, 100], undefined);
	win.pnl.progBar = win.pnl.add('progressbar', [20, 35, 410, 50], 0, 100);
	win.pnl.progBarLabel = win.pnl.add('statictext', [20, 20, 320, 35], '0%');

	if (sourceFolder != null) {
		var resultFile = new File(sourceFolder.path + '/' + sourceFolder.name + '/FileVersionInformer.txt');
		resultFile.encoding = 'UTF8';
		if (resultFile != null) resultFile.remove();

		files = getSubfolderFiles(sourceFolder);

		// If folder not empty
		if (files.length > 0) {
			//Show Progress bar
			win.show();
			resultFile.open('a+');
			resultFile.writeln('List of .ai, .eps files in Folder & Subolders');
			resultFile.writeln("------------------");
			for (var i = 0, fLen = files.length; i < fLen; i++) {
				// Change Progress bar
				win.pnl.progBar.value = progCounter * (100 / fLen);
				win.pnl.progBarLabel.text = win.pnl.progBar.value.toFixed(0) + "%";
				win.update();
				// Writing current file name and Illustrator version
				resultFile.writeln("File '" + decodeURI(files[i].name) + "' saved as " + getVersion(files[i]));
				progCounter++;
			}
			resultFile.writeln();
			resultFile.close();
			alert('Script is done\nLook "FileVersionInformer.txt" in source folder');
		} else {
			alert('No matching files found');
		}
	}
}

function getSubfolderFiles(folder) {
	var filesList = folder.getFiles(),
			files = [];

	for (var i = 0, fLen = filesList.length; i < fLen; i++) {
		if (filesList[i] instanceof Folder) {
			files = files.concat(getSubfolderFiles(filesList[i]));
		} else if (filesList[i] instanceof File) {
			if (filesList[i].name.indexOf('.ai') > -1 || filesList[i].name.indexOf('.eps') > -1) {
				files.push(filesList[i]);
			}
		}
	}

	return files;
}

// Finding in file information about version
function getVersion(targetFile) {
	if (targetFile.open() == false) return null;

	var lineVersion = '',
			outVersion = '',
			getVers = 0,
			counter = 0;

	while (!targetFile.eof) {
		lineVersion = targetFile.readln();
		//Search version info
		if (/^%%Creator:/.test(lineVersion)) {
			getVers = Math.floor(lineVersion.substr(32)).toString();
			// Convert version number
			if (/24/.test(getVers)) outVersion = 'CC2020';
			if (/22|21|20|19|18|17/.test(getVers)) outVersion = 'CC';
			if (/16/.test(getVers)) outVersion = 'CS6';
			if (/15/.test(getVers)) outVersion = 'CS5';
			if (/14/.test(getVers)) outVersion = 'CS4';
			if (/13/.test(getVers)) outVersion = 'CS3';
			if (/12/.test(getVers)) outVersion = 'CS2';
			if (/11/.test(getVers)) outVersion = 'CS';

			counter++;
			// For .eps files search second 'Creator' string
			if (counter > 1) break;
		}
	}
	targetFile.close();

	return outVersion;
}

// Run script
try {
  main();
} catch (e) {}