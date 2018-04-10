const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

const app = electron.app;

app.on('ready', _ => {
    var mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });

    mainWindow.loadURL("file://"+__dirname+"/index.html");

    mainWindow.on('close', () => mainWindow = null);
});