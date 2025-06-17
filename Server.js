const express = require('express');
const app = express();
const port = 3000;

//開放game資料夾作為靜態網頁
app.use(express.static('public'));

//預設首頁；載入game/index.html
app.get('/', (req, res) => 
{
  res.sendFile(__dirname + '/public/index.html'); 
});

//啟動伺服器
app.listen(port, () => 
{
  console.log(`Server is running at http://localhost:${port}`);
});