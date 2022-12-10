import app from "./api/index.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => 
  console.log(`server listen to http://localhost:${PORT}`)
);