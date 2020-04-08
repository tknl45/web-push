# WEB推播測試

## 步驟
* FCM申請 Web App (https://console.firebase.google.com/)
  1. 新增/進入專案(project)
  2. 新增網頁應用
  3. 複製 Firebase SDK snippet 資料 *
  4. 專案>Settings>cloud messaging>網路設定>網路推播憑證>建立金鑰組 > 複製金鑰[<YOUR_PUBLIC_VAPID_KEY_HERE>]*

* 網頁
  1. 參考資料-https://github.com/firebase/quickstart-js/tree/a2182e85b1110a571fce65723fbea21ebcea0a74/messaging
  2. 將Firebase SDK snippet js部分儲存成`init.js`
  3. 複製index.html 
    > 3.1 修改參數 script link
    ```html
    <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js"></script>
    <script src="init.js"></script>

    ```
   > 3.2 修改YOUR_PUBLIC_VAPID_KEY_HERE 

* 背景接收推播
  1. 參考資料-https://github.com/firebase/quickstart-js/tree/a2182e85b1110a571fce65723fbea21ebcea0a74/messaging
  2. 複製firebase-messaging-sw.js 修改裡面的引入js script
  ```
  importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
  importScripts('init.js');
  ```

* 測試
  1. 注意要確認瀏覽器是否有開接收推播的權限，在網址列左邊查一下



## 測試

```
curl -X POST -H "Authorization: key=你的伺服器金鑰" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "this is a title", 
    "body": "this is body"
  },
  "to": "你的 token"
}' "https://fcm.googleapis.com/fcm/send"
```

### 你的伺服器金鑰
firebase>你的專案>Settings>cloud messaging>伺服器金鑰

### 你的 token
網頁上所取得的Instance ID Token