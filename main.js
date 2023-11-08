const { app, BrowserWindow } = require('electron');

const paths = {
    "app": app.getAppPath(),
    "exe": app.getPath("exe"),
    "module": app.getPath("module"),
    "home": app.getPath("home"),
    "appData": app.getPath("appData"),
    "userData": app.getPath("userData"),
    "sessionData": app.getPath("sessionData")
};

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 400,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
    });
  
    win.loadFile('index.html');
    win.webContents.once('did-finish-load', () => { 
        win.webContents.send('paths-message', paths);
        console.log(JSON.stringify(paths, undefined, 2));
    });
}

app.whenReady().then(() => {
    createWindow();
});
