# restaurantplus-list
![示意圖](https://i.imgur.com/I8h5dpX.png)

使用Node.js與Express建置的餐廳清單，提供餐廳列表、餐廳詳細資料以及搜尋餐廳功能。

## Features

- 載入db資料呈現網頁的餐廳資訊
- 點擊餐廳清單，可查看餐廳詳細資訊，包括
  - 類別
  - 地址
  - 電話
  - 描述
  - 圖片
- 提供搜尋餐廳名稱功能

- CRUD功能
  - 使用者可以新增一家餐廳
  - 使用者可以瀏覽一家餐廳的詳細資訊
  - 使用者可以瀏覽全部所有餐廳
  - 使用者可以修改一家餐廳的資訊
  - 使用者可以刪除一家餐廳

## Environment SetUp

 - [Node.js](https://nodejs.org/en/ "title text!")
 
## Installing 

1.打開Terminal，複製此專案至本地端

```
git clone https://github.com/ponyma2100/restaurantplus-list/
```

2.開啟Terminal，進入存放此專案的資料夾

```
cd restaurantplus_list
```

3.安裝 npm套件

```
npm install  //安裝套件
```

4.安裝 nodemon 套件

```
npm install -g nodemon
```

5.新增餐廳種子資料，運行npm run seed 腳本

```
npm run seed
```

6.透過nodemon 啟動伺服器，執行app.js

```
nodemon app.js
```

7.當 terminal 出現以下字樣，表示伺服器已啟動並成功連結

```
Express is listening on http://localhost:3000
```

## 開發環境

-Node.js: v10.15.0

-Express: v4.17.1

-Express-Handlebars: v5.1.0

-Body-parser: v1.19.0

-mongoose: v5.9.25

