import 'dotenv/config';
import express, { Express } from 'express';
import { babyNameRouter } from './homework-2/routes/baby-name-routes';
import { ROUTES } from './utils/server-constants';
import { numberGuessingRoute } from './homework-2/routes/number-guessing-routes';

const PORT = process.env.PORT ?? 8080;
const app: Express = express();

app.use(express.json());

app.use(ROUTES.BABY_NAME_BASE_ROUTE, babyNameRouter);
app.use(ROUTES.BASE_ROUTE, numberGuessingRoute);

app.listen(PORT, () => {
  console.log(`PORT LISTENING ${PORT}`);
});

export { app };
