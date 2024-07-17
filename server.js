import express from "express"
const app = express();
const port = 8007;

const start = process.hrtime();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  const elapsed = process.hrtime(start);
  const elapsedTimeInMs = (elapsed[0] * 1000 + elapsed[1] / 1000000).toFixed(3);
  console.log(`Express server started in ${elapsedTimeInMs}ms`);
});
