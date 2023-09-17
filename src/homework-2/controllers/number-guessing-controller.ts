import { Request, Response } from 'express';
import { HTTP_STATUS_CODES, MESSAGE } from '../../utils/server-constants';

const MIN = 1;
const MAX = 100;

const guessNumber = (req: Request, res: Response): void => {
  const min = parseInt(req.query.min as string);
  const max = parseInt(req.query.max as string);

  if (isNaN(min) || isNaN(max)) {
    res.status(HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY).send({
      error: MESSAGE.NUMBER_GUESSING_BAD_REQUEST,
    });
  }

  res.status(HTTP_STATUS_CODES.OK).send({
    message: getRandomNumber(),
  });
};

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * MAX) + MIN;
};

export { guessNumber };
