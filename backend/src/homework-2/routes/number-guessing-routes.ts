import express, { Router } from 'express';
import { ROUTES } from '../../utils/server-constants';
import * as guessNumberController from '../controllers/number-guessing-controller';

const numberGuessingRouter: Router = express.Router();

numberGuessingRouter.get(ROUTES.NUMBER_GUESSING_GUESS_ROUTE, guessNumberController.guessNumber);

export { numberGuessingRouter };
