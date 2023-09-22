import { Request, Response } from 'express';
import { HTTP_STATUS_CODES, MESSAGE } from '../../utils/server-constants';

const guessNumber = (req: Request, res: Response): void => {
  const min = parseInt(req.params.min as string);
  const max = parseInt(req.params.max as string);
  const guess = parseInt(req.params.guess as string);

  if (isNaN(min) || isNaN(max) || isNaN(guess)) {
    res.status(HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY).send({
      error: MESSAGE.NUMBER_GUESSING_BAD_REQUEST,
    });
  }

  const randomNum = getRandomNumber(min, max);

  if (guess === randomNum) {
    res.status(HTTP_STATUS_CODES.OK).send({
      message: MESSAGE.GUESSED_OK,
    });
  } else {
    res.status(HTTP_STATUS_CODES.OK).send({
      message: MESSAGE.INCORRECT_GUESS,
    });
  }
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min;
};

export { guessNumber };
