import express, { Router } from 'express';
import { ROUTES } from '../../utils/server-constants';
import * as guessNumberController from '../controllers/number-guessing-controller';

const numberGuessingRoute: Router = express.Router();

numberGuessingRoute.get(ROUTES.NUMBER_GUESSING_GUESS_ROUTE, guessNumberController.guessNumber);

export { numberGuessingRoute };
