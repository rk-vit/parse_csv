import express from "express";
import bodyParser from "body-parser";
import Papa from "papaparse";

const app = express();

app.use(bodyParser.text({ type: 'text/plain' }));

app.post("/", (req, res) => {
  const csvText = req.body;
  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });
  res.json(result.data);
});

app.get("/", (req, res) => {
  res.json({ message: "Heyy" });
});

// Export as a Vercel serverless function handler
export default app;
