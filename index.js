const { ipcRenderer } = require('electron');

ipcRenderer.on('paths-message', function (evt, message) {
    const paths = JSON.stringify(message, undefined, '\t')
    const dataElement = document.getElementById("data");
    
    dataElement.innerText = paths.replace(/": "/g, '":  \t"');
    console.log(paths);
});


