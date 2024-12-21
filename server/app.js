import express from "express";
import cors from "cors";
import cocktailRouter from "./routes/cocktailRoutes.js";
const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
app.use("/api/cocktail", cocktailRouter);

app.get('/', function (req, res) {
    res.send({ title: 'Liqueur Site' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});