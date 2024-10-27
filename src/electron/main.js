const { app, ipcMain, globalShortcut, BrowserWindow, Menu } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
    const window = new BrowserWindow({
		minWidth: 800,
      	minHeight: 600,
      	webPreferences: {
        	preload: path.join(__dirname, 'preload.js')
      	}
    })
  
    window.loadFile('src/index.html')
	window.maximize(true)
	window.setFullScreen(true)
	Menu.setApplicationMenu(null)

	window.on('focus', () => {
		globalShortcut.register('F11', () => {
			const isFullScreen = window.isFullScreen()
			window.setFullScreen(!isFullScreen)
		})
		globalShortcut.register('Ctrl+Q', () => {
			app.quit()
		})
	})
	
	window.on('blur', () => {
		globalShortcut.unregisterAll(true)
	})
}


// Creates the window
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Closes software after all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
		globalShortcut.unregisterAll();
		app.quit()
	}
})