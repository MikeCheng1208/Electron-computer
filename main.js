const {app, globalShortcut, BrowserWindow, Menu, Tray} = require('electron')

const path = require('path')
const url = require('url')

// 保留一個全域的物件關聯以避免 JavaScript 物件 GC 機制造成視窗自動關閉
let mainWindow
/*---------------------------------------*/
var s = 0;
var isActive = true;
/*---------------------------------------*/
function createWindow () {
  // 創建瀏覽器窗口。
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 65,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
    });

    //並加載應用程序的index.html。
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // 開啟開發者工具
    // mainWindow.webContents.openDevTools();

    // 窗口關閉時發出。
    mainWindow.on('closed', function () {
        // 將此 window 物件解除關聯。
        // 如果你的應用程式支援多視窗，通常會將這些物件存在一個陣列裡面。
        // 現在就是刪除對應的視窗物件的時機。
        mainWindow = null
    })

    //鍵盤控制
    globalShortcut.register('Alt+Space', () => {
        isActive = !isActive;
        if(isActive){
          mainWindow.show();  //視窗開啟
        }else{
          mainWindow.hide();  //視窗隱藏
        }
    })
    //鍵盤控制
    globalShortcut.register('Esc', () => {
        isActive = false;
        mainWindow.hide();  //視窗隱藏
    })


    createTray();   
}

//右下角的icon圖示功能
function createTray(){
    const tray = new Tray(path.resolve(__dirname, 'mike.png'));
    const contextMenu = Menu.buildFromTemplate([
        {label: '開啟視窗', role:'minimize', click:()=>{
             mainWindow.show();  //視窗開啟
        }},
        {label: '隱藏視窗', role:'minimize', click:()=>{
             mainWindow.hide();  //視窗隱藏
        }},
        {label: '離開應用程式', role:'quit'}
    ])
    tray.setContextMenu(contextMenu)
}

// 當 Electron 完成初始化並且可以開始建立視窗的時候，
// 會發送 'ready' 訊號，並執行對應的 callback
// 我們指定收到 'ready' 訊號時，執行 createWindow();
app.on('ready', createWindow)

// 當所有視窗都關閉時，結束應用程式 ( app.quit() )
app.on('window-all-closed', function () {
    // OS X 的使用習慣是當所有視窗關閉的時候，上方的 menu bar 仍然維持開啟
    // 此時應用程式還沒有完全關閉，除非使用者強制按 Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
     // OS X 通常在應用程式已經起來了，但是所有視窗關閉的時候，還可以重新建立主視窗
    if (mainWindow === null) {
        createWindow()
    }
})

