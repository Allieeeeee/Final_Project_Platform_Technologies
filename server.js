const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Profile</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #C4FFF7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 400px;
          }
          .name {
            font-size: 24px;
            font-weight: bold;
          }
          .section {
            font-size: 16px;
            margin-top: 5px;
            color: #444;
          }
          img.quote-img {
            width: 80%;
            max-height: 200px;
            object-fit: contain;
            border-radius: 10px;
            margin-top: 15px;
            margin-bottom: 15px;
          }
          .quote {
            margin-top: 20px;
            font-style: italic;
            color: #333;
            font-size: 15px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="name">Shiela May N. Taccad</div>
          <div class="section">NT-4101</div>

          <img src="waltdisney.jpg" class="quote-img" alt="Favorite Quote Image">

          <div class="quote">
            "Keep Moving Forward" 
            - Meet the Robinsons
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});