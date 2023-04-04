const express = require("express");
const cors = require("cors"); // Import cors package

const app = express();

// Enable cors
app.use(cors());

app.get("/", (req, res) => {
  res.send(`
  <div class="form-control">
    <form>
      <span class="captcha" id="word">EBLU</span>
      <input id="captcha" type="text" placeholder="Enter Above Word" />
      <input type="submit" id="submit" value="submit" />
    </form>
  </div>
  `);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Note that in a production environment, it's recommended to restrict this to specific origins.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
