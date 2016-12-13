# 使用Electron開發的簡單計算機

**使用Web技術開發桌面應用程式**

透過用nodejs為底層的Electron可以快速讓web開發者用網頁技術開發出桌面應用程式

- 快捷鍵 `Alt + 空白鍵` 快速開啟跟隱藏
- 右下角會有小icon`點右鍵`可以離開整個應用程式
- 再輸入框輸入數學運算式後按下 `Enter` 計算出結果


以下專案的關鍵檔案:

- `package.json` - 所有使用到的package檔案，使用npm或是yarn安裝需要它.
- `main.js` - javascript寫應用程式都在這支檔案裡面.
- `index.html` - 應用程式的ui介面，就跟一般web開發一樣


## 如何運行

電腦要先安裝 **nodejs** 然後開啟 **命令提式字元(cmd)**

```bash
# 用npm先安裝所有package或是用yarn安裝
npm i
```

```bash
# 開啟應用程式
npm start
```

使用Yarn來進行安裝package.json

* 有安裝問題請參考
<https://github.com/a3804430/vue-template>

```bash
# 打包應用程式出來
npm run pack
```

