import express from "express";
const app = express();



app.use(express.json());

app.get("/", (req, res) => {
    res.send(" BTC Bridge");
  });


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});