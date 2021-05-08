const electron = require('electron');
const path = require('path');
const fs = require('fs');
// Importing dialog module using remote
const dialog = electron.remote.dialog;

var save = document.getElementById('save');

const DIRECTORY_WIN=`C:\\electronProject`
    

save.addEventListener('click', (event) => {
	// Resolves to a Promise<Object>
	dialog.showSaveDialog({
		title: 'Select the File Path to save',
		defaultPath: path.join(__dirname, '../assets/sample.txt'),
		// defaultPath: path.join(__dirname, '../assets/'),
		buttonLabel: 'Save',
		// Restricting the user to only Text Files.
		filters: [
			{
				name: 'Text Files',
				extensions: ['txt', 'docx']
			}, ],
		properties: []
	}).then(file => {
		// Stating whether dialog operation was cancelled or not.
		console.log(file.canceled);
		if (!file.canceled) {
			console.log(file.filePath.toString());
			
			// Creating and Writing to the sample.txt file
			fs.writeFile(file.filePath.toString(),
						'This is a Sample File created by Siddharth Raja', function (err) {
				if (err) throw err;
				console.log('Saved!');
			});
		}

		
	}).catch(err => {
		console.log(err)
	});
});

function getCurrentFilenames() {
	console.log("\nCurrent filenames:");
	fs.readdirSync(__dirname).forEach(file => {
	  console.log(file);
	});
	console.log("\n");
  }

function logdata()
	{
		var log = document.getElementById("logs").value;

		console.log("fnc Log: ",log);

		getCurrentFilenames();

		
		
		// Check if the file exists
		let fileExists = fs.existsSync('logs.xlsx');
		console.log("logs.xlsx exists:", fileExists);
		
		// If the file does not exist
		if (!fileExists) {
		console.log("Creating the file")
		fs.writeFileSync("logs.xlsx", "Hello World");
		}
		
		// Get the current filenames
		getCurrentFilenames();
		
		// Check if the file exists again
		fileExists = fs.existsSync('logs.xlsx');
		console.log("logs.xlsx exists:", fileExists);
		
	}

// ...
