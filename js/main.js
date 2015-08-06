var app = require('app');  // Module to control application life.
var nfApi = require('nedflix-api');
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var ipc = require('ipc');

var mainWindow = null;

 // nfApi.getRTLEpisodes('277291', function(data) {
 //   console.log(data);
 // });



app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1366, height: 768});

  // Optimizes screen real estate and simplifies ui
  mainWindow.setAutoHideMenuBar(true);
  mainWindow.setMenuBarVisibility(false);

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/../index.html');

  // Open the devtools.
  mainWindow.openDevTools();
  mainWindow.webContents.on('did-finish-load', function() {
    // Improve this by letting js doing the call to the backend
    nfApi.getNPO(function(data) {
      mainWindow.webContents.send('getNPO', data);
    });

    nfApi.getRTL('az', function(data) {
      mainWindow.webContents.send('getRTL', data);
    });

    nfApi.getMTV(function(data) {
      mainWindow.webContents.send('getMTV', data);
    });
    
    nfApi.getVTM(function(data) {
      mainWindow.webContents.send('getVTM', data);
    });

  });


  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
