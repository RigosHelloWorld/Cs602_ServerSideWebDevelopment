import 'dotenv/config';
import express, { Express } from 'express';

const PORT = process.env.PORT ?? 8080;
const app: Express = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`PORT LISTENING ${PORT}`);
});

export { app };
